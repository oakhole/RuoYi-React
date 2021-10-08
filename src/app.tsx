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

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2825989_d8kc305wcip.js',
});

const { footerRender } = defaultSettings;

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

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
const convertPaginationArgs = (url: string, options: RequestOptionsInit) => {
  if (options.method === 'get' && options.params && 'current' in options.params) {
    options.params['pageNum'] = options.params['current'];
    delete options.params['current'];
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

/** 查询结果转换 */
const convertPaginationResponse = async (response: Response) => {
  const res = await response.clone().json();

  if ('code' in res) {
    if (res.code === 200) {
      res.success = true;
    } else if (res.code !== 401) {
      if (res.msg) {
        message.error(res.msg);
      } else {
        message.error(codeMessage[res.code]);
      }
    }
  }

  if ('rows' in res) {
    res.data = res.rows;
    delete res.rows;
  }
  return res;
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
  requestInterceptors: [authHeaderInterceptor, convertPaginationArgs],
  responseInterceptors: [convertPaginationResponse],
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
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const res = await queryCurrentUser();
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
  };
}

/** 获取 menu 信息 */
function fetchMenuData(menuData: any) {
  menuData.forEach((item: any) => {
    item.icon = <IconFont type={`icon-${item.meta.icon}`} />;
    item.name = item.meta.title;
    item.component = '@pages/system/user';

    if ('children' in item) {
      fetchMenuData(item.children);
    }
  });

  return menuData;
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
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
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
    breakpoint: false,
    defaultCollapsed: true,
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
            component: './dashboard/workplace',
          },
        ].concat(await fetchMenuData(res.data));
        return menuData;
      },
    },
  };
};
