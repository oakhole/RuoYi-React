/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 22:49:24
 * @FilePath: /RuoYi-React/src/pages/system/notice/index.tsx
 * @Description: 系统管理 - 公告管理
 */
import { PlusOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Badge } from 'antd';
import { Popconfirm } from 'antd';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useAccess } from '@umijs/max';
import { useIntl, FormattedMessage } from '@umijs/max';

import { FooterToolbar, PageContainer } from '@ant-design/pro-components';
import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { NoticeType } from './data.d';
import { getNoticeList, removeNotice, addNotice, updateNotice } from './service';
import UpdateForm from './components/edit';
import { getDict } from '../dict/service';

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: NoticeType) => {
  const hide = message.loading('正在添加');
  try {
    const resp = await addNotice({ ...fields });
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
const handleUpdate = async (fields: NoticeType) => {
  const hide = message.loading('正在配置');
  try {
    const resp = await updateNotice(fields);
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
const handleRemove = async (selectedRows: NoticeType[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const resp = await removeNotice(selectedRows.map((row) => row.noticeId).join(','));
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

const handleRemoveOne = async (selectedRow: NoticeType) => {
  const hide = message.loading('正在删除');
  if (!selectedRow) return true;
  try {
    const params = [selectedRow.noticeId];
    const resp = await removeNotice(params.join(','));
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

const NoticeTableList: React.FC = () => {
  const formTableRef = useRef<FormInstance>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<NoticeType>();
  const [selectedRowsState, setSelectedRows] = useState<NoticeType[]>([]);

  const [noticeTypeOptions, setNoticeTypeOptions] = useState<any>([]);
  const [statusOptions, setStatusOptions] = useState<any>([]);

  const access = useAccess();

  /** 国际化配置 */
  const intl = useIntl();

  useEffect(() => {
    getDict('sys_notice_type').then((res) => {
      if (res.code === 200) {
        const opts = {};
        res.data.forEach((item: any) => {
          opts[item.dictValue] = item.dictLabel;
        });
        setNoticeTypeOptions(opts);
      }
    });
    getDict('sys_notice_status').then((res) => {
      if (res.code === 200) {
        const opts = {};
        res.data.forEach((item: any) => {
          opts[item.dictValue] = item.dictLabel;
        });
        setStatusOptions(opts);
      }
    });
  }, []);

  const columns: ProColumns<NoticeType>[] = [
    {
      title: <FormattedMessage id="system.Notice.notice_id" defaultMessage="公告ID" />,
      dataIndex: 'noticeId',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.Notice.notice_title" defaultMessage="公告标题" />,
      dataIndex: 'noticeTitle',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.Notice.notice_type" defaultMessage="公告类型" />,
      dataIndex: 'noticeType',
      valueType: 'select',
      valueEnum: noticeTypeOptions,
    },
    {
      title: <FormattedMessage id="system.Notice.status" defaultMessage="公告状态" />,
      dataIndex: 'status',
      valueType: 'select',
      valueEnum: statusOptions,
      hideInSearch: true,
      render: (_, record) => (
        <Badge
          status={record.status === '0' ? 'success' : 'error'}
          text={statusOptions[record.status]}
        />
      ),
    },
    {
      title: <FormattedMessage id="system.Notice.create_by" defaultMessage="创建者" />,
      dataIndex: 'createBy',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.Notice.create_time" defaultMessage="创建时间" />,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      sorter: true,
      defaultSortOrder: 'descend',
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
          key="edit"
          hidden={!access.hasPerms('system:notice:edit')}
          onClick={() => {
            setModalVisible(true);
            setCurrentRow(record);
          }}
        >
          <FormattedMessage id="pages.searchTable.edit" defaultMessage="编辑" />
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
            hidden={!access.hasPerms('system:notice:remove')}
          >
            删除
          </Button>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<NoticeType>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '信息',
        })}
        actionRef={actionRef}
        formRef={formTableRef}
        rowKey="noticeId"
        key="noticeList"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            type="text"
            key="add"
            hidden={!access.hasPerms('system:notice:add')}
            onClick={async () => {
              setCurrentRow(undefined);
              setModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
        ]}
        request={(params, sort) => getNoticeList({ ...params }, sort)}
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
            hidden={!access.hasPerms('system:notice:remove')}
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
          if (values.noticeId) {
            success = await handleUpdate({ ...values } as NoticeType);
          } else {
            success = await handleAdd({ ...values } as NoticeType);
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
        noticeTypeOptions={noticeTypeOptions}
        statusOptions={statusOptions}
      />
    </PageContainer>
  );
};

export default NoticeTableList;
