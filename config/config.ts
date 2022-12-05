/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-23 15:11:44
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 21:07:44
 * @FilePath: /RuoYi-React/config/config.ts
 * @Description: umi 配置
 */
// https://umijs.org/config/
import { defineConfig } from '@umijs/max';

import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  clickToComponent: {},
  hash: true,
  access: {},
  initialState: {},
  model: {},
  request: {},
  antd: {},
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  targets: {},
  // umi routes: https://umijs.org/docs/routing
  routes,
  /**
   * @name 主题的配置
   * @description 虽然叫主题，但是其实只是 less 的变量设置
   * @doc antd的主题设置 https://ant.design/docs/react/customize-theme-cn
   * @doc umi 的theme 配置 https://umijs.org/docs/api/config#theme
   */
  theme: {
    // 如果不想要 configProvide 动态设置主题需要把这个设置为 default
    // 只有设置为 variable， 才能使用 configProvide 动态设置主色调
    'root-entry-name': 'variable',
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  //================ pro 插件配置 =================
  presets: ['umi-presets-pro'],
  // Fast Refresh 热更新
  fastRefresh: true,
  mfsu: {},
});
