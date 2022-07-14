import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';

import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import type { RequestOptionsInit, ResponseError } from 'umi-request';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import { BookOutlined, createFromIconfontCN, LinkOutlined } from '@ant-design/icons';

import { getRouters } from './services/ant-design-pro/menu';

import defaultSettings from '../config/defaultSettings';
import { message, notification } from 'antd';
import HeaderContent from './components/HeaderContent';
import { lowerCase } from 'lodash';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2825989_d8kc305wcip.js',
});

const { footerRender } = defaultSettings;

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/** 响应消息 */
const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 加载中提示信息
let beforeRequestLoading: any;
/** 拦截请求方法: POST、PUT、DELETE, 添加 message 提示 */
const beforeRequest = (url: string, options: RequestOptionsInit) => {
  if (
    url !== '/api/login' &&
    url !== '/api/logout' &&
    ['post', 'put', 'delete'].some((method) => method === lowerCase(options.method))
  ) {
    beforeRequestLoading = message.loading('正在处理，请稍后');
  }

  return {
    url: url,
    options: { ...options },
  };
};

/** 响应后提示信息 */
const afterResponse = async (response: Response, options: RequestOptionsInit) => {
  // 仅处理 json 响应数据
  if (response.headers.get('content-type')?.indexOf('application/json') !== -1) {
    beforeRequestLoading?.();
    const res = await response.clone().json();
    switch (res.code) {
      case 200:
        if (
          options.url !== '/api/login' &&
          options.url !== '/api/logout' &&
          ['post', 'put', 'delete'].some((method) => method === lowerCase(options.method))
        ) {
          switch (lowerCase(options.method)) {
            case 'post':
              message.success('添加成功');
              break;
            case 'put':
              message.success('更新成功');
              break;
            case 'delete':
              message.success('删除成功');
              break;
            default:
              message.success('操作成功');
          }
        }
        break;
      case 401:
        let redirect = history.location.pathname;
        if (redirect.indexOf('login') !== -1) redirect = '';
        if (redirect) {
          redirect = '?redirect=' + redirect;
        }
        const search = history.location.search;
        history.push(loginPath + redirect + search);
        break;
      case 404:
      case 500:
        message.error(res.msg ?? codeMessage[res.code]);
        break;
      default:
        break;
    }
  }
  return response;
};

/** Authorization 鉴权 token */
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  // 排除 login / getCaptcha
  if (/api\/(captchaImage|login)/.test(url)) {
    return {
      url: `${url}`,
      options: { ...options },
    };
  }
  const authHeader = {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

/** 查询时参数转换 */
const convertPaginationArgs = (url: string, options: any) => {
  if (options.method === 'get' && options.params && 'current' in options.params) {
    options.params.pageNum = options.params.current;
    delete options.params.current;
    return {
      url: `${url}`,
      options: { ...options, interceptors: true },
    };
  }

  return {
    url: `${url}`,
    options: { ...options },
  };
};

/** 查询结果转换 */
const convertPaginationResponse = async (response: Response) => {
  if (response.headers.get('content-type')?.indexOf('application/json') !== -1) {
    const res = await response.clone().json();
    res.success = res.code === 200;
    res.data = res.data ?? res.rows;
    delete res.rows;
    return res;
  } else {
    return response;
  }
};

/** 异常处理 */
const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/** 全局请求拦截 */
export const request: RequestConfig = {
  requestInterceptors: [beforeRequest, authHeaderInterceptor, convertPaginationArgs],
  responseInterceptors: [afterResponse, convertPaginationResponse],
  errorHandler: errorHandler,
};

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/** @see  https://umijs.org/zh-CN/plugins/plugin-initial-state */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  token?: string;
  collapsed?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const res: any = await queryCurrentUser();
      res.user.permissions = res.permissions;
      res.user.roles = res.roles;
      return res.user;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: {},
    };
  }

  return {
    fetchUserInfo,
    settings: {},
    token: '',
    collapsed: false,
  };
}

/** 获取 menu 信息 */
function fetchMenuData(menuData: any) {
  menuData.forEach((menu: any) => {
    menu.icon = <IconFont type={`icon-${menu.meta.icon}`} />;
    menu.name = menu.meta.title;
    menu.component = '@pages/system/user';

    if ('children' in menu) {
      menu.items = menu.children;
      fetchMenuData(menu.items);
    }
  });

  return menuData;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  const onCollapse = (collapsed: boolean): void => {
    setInitialState({ ...initialState, collapsed }).then();
  };

  return {
    headerContentRender: () => <HeaderContent />,
    onCollapse: onCollapse,
    collapsed: initialState?.collapsed,
    // 隐藏菜单中收起按钮
    collapsedButtonRender: false,
    breakpoint: 'xl',
    defaultCollapsed: true,
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.nickName + ' ' + initialState?.currentUser?.userName,
      fontColor: 'rgba(0, 0, 0, 0.05)',
    },
    footerRender: () => (footerRender === false ? '' : <Footer />),
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    SettingDrawer: {},
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank" key={'openApi'}>
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs" key={'component'}>
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
    menu: {
      params: {
        userId: initialState?.currentUser?.userId,
      },
      request: async () => {
        const res = await getRouters();
        const menuData = [
          {
            name: '首页',
            path: '/dashboard',
            icon: <IconFont type="icon-home" />,
            children: [
              {
                name: '工作台',
                path: '/dashboard/workplace',
              },
              {
                name: '分析页',
                path: '/dashboard/analysis',
              },
              {
                name: '监控页',
                path: '/dashboard/monitor',
              },
            ],
          },
        ].concat(await fetchMenuData(res.data));
        return menuData;
      },
    },
  };
};
