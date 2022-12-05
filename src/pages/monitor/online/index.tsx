/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 22:53:34
 * @FilePath: /RuoYi-React/src/pages/monitor/online/index.tsx
 * @Description: 监控管理 - 在线用户
 */
import type { FormInstance } from 'antd';
import { Popconfirm } from 'antd';
import { Button, message } from 'antd';
import React, { useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, useAccess } from '@umijs/max';
import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { OnlineUserType } from './data.d';
import { getOnlineUserList, forceLogout } from './service';
import moment from 'moment';

const handleRemoveOne = async (selectedRow: OnlineUserType) => {
  const hide = message.loading('正在强制下线');
  try {
    await forceLogout(selectedRow.tokenId);
    hide();
    message.success('强制下线成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('强制下线失败，请重试');
    return false;
  }
};

const OnlineUserTableList: React.FC = () => {
  const formTableRef = useRef<FormInstance>();
  const actionRef = useRef<ActionType>();
  const access = useAccess();
  const intl = useIntl();

  useEffect(() => {}, []);

  const columns: ProColumns<OnlineUserType>[] = [
    {
      title: <FormattedMessage id="monitor.OnlineUser.token_id" defaultMessage="会话编号" />,
      dataIndex: 'tokenId',
      valueType: 'text',
      hideInSearch: true,
      ellipsis: true,
      copyable: true,
    },
    {
      title: <FormattedMessage id="monitor.OnlineUser.user_name" defaultMessage="用户账号" />,
      dataIndex: 'userName',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="monitor.OnlineUser.dept_name" defaultMessage="部门名称" />,
      dataIndex: 'deptName',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.OnlineUser.ipaddr" defaultMessage="登录IP地址" />,
      dataIndex: 'ipaddr',
      valueType: 'text',
      copyable: true,
    },
    {
      title: <FormattedMessage id="monitor.OnlineUser.login_location" defaultMessage="登录地点" />,
      dataIndex: 'loginLocation',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.OnlineUser.browser" defaultMessage="浏览器类型" />,
      dataIndex: 'browser',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.OnlineUser.os" defaultMessage="操作系统" />,
      dataIndex: 'os',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.OnlineUser.login_time" defaultMessage="登录时间" />,
      dataIndex: 'loginTime',
      valueType: 'dateRange',
      hideInSearch: true,
      render: (_, record) => <span>{moment(record.loginTime).format('yyyy-MM-DD HH:mm:ss')}</span>,
      search: {
        transform: (value) => {
          return {
            'params[beginTime]': value[0],
            'params[endTime]': value[1],
          };
        },
      },
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <Popconfirm
          key="remove"
          placement="top"
          title="确定强制将该用户踢下线吗？"
          onConfirm={async () => {
            const success = await handleRemoveOne(record);
            if (success) {
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          okText="确认"
          cancelText="取消"
        >
          <Button
            type="link"
            size="small"
            danger
            key="batchRemove"
            hidden={!access.hasPerms('system:user:remove')}
          >
            强退
          </Button>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<OnlineUserType>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '信息',
        })}
        actionRef={actionRef}
        formRef={formTableRef}
        rowKey="infoId"
        key="logininforList"
        search={{
          labelWidth: 'auto',
        }}
        request={(params, sort) => getOnlineUserList({ ...params }, sort)}
        columns={columns}
      />
    </PageContainer>
  );
};

export default OnlineUserTableList;
