import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: '若依管理系统',
  pwa: false,
  logo: 'http://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png',
  iconfontUrl: '',
  footerRender: false,
};

export default Settings;
