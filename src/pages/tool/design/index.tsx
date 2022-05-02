import { Card } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import React from 'react';

export type FormBuilderProps = {};

const FormBuilder: React.FC<FormBuilderProps> = () => {
  return (
    <GridContent>
      <Card title="Developing" />
    </GridContent>
  );
};

export default FormBuilder;
