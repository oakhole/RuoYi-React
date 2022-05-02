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
        name: 'workplace',
        path: '/dashboard/workplace',
        component: 'dashboard/workplace',
      },
      {
        name: 'monitor',
        path: '/dashboard/monitor',
        component: 'dashboard/monitor',
      },
      {
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
        name: 'user',
        path: '/system/user',
        component: 'system/user',
      },
      {
        name: 'role',
        path: '/system/role',
        component: 'system/role',
      },
      {
        name: 'menu',
        path: '/system/menu',
        component: 'system/menu',
      },
      {
        name: 'dept',
        path: '/system/dept',
        component: 'system/dept',
      },
      {
        name: 'post',
        path: '/system/post',
        component: 'system/post',
      },
      {
        name: 'dict',
        path: '/system/dict',
        component: 'system/dict',
      },
      {
        name: 'dictData',
        path: '/system/dict/data/:id?',
        component: 'system/dictData',
      },
      {
        name: 'config',
        path: '/system/config',
        component: 'system/config',
      },
      {
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
            name: 'operLog',
            path: '/system/log/operlog',
            component: 'monitor/operlog',
          },
          {
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
        name: 'online',
        path: '/monitor/online',
        component: 'monitor/online',
      },
      {
        name: 'job',
        path: '/monitor/job',
        component: 'monitor/job',
      },
      {
        name: 'job',
        path: '/monitor/job/log/:id?',
        component: 'monitor/joblog',
      },
      {
        name: 'druid',
        path: '/monitor/druid',
        component: 'monitor/druid',
      },
      {
        name: 'server',
        path: '/monitor/server',
        component: 'monitor/server',
      },
      {
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
        name: 'build',
        path: '/tool/build',
        component: 'tool/design',
      },
      {
        name: 'gen',
        path: '/tool/gen',
        component: 'tool/gen',
      },
      {
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
