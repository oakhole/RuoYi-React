/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:02
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 21:20:29
 * @FilePath: /RuoYi-React/config/routes.ts
 * @Description: 路由配置
 */
export default [
  {
    path: '/',
    redirect: '/dashboard/workplace',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/account',
    routes: [
      {
        path: '/account',
        redirect: '/account/center',
      },
      {
        name: 'center',
        path: '/account/center',
        component: 'account/center',
      },
      {
        name: 'settings',
        path: '/account/settings',
        component: 'account/settings',
      },
    ],
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/workplace',
      },
      {
        title: 'menu.dashboard.workplace',
        name: 'workplace',
        path: '/dashboard/workplace',
        component: 'dashboard/workplace',
      },
      {
        title: 'menu.dashboard.monitor',
        name: 'monitor',
        path: '/dashboard/monitor',
        component: 'dashboard/monitor',
      },
      {
        title: 'menu.dashboard.analysis',
        name: 'analysis',
        path: '/dashboard/analysis',
        component: 'dashboard/analysis',
      },
    ],
  },
  {
    name: 'system',
    path: '/system',
    routes: [
      {
        path: '/system',
        redirect: '/system/user',
      },
      {
        title: 'menu.system.user',
        name: 'user',
        path: '/system/user',
        component: 'system/user',
      },
      {
        title: 'menu.system.role',
        name: 'role',
        path: '/system/role',
        component: 'system/role',
      },
      {
        title: 'menu.system.menu',
        name: 'menu',
        path: '/system/menu',
        component: 'system/menu',
      },
      {
        title: 'menu.system.dept',
        name: 'dept',
        path: '/system/dept',
        component: 'system/dept',
      },
      {
        title: 'menu.system.user',
        name: 'post',
        path: '/system/post',
        component: 'system/post',
      },
      {
        title: 'menu.system.dict',
        name: 'dict',
        path: '/system/dict',
        component: 'system/dict',
      },
      {
        title: 'menu.system.dict.data',
        name: 'dictData',
        path: '/system/dict/data/:id',
        component: 'system/dictData',
      },
      {
        title: 'menu.system.config',
        name: 'config',
        path: '/system/config',
        component: 'system/config',
      },
      {
        title: 'menu.system.notice',
        name: 'notice',
        path: '/system/notice',
        component: 'system/notice',
      },
      {
        name: 'log',
        path: '/system/log',
        routes: [
          {
            path: '/system/log',
            redirect: '/system/log/operlog',
          },
          {
            title: 'menu.system.operLog',
            name: 'operLog',
            path: '/system/log/operlog',
            component: 'monitor/operlog',
          },
          {
            title: 'menu.system.logininfor',
            name: 'logininfor',
            path: '/system/log/logininfor',
            component: 'monitor/logininfor',
          },
        ],
      },
    ],
  },
  {
    name: 'monitor',
    path: '/monitor',
    routes: [
      {
        path: '/monitor',
        redirect: '/monitor/online',
      },
      {
        title: 'menu.monitor.online-user',
        name: 'online',
        path: '/monitor/online',
        component: 'monitor/online',
      },
      {
        title: 'menu.monitor.schedule',
        name: 'job',
        path: '/monitor/job',
        component: 'monitor/job',
      },
      {
        title: 'menu.monitor.schedule.log',
        name: 'job',
        path: '/monitor/job/log/:id',
        component: 'monitor/joblog',
      },
      {
        title: 'menu.monitor.druid',
        name: 'druid',
        path: '/monitor/druid',
        component: 'monitor/druid',
      },
      {
        title: 'menu.monitor.server',
        name: 'server',
        path: '/monitor/server',
        component: 'monitor/server',
      },
      {
        title: 'menu.monitor.cache',
        name: 'cache',
        path: '/monitor/cache',
        component: 'monitor/cache',
      },
    ],
  },
  {
    name: 'tool',
    path: '/tool',
    routes: [
      {
        path: '/tool',
        redirect: '/tool/build',
      },
      {
        title: 'menu.tool.form-builder',
        name: 'build',
        path: '/tool/build',
        component: 'tool/design',
      },
      {
        title: 'menu.tool.code-gen',
        name: 'gen',
        path: '/tool/gen',
        component: 'tool/gen',
      },
      {
        title: 'menu.tool.open-api',
        name: 'swagger',
        path: '/tool/swagger',
        component: 'tool/swagger',
      },
    ],
  },
  {
    component: './404',
  },
];
