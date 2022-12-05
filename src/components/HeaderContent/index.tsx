import React from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { ProBreadcrumb } from '@ant-design/pro-components';

export type HeaderContent = {
  collapse?: boolean;
  onCollapse?: (collapsed: boolean) => void;
};

const GlobalHeaderContent: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const collapsed = initialState.collapsed;

  const toggleCollapsed = function () {
    setInitialState((s) => ({ ...s, collapsed: !collapsed }));
  };

  return (
    <>
      <div
        onClick={() => {
          toggleCollapsed();
        }}
        style={{
          cursor: 'pointer',
          fontSize: '16px',
          float: 'left',
          paddingLeft: '8px',
          paddingRight: '16px',
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <ProBreadcrumb />
    </>
  );
};

export default GlobalHeaderContent;
