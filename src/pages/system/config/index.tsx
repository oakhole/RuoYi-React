/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 22:48:59
 * @FilePath: /RuoYi-React/src/pages/system/config/index.tsx
 * @Description: 系统管理 - 系统参数配置
 */
import { PlusOutlined, FileExcelOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Tag } from 'antd';
import { Popconfirm } from 'antd';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, useAccess } from '@umijs/max';

import { FooterToolbar, PageContainer } from '@ant-design/pro-components';
import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { ConfigType } from './data.d';
import { getConfigList, removeConfig, addConfig, updateConfig, exportConfig } from './service';
import UpdateForm from './components/edit';
import { getDict } from '../dict/service';

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: ConfigType) => {
  const hide = message.loading('正在添加');
  try {
    const resp = await addConfig({ ...fields });
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
const handleUpdate = async (fields: ConfigType) => {
  const hide = message.loading('正在配置');
  try {
    const resp = await updateConfig(fields);
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
const handleRemove = async (selectedRows: ConfigType[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const resp = await removeConfig(selectedRows.map((row) => row.configId).join(','));
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

const handleRemoveOne = async (selectedRow: ConfigType) => {
  const hide = message.loading('正在删除');
  if (!selectedRow) return true;
  try {
    const params = [selectedRow.configId];
    const resp = await removeConfig(params.join(','));
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
    await exportConfig();
    hide();
    message.success('导出成功');
    return true;
  } catch (error) {
    hide();
    message.error('导出失败，请重试');
    return false;
  }
};

const ConfigTableList: React.FC = () => {
  const formTableRef = useRef<FormInstance>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<ConfigType>();
  const [selectedRowsState, setSelectedRows] = useState<ConfigType[]>([]);

  const [configTypeOptions, setConfigTypeOptions] = useState<any>([]);

  const access = useAccess();

  /** 国际化配置 */
  const intl = useIntl();

  useEffect(() => {
    getDict('sys_yes_no').then((res) => {
      if (res.code === 200) {
        const opts = {};
        res.data.forEach((item: any) => {
          opts[item.dictValue] = item.dictLabel;
        });
        setConfigTypeOptions(opts);
      }
    });
  }, []);

  const columns: ProColumns<ConfigType>[] = [
    {
      title: <FormattedMessage id="system.Config.config_name" defaultMessage="参数名称" />,
      dataIndex: 'configName',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.Config.config_key" defaultMessage="参数键名" />,
      dataIndex: 'configKey',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.Config.config_value" defaultMessage="参数键值" />,
      dataIndex: 'configValue',
      valueType: 'textarea',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.Config.config_type" defaultMessage="系统内置" />,
      dataIndex: 'configType',
      valueType: 'select',
      valueEnum: configTypeOptions,
      render: (_, record) => (
        <Tag color={record.configType === 'Y' ? '' : undefined}>
          {record.configType === 'Y' ? '系统内置' : ''}
        </Tag>
      ),
    },
    {
      title: <FormattedMessage id="system.Config.remark" defaultMessage="备注" />,
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.Config.create_time" defaultMessage="创建时间" />,
      dataIndex: 'createTime',
      valueType: 'dateRange',
      sorter: true,
      defaultSortOrder: 'ascend',
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
      valueType: 'option',
      render: (_, record) => [
        <Button
          type="link"
          size="small"
          key="edit"
          hidden={!access.hasPerms('system:config:edit')}
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
            hidden={!access.hasPerms('system:config:remove')}
          >
            删除
          </Button>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<ConfigType>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '信息',
        })}
        actionRef={actionRef}
        formRef={formTableRef}
        rowKey="configId"
        key="configList"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            type="text"
            key="add"
            hidden={!access.hasPerms('system:config:add')}
            onClick={async () => {
              setCurrentRow(undefined);
              setModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
          <Button
            type="text"
            key="export"
            hidden={!access.hasPerms('system:config:export')}
            onClick={async () => {
              handleExport();
            }}
          >
            <FileExcelOutlined />{' '}
            <FormattedMessage id="pages.searchTable.export" defaultMessage="导出" />
          </Button>,
        ]}
        request={(params, sort) => getConfigList({ ...params }, sort)}
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
            key="remove"
            hidden={!access.hasPerms('system:config:remove')}
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
          if (values.configId) {
            success = await handleUpdate({ ...values } as ConfigType);
          } else {
            success = await handleAdd({ ...values } as ConfigType);
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
        configTypeOptions={configTypeOptions}
      />
    </PageContainer>
  );
};

export default ConfigTableList;
