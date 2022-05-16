import KeepAliveTabs from '@/components/KeepAliveTabs';
import defaultSettings from '../../config/defaultSettings';

const { tabsLayout } = defaultSettings;

/* *
 *
 * @author whiteshader@163.com
 * @datetime  2022/02/22
 *
 * */

const TabsLayout: React.FC = (props) => {
  const renderTabs = () => {
    if (tabsLayout) return <KeepAliveTabs />;
    else return null;
  };
  return (
    <div>
      {renderTabs()}
      <div
        style={tabsLayout ? { margin: '64px 24px 24px 24px' } : { margin: '24px 24px 24px 24px' }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default TabsLayout;
