/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-23 15:11:44
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-02 00:09:22
 * @FilePath: /RuoYi-React/config/defaultSettings.ts
 * @Description: 默认主题配置
 */
import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  colorPrimary: '#1677FF',
  layout: 'mix',
  contentWidth: 'Fluid',
  siderMenuType: 'sub',
  splitMenus: false,
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '若依管理系统',
  pwa: false,
  logo: 'http://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png',
  iconfontUrl: '',
};

export default Settings;
