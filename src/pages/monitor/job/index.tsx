/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 22:53:54
 * @FilePath: /RuoYi-React/src/pages/monitor/job/index.tsx
 * @Description: 监控管理 - 定时任务
 */
import { PlusOutlined, DownOutlined, FileExcelOutlined, HistoryOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Badge } from 'antd';
import { Popconfirm } from 'antd';
import { Dropdown, Menu } from 'antd';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, history, useAccess } from '@umijs/max';

import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { JobType } from './data.d';
import { getJobList, removeJob, addJob, updateJob, exportJob, runJob } from './service';
import UpdateForm from './components/edit';
import DetailForm from './components/detail';
import { getDict } from '@/pages/system/dict/service';
import { FooterToolbar } from '@ant-design/pro-components';

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: JobType) => {
  const hide = message.loading('正在添加');
  try {
    const resp = await addJob({ ...fields });
    hide();
    if (resp.code === 200) {
      message.success('添加成功');
    } else {
      message.error(resp.msg);
    }
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: JobType) => {
  const hide = message.loading('正在配置');
  try {
    const resp = await updateJob(fields);
    hide();
    if (resp.code === 200) {
      message.success('配置成功');
    } else {
      message.error(resp.msg);
    }
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

/**
 * 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: JobType[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const resp = await removeJob(selectedRows.map((row) => row.jobId).join(','));
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

const handleRemoveOne = async (selectedRow: JobType) => {
  const hide = message.loading('正在删除');
  if (!selectedRow) return true;
  try {
    const params = [selectedRow.jobId];
    const resp = await removeJob(params.join(','));
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
    await exportJob();
    hide();
    message.success('导出成功');
    return true;
  } catch (error) {
    hide();
    message.error('导出失败，请重试');
    return false;
  }
};

const JobTableList: React.FC = () => {
  const formTableRef = useRef<FormInstance>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<JobType>();
  const [selectedRowsState, setSelectedRows] = useState<JobType[]>([]);

  const [statusOptions, setStatusOptions] = useState<any>([]);
  const [jobGroupOptions, setJobGroupOptions] = useState<any>([]);

  const access = useAccess();

  /** 国际化配置 */
  const intl = useIntl();

  useEffect(() => {
    getDict('sys_normal_disable').then((res) => {
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

  const columns: ProColumns<JobType>[] = [
    {
      title: <FormattedMessage id="monitor.Job.job_id" defaultMessage="任务ID" />,
      dataIndex: 'jobId',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.Job.job_name" defaultMessage="任务名称" />,
      dataIndex: 'jobName',
      valueType: 'text',
      render: (dom, record) => {
        return (
          <a
            onClick={() => {
              setDetailModalVisible(true);
              setCurrentRow(record);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="monitor.Job.job_group" defaultMessage="任务组名" />,
      dataIndex: 'jobGroup',
      valueType: 'text',
      valueEnum: jobGroupOptions,
    },
    {
      title: <FormattedMessage id="monitor.Job.invoke_target" defaultMessage="调用目标字符串" />,
      dataIndex: 'invokeTarget',
      valueType: 'textarea',
      hideInSearch: true,
      copyable: true,
      ellipsis: true,
    },
    {
      title: <FormattedMessage id="monitor.Job.cron_expression" defaultMessage="cron执行表达式" />,
      dataIndex: 'cronExpression',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="monitor.Job.status" defaultMessage="状态" />,
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: statusOptions,
      render: (_, record) => (
        <Badge
          status={record.status === '0' ? 'processing' : 'error'}
          text={statusOptions[record.status]}
        />
      ),
    },
    {
      title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="操作" />,
      dataIndex: 'option',
      valueType: 'option',
      width: '260px',
      render: (_, record) => [
        <Button
          type="link"
          size="small"
          key="edit"
          hidden={!access.hasPerms('monitor:job:edit')}
          onClick={() => {
            setModalVisible(true);
            setCurrentRow(record);
          }}
        >
          编辑
        </Button>,
        <Button
          type="link"
          size="small"
          key="history"
          onClick={() => {
            history.push(`/monitor/job/log/${record.jobId}`);
          }}
        >
          调度日志
        </Button>,
        <Popconfirm
          key="remove"
          placement="top"
          title="确定删除该项吗？"
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
            key="remove"
            hidden={!access.hasPerms('system:job:remove')}
          >
            删除
          </Button>
        </Popconfirm>,
        <Dropdown
          key="toolbar"
          overlay={() => {
            return (
              <Menu>
                <Menu.Item key="0">
                  <Popconfirm
                    key="runOnce"
                    placement="top"
                    title="确认要立即执行一次？"
                    onConfirm={async () => {
                      const success = await runJob(record.jobId, record.jobGroup);
                      if (success) {
                        message.success('执行成功');
                      }
                    }}
                    okText="确认"
                    cancelText="取消"
                  >
                    <Button type="link" size="small" key="runOnce">
                      执行一次
                    </Button>
                  </Popconfirm>
                </Menu.Item>
                <Menu.Item key="1">
                  <Button
                    type="link"
                    size="small"
                    key="runOnce"
                    onClick={() => {
                      setDetailModalVisible(true);
                      setCurrentRow(record);
                    }}
                  >
                    任务详情
                  </Button>
                </Menu.Item>
              </Menu>
            );
          }}
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            更多
            <DownOutlined />
          </a>
        </Dropdown>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<JobType>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '信息',
        })}
        actionRef={actionRef}
        formRef={formTableRef}
        rowKey="jobId"
        key="jobList"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            type="text"
            key="add"
            hidden={!access.hasPerms('monitor:job:add')}
            onClick={async () => {
              setCurrentRow(undefined);
              setModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
          <Button
            type="text"
            key="log"
            hidden={!access.hasPerms('monitor:job:add')}
            onClick={() => {
              history.push('/monitor/job/log');
            }}
          >
            <HistoryOutlined /> 日志
          </Button>,
          <Button
            type="text"
            key="export"
            hidden={!access.hasPerms('monitor:job:export')}
            onClick={async () => {
              handleExport();
            }}
          >
            <FileExcelOutlined />{' '}
            <FormattedMessage id="pages.searchTable.export" defaultMessage="导出" />
          </Button>,
        ]}
        request={(params, sort) => getJobList({ ...params }, sort)}
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
            danger
            key="batchRemove"
            hidden={!access.hasPerms('monitor:job:remove')}
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
      <UpdateForm
        onSubmit={async (values) => {
          let success = false;
          if (values.jobId) {
            success = await handleUpdate({ ...values } as JobType);
          } else {
            success = await handleAdd({ ...values } as JobType);
          }
          if (success) {
            setModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          setModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={modalVisible}
        values={currentRow || {}}
        statusOptions={statusOptions}
      />
      <DetailForm
        onCancel={() => {
          setDetailModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={detailModalVisible}
        values={currentRow || {}}
        statusOptions={statusOptions}
      />
    </PageContainer>
  );
};

export default JobTableList;
