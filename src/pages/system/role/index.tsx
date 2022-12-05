/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 21:27:50
 * @FilePath: /RuoYi-React/src/pages/system/role/index.tsx
 * @Description: 角色页面
 */
import { PlusOutlined, FileExcelOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { Badge } from 'antd';
import { Popconfirm } from 'antd';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { useIntl, FormattedMessage, useAccess } from '@umijs/max';
import { FooterToolbar, PageContainer } from '@ant-design/pro-components';
import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import type { RoleType, RoleListParams } from './data.d';
import {
  getRoleList,
  removeRole,
  addRole,
  updateRole,
  exportRole,
  getRoleMenuList,
} from './service';
import UpdateForm from './components/edit';
import { getDict } from '../dict/service';
import type { DataNode } from 'antd/lib/tree';
import { getMenuTree } from '../menu/service';
import { formatTreeSelectData } from '@/utils/utils';

/**
 * 添加节点
 *
 * @param fields
 */
const handleAdd = async (fields: RoleType) => {
  const hide = message.loading('正在添加');
  try {
    const resp = await addRole({ ...fields });
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
const handleUpdate = async (fields: RoleType) => {
  const hide = message.loading('正在配置');
  try {
    const resp = await updateRole(fields);
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
const handleRemove = async (selectedRows: RoleType[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    const resp = await removeRole(selectedRows.map((row) => row.roleId).join(','));
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

const handleRemoveOne = async (selectedRow: RoleType) => {
  const hide = message.loading('正在删除');
  if (!selectedRow) return true;
  try {
    const params = [selectedRow.roleId];
    const resp = await removeRole(params.join(','));
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
    await exportRole();
    hide();
    message.success('导出成功');
    return true;
  } catch (error) {
    hide();
    message.error('导出失败，请重试');
    return false;
  }
};

const RoleTableList: React.FC = () => {
  const formTableRef = useRef<FormInstance>();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<RoleType>();
  const [selectedRowsState, setSelectedRows] = useState<RoleType[]>([]);

  const [statusOptions, setStatusOptions] = useState<any>([]);

  const [menuTree, setMenuTree] = useState<DataNode[]>();
  const [menuIds, setMenuIds] = useState<string[]>([]);

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
  }, []);

  const columns: ProColumns<RoleType>[] = [
    {
      title: <FormattedMessage id="system.Role.role_id" defaultMessage="角色ID" />,
      dataIndex: 'roleId',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.Role.role_name" defaultMessage="角色名称" />,
      dataIndex: 'roleName',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.Role.role_key" defaultMessage="角色权限字符串" />,
      dataIndex: 'roleKey',
      valueType: 'text',
    },
    {
      title: <FormattedMessage id="system.Role.role_sort" defaultMessage="显示顺序" />,
      dataIndex: 'roleSort',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="system.Role.status" defaultMessage="角色状态" />,
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
      title: <FormattedMessage id="system.Role.create_time" defaultMessage="创建时间" />,
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
      title: <FormattedMessage id="system.Role.remark" defaultMessage="备注" />,
      dataIndex: 'remark',
      valueType: 'textarea',
      hideInSearch: true,
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
          hidden={!access.hasPerms('system:role:edit')}
          onClick={() => {
            getRoleMenuList(record.roleId).then((res: any) => {
              if (res.code === 200) {
                const treeData = formatTreeSelectData(res.menus);
                setMenuTree(treeData);
                setMenuIds(
                  res.checkedKeys.map((key: number) => {
                    return `${key}`;
                  }),
                );
                setModalVisible(true);
                setCurrentRow(record);
              } else {
                message.warn(res.msg);
              }
            });
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
            hidden={!access.hasPerms('system:role:remove')}
          >
            删除
          </Button>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<RoleType>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '信息',
        })}
        actionRef={actionRef}
        formRef={formTableRef}
        rowKey="roleId"
        key="roleList"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            key="add"
            type="text"
            hidden={!access.hasPerms('system:role:add')}
            onClick={async () => {
              getMenuTree().then((res: any) => {
                if (res.code === 200) {
                  const treeData = formatTreeSelectData(res.data);
                  setMenuTree(treeData);
                  setMenuIds([]);
                  setModalVisible(true);
                  setCurrentRow(undefined);
                } else {
                  message.warn(res.msg);
                }
              });
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
          <Button
            type="text"
            key="export"
            hidden={!access.hasPerms('system:role:export')}
            onClick={async () => {
              handleExport();
            }}
          >
            <FileExcelOutlined />{' '}
            <FormattedMessage id="pages.searchTable.export" defaultMessage="导出" />
          </Button>,
        ]}
        request={(params, sort) => getRoleList({ ...params } as RoleListParams, sort)}
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
            hidden={!access.hasPerms('system:role:remove')}
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
          if (values.roleId) {
            success = await handleUpdate({ ...values } as RoleType);
          } else {
            success = await handleAdd({ ...values } as RoleType);
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
        menuTree={menuTree || []}
        menuCheckedKeys={menuIds || []}
        statusOptions={statusOptions}
      />
    </PageContainer>
  );
};

export default RoleTableList;
