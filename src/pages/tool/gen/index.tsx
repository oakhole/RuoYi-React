import {
  CheckOutlined,
  CopyOutlined,
  DownOutlined,
  ExportOutlined,
  ImportOutlined,
} from '@ant-design/icons';
import { Button, Card, Drawer, Dropdown, Menu, message, Modal, Popconfirm } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage, useAccess, useIntl } from 'umi';

import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import type { ProFormInstance } from '@ant-design/pro-form';
import { DrawerForm } from '@ant-design/pro-form';
import {
  addGenTable,
  exportGenTable,
  getGenTableList,
  removeGenTable,
  updateGenTable,
  getDbTables,
  importDbTables,
  preview,
  syncDb,
  generate,
} from './service';
import GenTableForm from './Form';
import type { GenTable } from './data';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { copy } from '@/utils/utils';

const GenTableTableList: React.FC = () => {
  // ProTable 组件操作引用
  const actionRef = useRef<ActionType>();

  // ProTable 查询表单引用
  const formRef = useRef<ProFormInstance>();

  // 选中状态
  const [currentRow, setCurrentRow] = useState<GenTable>();
  const [selectedRows, setSelectedRows] = useState<GenTable[]>([]);
  const [selectedImportRowKeys, setSelectedImportRowKeys] = useState<any[]>([]);

  // 显示状态
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [importVisible, setImportVisible] = useState<boolean>(false);
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);

  const [previewLoading, setpreviewLoading] = useState<boolean>(true);
  const [previewData, setPreviewData] = useState<object>({});
  const [currentPreviewKey, setCurrentPreviewKey] = useState<string>('vm/java/domain.java.vm');
  const [currentPreviewLanguage, setCurrentPreviewLanguage] = useState<string>('java');

  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  // 字典数据

  // 页面权限
  const access = useAccess();

  // 国际化
  const intl = useIntl();

  // 页面渲染初始化数据
  useEffect(() => {}, []);

  const columns: ProColumns<GenTable>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      width: '40px',
      align: 'center',
      hideInSearch: true,
    },
    {
      title: <FormattedMessage id="gen.tableId" defaultMessage="编号" />,
      dataIndex: 'tableId',
      hideInSearch: true,
      hideInTable: true,
      valueType: 'text',
      sorter: true,
      width: '120px',
      ellipsis: false,
      align: 'center',
    },
    {
      title: <FormattedMessage id="gen.tableName" defaultMessage="表名称" />,
      dataIndex: 'tableName',
      hideInSearch: false,
      hideInTable: false,
      valueType: 'text',
      sorter: false,
      width: '120px',
      ellipsis: false,
      align: 'center',
    },
    {
      title: <FormattedMessage id="gen.tableComment" defaultMessage="表描述" />,
      dataIndex: 'tableComment',
      hideInSearch: false,
      hideInTable: false,
      valueType: 'text',
      sorter: false,
      width: '120px',
      ellipsis: false,
      align: 'center',
    },
    {
      title: <FormattedMessage id="gen.className" defaultMessage="实体类名称" />,
      dataIndex: 'className',
      hideInSearch: false,
      hideInTable: false,
      valueType: 'text',
      sorter: false,
      width: '120px',
      ellipsis: false,
      align: 'center',
    },
    {
      title: <FormattedMessage id="biz.common.column.createTime" defaultMessage="创建时间" />,
      dataIndex: 'createTime',
      hideInSearch: true,
      sorter: true,
      defaultSortOrder: 'descend',
      width: '120px',
      fixed: 'right',
      align: 'center',
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
      width: '120px',
      align: 'center',
      fixed: 'right',
      valueType: 'option',
      render: (_, record) => [
        <Button
          key="preview"
          type="link"
          onClick={() => {
            setPreviewVisible(true);
            setpreviewLoading(true);
            preview(record.tableId).then((res) => {
              setpreviewLoading(false);
              if (res.success) {
                setPreviewData(res.data);
              }
            });
          }}
        >
          预览
        </Button>,
        <Button
          type="link"
          size="small"
          key="edit"
          hidden={!access.hasPerms('tool:gen:edit')}
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
          title={intl.formatMessage({
            id: 'pages.searchTable.delete.confirm',
            defaultMessage: '确定删除该项吗？',
          })}
          onConfirm={async () => {
            const success = await removeGenTable(String(record.tableId));
            if (success) {
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }
          }}
          okText={intl.formatMessage({
            id: 'pages.searchTable.delete.confirm.ok',
            defaultMessage: '确认',
          })}
          cancelText={intl.formatMessage({
            id: 'pages.searchTable.delete.confirm.cancel',
            defaultMessage: '取消',
          })}
        >
          <Button
            type="link"
            size="small"
            danger
            key="remove"
            hidden={!access.hasPerms('tool:gen:remove')}
          >
            <FormattedMessage id="pages.searchTable.delete" defaultMessage="删除" />
          </Button>
        </Popconfirm>,
        <Dropdown
          key="toolbar"
          overlay={() => {
            return (
              <Menu>
                <Menu.Item key="0">
                  <Button
                    key="syncDb"
                    type="link"
                    onClick={() => {
                      const hide = message.loading('正在同步数据库，请稍候...');
                      syncDb(record.tableName).then((res) => {
                        hide();
                        if (res.success) {
                          message.success('同步成功');
                        }
                      });
                    }}
                  >
                    同步
                  </Button>
                </Menu.Item>
                <Menu.Item key="1">
                  <Button
                    key="generate"
                    type="link"
                    onClick={() => {
                      const hide = message.loading('正在生成代码，请稍候...');
                      generate(record.tableName).then(() => {
                        hide();
                        message.success('生成成功');
                      });
                    }}
                  >
                    生成代码
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

  const tabList = [
    { key: 'vm/java/domain.java.vm', tab: 'domain.java' },
    { key: 'vm/java/mapper.java.vm', tab: 'mapper.java' },
    { key: 'vm/java/service.java.vm', tab: 'service.java' },
    { key: 'vm/java/serviceImpl.java.vm', tab: 'serviceImpl.java' },
    { key: 'vm/java/controller.java.vm', tab: 'controller.java' },
    { key: 'vm/xml/mapper.xml.vm', tab: 'mapper.xml' },
    { key: 'vm/sql/sql.vm', tab: 'sql' },
  ];

  return (
    <PageContainer breadcrumb={undefined} title={false}>
      <ProTable<GenTable>
        headerTitle={'数据库表代码生成'}
        actionRef={actionRef}
        formRef={formRef}
        rowKey="tableId"
        key="genTableList"
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            type="text"
            key="add"
            hidden={!access.hasPerms('tool:gen:add')}
            onClick={async () => {
              setImportVisible(true);
            }}
          >
            <ImportOutlined /> 导入
          </Button>,
          <Button
            type="text"
            key="export"
            hidden={!access.hasPerms('tool:gen:export')}
            onClick={async () => {
              await exportGenTable(formRef.current?.getFieldsFormatValue?.());
            }}
          >
            <ExportOutlined /> 生成
          </Button>,
        ]}
        request={(params, sort) => getGenTableList({ ...params }, sort)}
        columns={columns}
        rowSelection={{
          onChange: (_, rows) => {
            setSelectedRows(rows);
          },
        }}
        onRow={() => ({
          onClick: () => {
            // 点击行, 触发复选框点击事件
            // e.currentTarget.getElementsByClassName('ant-checkbox-wrapper')[0].click();
          },
        })}
      />
      {selectedRows?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="已选择" />
              <a style={{ fontWeight: 600 }}>{selectedRows.length}</a>
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            key="batchGenerate"
            type="primary"
            onClick={() => {
              const hide = message.loading('正在生成代码，请稍候...');
              generate(selectedRows.map((row) => row.tableName).join(',')).then(() => {
                hide();
                message.success('生成成功');
                setSelectedRows([]);
                actionRef.current?.reloadAndRest?.();
              });
            }}
          >
            批量生成
          </Button>
          <Button
            key="batchRemove"
            danger
            hidden={!access.hasPerms('tool:gen:remove')}
            onClick={async () => {
              Modal.confirm({
                title: intl.formatMessage({
                  id: 'pages.searchTable.delete',
                  defaultMessage: '删除',
                }),
                content: intl.formatMessage({
                  id: 'pages.searchTable.delete.confirm',
                  defaultMessage: '确定删除已选中项吗？',
                }),
                okText: intl.formatMessage({
                  id: 'pages.searchTable.delete.confirm.ok',
                  defaultMessage: '确认',
                }),
                cancelText: intl.formatMessage({
                  id: 'pages.searchTable.delete.confirm.cancel',
                  defaultMessage: '取消',
                }),
                onOk: async () => {
                  await removeGenTable(selectedRows.map((row) => row.tableId).join(',')).then(
                    (res) => {
                      if (res.success) {
                        setSelectedRows([]);
                        actionRef.current?.reloadAndRest?.();
                      }
                    },
                  );
                },
              });
            }}
          >
            <FormattedMessage id="pages.searchTable.batchDeletion" defaultMessage="批量删除" />
          </Button>
        </FooterToolbar>
      )}
      {/* 编辑表单 */}
      <GenTableForm
        onSubmit={async (values) => {
          const reloadFormList = () => {
            setModalVisible(false);
            setCurrentRow(undefined);
            actionRef.current?.reload();
          };
          if (values.tableId) {
            await updateGenTable({ ...values } as GenTable).then(
              (res) => res.success && reloadFormList(),
            );
          } else {
            await addGenTable({ ...values } as GenTable).then(
              (res) => res.success && reloadFormList(),
            );
          }
        }}
        onCancel={() => {
          setModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={modalVisible}
        tableId={currentRow?.tableId || ''}
      />

      {/* 导入数据库表 */}
      <DrawerForm
        visible={importVisible}
        title="导入表"
        drawerProps={{
          destroyOnClose: true,
          onClose: () => {
            setImportVisible(false);
          },
        }}
        width="50%"
        onFinish={async () => {
          importDbTables(selectedImportRowKeys.join(',')).then((res) => {
            if (res.success) {
              setImportVisible(false);
              actionRef.current?.reload();
            }
          });
        }}
      >
        <ProTable<{
          tableName: string;
          tableComment: string;
          createTime: string;
          updateTime: string;
        }>
          headerTitle=""
          rowKey={'tableName'}
          key="importTables"
          search={{ filterType: 'light' }}
          columns={[
            {
              title: '表名称',
              dataIndex: 'tableName',
              valueType: 'text',
              align: 'center',
            },
            {
              title: '表描述',
              dataIndex: 'tableComment',
              align: 'center',
              valueType: 'text',
            },
            {
              title: '创建时间',
              dataIndex: 'createTime',
              align: 'center',
              hideInSearch: true,
            },
            {
              title: '更新时间',
              dataIndex: 'updateTime',
              align: 'center',
              hideInSearch: true,
            },
          ]}
          request={(params, sort) => getDbTables({ ...params }, sort)}
          rowSelection={{
            onChange: (rowKeys) => {
              setSelectedImportRowKeys(rowKeys);
            },
          }}
          onRow={() => ({
            onClick: (e) => {
              // 点击行, 触发复选框点击事件
              e.currentTarget.getElementsByClassName('ant-checkbox-wrapper')[0].click();
            },
          })}
        />
      </DrawerForm>

      {/* 预览代码 */}
      <Drawer
        visible={previewVisible}
        title={'生成代码预览'}
        onClose={() => {
          setPreviewVisible(false);
        }}
        destroyOnClose
        width={'60%'}
        extra={
          <Button
            type="link"
            disabled={previewLoading}
            onClick={async () => {
              copy(previewData[currentPreviewKey], () => {
                setCopySuccess(true);
                setTimeout(() => {
                  setCopySuccess(false);
                }, 1500);
              });
            }}
          >
            {copySuccess ? (
              <>
                <CheckOutlined /> 复制成功
              </>
            ) : (
              <>
                <CopyOutlined /> 复制
              </>
            )}
          </Button>
        }
      >
        <Card
          title={false}
          loading={previewLoading}
          tabList={tabList}
          bordered={false}
          onTabChange={(key) => {
            setCurrentPreviewKey(key);
            if (key.indexOf('java.vm') > -1) {
              setCurrentPreviewLanguage('java');
            } else if (key.indexOf('xml.vm') > -1) {
              setCurrentPreviewLanguage('xml');
            } else if (key.indexOf('sql.vm') > -1) {
              setCurrentPreviewLanguage('sql');
            } else {
              setCurrentPreviewLanguage('tsx');
            }
          }}
        >
          {/* @ts-ignore */}
          <SyntaxHighlighter showLineNumbers style={githubGist} language={currentPreviewLanguage}>
            {previewData[currentPreviewKey]}
          </SyntaxHighlighter>
        </Card>
      </Drawer>
    </PageContainer>
  );
};

export default GenTableTableList;
