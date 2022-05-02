import { ExclamationCircleOutlined, ClearOutlined, FileExcelOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Badge } from 'antd';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, useAccess } from 'umi';

import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { LogininforType } from './data.d';
import { getLogininforList, removeLogininfor, exportLogininfor, cleanLogininfor } from './service';
import { getDict } from '@/pages/system/dict/service';
import { FooterToolbar, GridContent } from '@ant-design/pro-layout';

const { confirm } = Modal;

/**
 * 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: LogininforType[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const resp = await removeLogininfor(selectedRows.map((row) => row.infoId).join(','));
    hide();
    if (resp.code === 200) {
      message.success('删除成功，即将刷新');
    } else {
      message.error(resp.msg);
    }
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const handleRemoveAll = async () => {
  confirm({
    title: '是否确认清空所有登录日志数据项?',
    icon: <ExclamationCircleOutlined />,
    content: '请谨慎操作',
    async onOk() {
      const hide = message.loading('正在删除');
      try {
        const resp = await cleanLogininfor();
        hide();
        if (resp.code === 200) {
          message.success('删除成功，即将刷新');
        } else {
          message.error(resp.msg);
        }
        return true;
      } catch (error) {
        hide();
        message.error('删除失败，请重试');
        return false;
      }
    },
    onCancel() {},
  });
};

/**
 * 导出数据
 *
 * @param id
 */
const handleExport = async () => {
  const hide = message.loading('正在导出');
  try {
    await exportLogininfor();
    message.success('导出成功');
    hide();
    return true;
  } catch (error) {
    hide();
    message.error('导出失败，请重试');
    return false;
  }
};

const LogininforTableList: React.FC = () => {
  const formTableRef = useRef<FormInstance>();

  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<LogininforType[]>([]);

  const [statusOptions, setStatusOptions] = useState<any>([]);

  const access = useAccess();

  /** 国际化配置 */
  const intl = useIntl();

  useEffect(() => {
    getDict('sys_common_status').then((res) => {
      if (res.code === 200) {
        const opts = {};
        res.data.forEach((item: any) => {
          opts[item.dictValue] = item.dictLabel;
        });
        setStatusOptions(opts);
      }
    });
  }, []);

  const columns: ProColumns<LogininforType>[] = [
    {
      title: <FormattedMessage id="monitor.Logininfor.info_id" defaultMessage="访问ID" />,
      dataIndex: 'infoId',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.user_name" defaultMessage="用户账号" />,
      dataIndex: 'userName',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.ipaddr" defaultMessage="登录IP地址" />,
      dataIndex: 'ipaddr',
      valueType: 'text',
      copyable: true,
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.login_location" defaultMessage="登录地点" />,
      dataIndex: 'loginLocation',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.browser" defaultMessage="浏览器类型" />,
      dataIndex: 'browser',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.os" defaultMessage="操作系统" />,
      dataIndex: 'os',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.status" defaultMessage="登录状态" />,
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: statusOptions,
      render: (_, record) => (
        <Badge
          status={record.status === '0' ? 'success' : 'error'}
          text={statusOptions[record.status]}
        />
      ),
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.msg" defaultMessage="提示消息" />,
      dataIndex: 'msg',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.Logininfor.login_time" defaultMessage="访问时间" />,
      dataIndex: 'loginTime',
      valueType: 'dateRange',
      sorter: true,
      defaultSortOrder: 'descend',
      render: (_, record) => <span>{record.loginTime}</span>,
      search: {
        transform: (value) => {
          return {
            'params[beginTime]': value[0],
            'params[endTime]': value[1],
          };
        },
      },
    },
  ];

  return (
    <GridContent>
      <div style={{ width: '100%', float: 'right' }}>
        <ProTable<LogininforType>
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
          toolBarRender={() => [
            <Button
              type="text"
              key="clear"
              danger
              hidden={!access.hasPerms('monitor:logininfor:remove')}
              onClick={async () => {
                handleRemoveAll();
                actionRef.current?.reloadAndRest?.();
              }}
            >
              <ClearOutlined />{' '}
              <FormattedMessage id="pages.searchTable.clear" defaultMessage="清空" />
            </Button>,
            <Button
              type="text"
              key="export"
              hidden={!access.hasPerms('monitor:logininfor:export')}
              onClick={async () => {
                handleExport();
              }}
            >
              <FileExcelOutlined />{' '}
              <FormattedMessage id="pages.searchTable.export" defaultMessage="导出" />
            </Button>,
          ]}
          request={(params, sort) => getLogininforList({ ...params }, sort)}
          columns={columns}
          rowSelection={{
            onChange: (_, selectedRows) => {
              setSelectedRows(selectedRows);
            },
          }}
        />
      </div>
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="已选择" />
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            danger
            key="batchRemove"
            hidden={!access.hasPerms('monitor:logininfor:remove')}
            onClick={async () => {
              Modal.confirm({
                title: '删除',
                content: '确定删除该项吗？',
                okText: '确认',
                cancelText: '取消',
                onOk: async () => {
                  const success = await handleRemove(selectedRowsState);
                  if (success) {
                    setSelectedRows([]);
                    actionRef.current?.reloadAndRest?.();
                  }
                },
              });
            }}
          >
            <FormattedMessage id="pages.searchTable.batchDeletion" defaultMessage="批量删除" />
          </Button>
        </FooterToolbar>
      )}
    </GridContent>
  );
};

export default LogininforTableList;
