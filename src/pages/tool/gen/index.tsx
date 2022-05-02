import { Card } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import React from 'react';

/**
 *
 *
 * */

export type GlobalTableProps = {};

const TableList: React.FC<GlobalTableProps> = () => {
  return (
    <GridContent>
      <Card title="Developing 开发中，请给个星星支持支持！" />
    </GridContent>
  );
};

// export default TableList;
export default TableList;
