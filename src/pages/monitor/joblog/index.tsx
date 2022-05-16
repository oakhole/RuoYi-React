import { ExclamationCircleOutlined, ClearOutlined, FileExcelOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Badge } from 'antd';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, history, useAccess } from 'umi';

import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { JobLogType } from './data.d';
import { getJobLogList, removeJobLog, exportJobLog, cleanJobLog } from './service';
import DetailForm from './components/detail';
import { getDict } from '@/pages/system/dict/service';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';

/**
 * 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: JobLogType[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const resp = await removeJobLog(selectedRows.map((row) => row.jobLogId).join(','));
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
  const hide = message.loading('正在删除');
  try {
    const resp = await cleanJobLog();
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

const handleRemoveOne = async (selectedRow: JobLogType) => {
  const hide = message.loading('正在删除');
  if (!selectedRow) return true;
  try {
    const params = [selectedRow.jobLogId];
    const resp = await removeJobLog(params.join(','));
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

/**
 * 导出数据
 *
 * @param id
 */
const handleExport = async () => {
  const hide = message.loading('正在导出');
  try {
    await exportJobLog();
    hide();
    message.success('导出成功');
    return true;
  } catch (error) {
    hide();
    message.error('导出失败，请重试');
    return false;
  }
};

const JobLogTableList: React.FC = () => {
  const formTableRef = useRef<FormInstance>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<JobLogType>();
  const [selectedRowsState, setSelectedRows] = useState<JobLogType[]>([]);

  const [statusOptions, setStatusOptions] = useState<any>([]);
  const [jobGroupOptions, setJobGroupOptions] = useState<any>([]);

  const access = useAccess();

  /** 国际化配置 */
  const intl = useIntl();

  useEffect(() => {
    getDict('sys_job_status').then((res) => {
      if (res.code === 200) {
        const opts = {};
        res.data.forEach((item: any) => {
          opts[item.dictValue] = item.dictLabel;
        });
        setStatusOptions(opts);
      }
    });
    getDict('sys_job_group').then((res) => {
      if (res.code === 200) {
        const opts = {};
        res.data.forEach((item: any) => {
          opts[item.dictValue] = item.dictLabel;
        });
        setJobGroupOptions(opts);
      }
    });
  }, []);

  const columns: ProColumns<JobLogType>[] = [
    {
      title: <FormattedMessage id="monitor.JobLog.job_log_id" defaultMessage="任务日志ID" />,
      dataIndex: 'jobLogId',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.JobLog.job_name" defaultMessage="任务名称" />,
      dataIndex: 'jobName',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="monitor.JobLog.job_group" defaultMessage="任务组名" />,
      dataIndex: 'jobGroup',
      valueType: 'text',
      valueEnum: jobGroupOptions,
    },
    {
      title: <FormattedMessage id="monitor.JobLog.invoke_target" defaultMessage="调用目标字符串" />,
      dataIndex: 'invokeTarget',
      valueType: 'textarea',
      hideInSearch: true,
      ellipsis: true,
    },
    {
      title: <FormattedMessage id="monitor.JobLog.job_message" defaultMessage="日志信息" />,
      dataIndex: 'jobMessage',
      valueType: 'textarea',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.JobLog.status" defaultMessage="执行状态" />,
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
      title: <FormattedMessage id="system.User.createTime" defaultMessage="执行时间" />,
      dataIndex: 'createTime',
      valueType: 'dateRange',
      sorter: true,
      defaultSortOrder: 'descend',
      render: (_, record) => <span>{record.createTime}</span>,
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
      width: '220px',
      valueType: 'option',
      render: (_, record) => [
        <Button
          type="link"
          size="small"
          key="detail"
          hidden={!access.hasPerms('monitor:log:list')}
          onClick={() => {
            setModalVisible(true);
            setCurrentRow(record);
          }}
        >
          详细
        </Button>,
        <Button
          type="link"
          size="small"
          danger
          key="batchRemove"
          hidden={!access.hasPerms('monitor:log:remove')}
          onClick={async () => {
            Modal.confirm({
              title: '删除',
              content: '确定删除该项吗？',
              okText: '确认',
              cancelText: '取消',
              onOk: async () => {
                const success = await handleRemoveOne(record);
                if (success) {
                  if (actionRef.current) {
                    actionRef.current.reload();
                  }
                }
              },
            });
          }}
        >
          删除
        </Button>,
      ],
    },
  ];

  return (
    <PageContainer
      breadcrumb={undefined}
      onBack={() => history.goBack()}
      title="定时任务"
      subTitle="调度日志"
    >
      <ProTable<JobLogType>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '信息',
        })}
        actionRef={actionRef}
        formRef={formTableRef}
        rowKey="jobLogId"
        key="jobLogList"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            type="text"
            danger
            key="clear"
            hidden={!access.hasPerms('monitor:operlog:remove')}
            onClick={async () => {
              Modal.confirm({
                title: '是否确认清空所有登录日志数据项?',
                icon: <ExclamationCircleOutlined />,
                content: '请谨慎操作',
                async onOk() {
                  handleRemoveAll();
                  actionRef.current?.reloadAndRest?.();
                },
                onCancel() {},
              });
            }}
          >
            <ClearOutlined />{' '}
            <FormattedMessage id="pages.searchTable.clear" defaultMessage="清空" />
          </Button>,
          <Button
            type="text"
            key="export"
            hidden={!access.hasPerms('monitor:log:export')}
            onClick={async () => {
              handleExport();
            }}
          >
            <FileExcelOutlined />{' '}
            <FormattedMessage id="pages.searchTable.export" defaultMessage="导出" />
          </Button>,
        ]}
        request={(params, sort) => getJobLogList({ ...params }, sort)}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
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
            key="batchRemove"
            danger
            hidden={!access.hasPerms('monitor:log:remove')}
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
      <DetailForm
        onCancel={() => {
          setModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={modalVisible}
        values={currentRow || {}}
        statusOptions={statusOptions}
        jobGroupOptions={jobGroupOptions}
      />
    </PageContainer>
  );
};

export default JobLogTableList;
