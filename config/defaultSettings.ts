import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
  tabsLayout?: boolean;
} = {
  navTheme: 'dark',
  primaryColor: '#1890ff',
  headerHeight: 48,
  layout: 'side',
  contentWidth: 'Fluid',
  splitMenus: false,
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '若依管理系统',
  pwa: false,
  logo: 'http://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png',
  iconfontUrl: '',
  tabsLayout: false,
};

export default Settings;
