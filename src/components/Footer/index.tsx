import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
export default () => {
  const defaultMessage = 'Based on RuoYi v4.7.0';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      style={{ background: 'none' }}
      links={[
        {
          key: 'Ruoyi-Vue',
          title: 'Ruoyi-Vue',
          href: 'http://ruoyi.vip/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/oakhole',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
