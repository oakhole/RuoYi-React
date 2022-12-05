/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 22:51:48
 * @FilePath: /RuoYi-React/src/pages/system/dictData/index.tsx
 * @Description: 字典 - 数据页面
 */
import { PlusOutlined, FileExcelOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Badge } from 'antd';
import { Popconfirm } from 'antd';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, history, useAccess, useParams } from '@umijs/max';

import { FooterToolbar, PageContainer } from '@ant-design/pro-components';
import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { DictDataType } from './data.d';
import {
  getDictDataList,
  removeDictData,
  addDictData,
  updateDictData,
  exportDictData,
} from './service';
import UpdateForm from './components/edit';
import { getDict, getDictType, getDictTypeList } from '../dict/service';

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: DictDataType) => {
  const hide = message.loading('正在添加');
  try {
    const resp = await addDictData({ ...fields });
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
const handleUpdate = async (fields: DictDataType) => {
  const hide = message.loading('正在配置');
  try {
    const resp = await updateDictData(fields);
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
const handleRemove = async (selectedRows: DictDataType[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const resp = await removeDictData(selectedRows.map((row) => row.dictCode).join(','));
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

const handleRemoveOne = async (selectedRow: DictDataType) => {
  const hide = message.loading('正在删除');
  if (!selectedRow) return true;
  try {
    const params = [selectedRow.dictCode];
    const resp = await removeDictData(params.join(','));
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

export type DictTypeArgs = {
  id: string;
};

export type DictDataProps = {
  match?: {
    params: any;
  };
};

const DictDataTableList: React.FC<DictDataProps> = (props) => {
  const formTableRef = useRef<FormInstance>();

  const [dictId, setDictId] = useState<string>('');

  const [dictType, setDictType] = useState<string>('');

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<DictDataType>();
  const [selectedRowsState, setSelectedRows] = useState<DictDataType[]>([]);

  const [dictTypeOptions, setDictTypeOptions] = useState<any>([]);
  const [statusOptions, setStatusOptions] = useState<any>([]);

  const access = useAccess();

  /** 国际化配置 */
  const intl = useIntl();
  const { id } = useParams() as DictTypeArgs;

  useEffect(() => {
    if (id === undefined) {
      history.push('/system/dict');
    }
    if (dictId !== id) {
      setDictId(id);
      getDictTypeList().then((res) => {
        if (res.code === 200) {
          const opts = {};
          res.data.forEach((item: any) => {
            opts[item.dictType] = item.dictName;
          });
          setDictTypeOptions(opts);
        }
      });
      getDict('sys_normal_disable').then((res) => {
        if (res.code === 200) {
          const opts = {};
          res.data.forEach((item: any) => {
            opts[item.dictValue] = item.dictLabel;
          });
          setStatusOptions(opts);
        }
      });
      getDictType(id).then((res) => {
        if (res.code === 200) {
          setDictType(res.data.dictType);
          formTableRef.current?.setFieldsValue({
            dictType: res.data.dictType,
          });
          actionRef.current?.reloadAndRest?.();
        } else {
          message.error(res.msg);
        }
      });
    }
  }, [dictId, dictType, props.match?.params]);

  /**
   * 导出数据
   *
   * @param id
   */
  const handleExport = async () => {
    const hide = message.loading('正在导出');
    try {
      await exportDictData({ dictType });
      hide();
      message.success('导出成功');
      return true;
    } catch (error) {
      hide();
      message.error('导出失败，请重试');
      return false;
    }
  };

  const columns: ProColumns<DictDataType>[] = [
    {
      title: <FormattedMessage id="system.DictData.dict_code" defaultMessage="字典编码" />,
      dataIndex: 'dictCode',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.DictData.dict_type" defaultMessage="字典类型" />,
      dataIndex: 'dictType',
      valueType: 'select',
      hideInTable: true,
      valueEnum: dictTypeOptions,
      search: {
        transform: (value) => {
          setDictType(value);
          return value;
        },
      },
    },
    {
      title: <FormattedMessage id="system.DictData.dict_label" defaultMessage="字典标签" />,
      dataIndex: 'dictLabel',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.DictData.dict_value" defaultMessage="字典键值" />,
      dataIndex: 'dictValue',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.DictData.dict_sort" defaultMessage="字典排序" />,
      dataIndex: 'dictSort',
      valueType: 'text',
      hideInSearch: true,
      sorter: true,
    },
    {
      title: <FormattedMessage id="system.DictData.status" defaultMessage="状态" />,
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
      title: <FormattedMessage id="system.DictData.createTime" defaultMessage="创建时间" />,
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
      title: <FormattedMessage id="system.DictData.remark" defaultMessage="备注" />,
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true,
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
          hidden={!access.hasPerms('system:dictData:edit')}
          onClick={() => {
            setModalVisible(true);
            setCurrentRow(record);
          }}
        >
          编辑
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
            hidden={!access.hasPerms('system:dictData:remove')}
          >
            删除
          </Button>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer
      title="字典数据"
      breadcrumb={undefined}
      onBack={() => {
        history.back();
      }}
    >
      <ProTable<DictDataType>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '信息',
        })}
        actionRef={actionRef}
        formRef={formTableRef}
        rowKey="dictCode"
        key="dictDataList"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            type="text"
            key="add"
            hidden={!access.hasPerms('system:dictData:add')}
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
            hidden={!access.hasPerms('system:dictData:export')}
            onClick={async () => {
              handleExport();
            }}
          >
            <FileExcelOutlined />{' '}
            <FormattedMessage id="pages.searchTable.export" defaultMessage="导出" />
          </Button>,
        ]}
        request={async (params, sort) => {
          if (dictType.length === 0) {
            return {
              data: [],
              total: 0,
              success: true,
            };
          }
          return getDictDataList({ dictType, ...params }, sort);
        }}
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
            hidden={!access.hasPerms('system:dictData:remove')}
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
          if (values.dictCode) {
            success = await handleUpdate({ ...values } as DictDataType);
          } else {
            success = await handleAdd({ ...values } as DictDataType);
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
        dictType={dictType}
        statusOptions={statusOptions}
      />
    </PageContainer>
  );
};

export default DictDataTableList;
