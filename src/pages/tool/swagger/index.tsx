/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 21:25:50
 * @FilePath: /RuoYi-React/src/pages/tool/swagger/index.tsx
 * @Description: 工具 - 接口文档
 */
import { PageContainer } from '@ant-design/pro-components';
import { Card } from 'antd';
import React, { useEffect } from 'react';

/**
 *
 *
 * */

const CacheInfo: React.FC = () => {
  useEffect(() => {
    const frame = document.getElementById('bdIframe');
    if (frame) {
      const deviceWidth = document.documentElement.clientWidth;
      const deviceHeight = document.documentElement.clientHeight;
      frame.style.width = `${Number(deviceWidth) - 220}px`;
      frame.style.height = `${Number(deviceHeight) - 120}px`;
    }
  });

  return (
    <PageContainer>
      <Card title="Developing" />
    </PageContainer>
  );
};

export default CacheInfo;
