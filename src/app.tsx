/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 22:38:13
 * @FilePath: /RuoYi-React/src/app.tsx
 * @Description: 项目运行时环境配置
 */
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
import { createFromIconfontCN } from '@ant-design/icons';
import { getRouters } from './services/ant-design-pro/menu';
import RightContent from './components/RightContent';
import { GlobalRequestConfig } from './request';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2825989_d8kc305wcip.js',
});

const loginPath = '/user/login';

/** 全局请求拦截 */
export const request: RequestConfig = { ...GlobalRequestConfig };

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
  return {
    rightContentRender: () => <RightContent />,
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      title: '七妮妮',
      size: 'small',
    },
    pageTitleRender: false,
    waterMarkProps: {
      content: initialState?.currentUser?.nickName + ' ' + initialState?.currentUser?.userName,
      fontColor: 'rgba(0, 0, 0, 0.05)',
    },
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    ...initialState?.settings,
    // setting drawer
    childrenRender: (children, props) => {
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
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
