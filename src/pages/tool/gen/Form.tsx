import React, { useEffect, useRef, useState } from 'react';
import type { ProFormInstance } from '@ant-design/pro-form';
import ProForm, {
  ProFormText,
  ProFormTextArea,
  DrawerForm,
  ProFormSelect,
  ProFormTreeSelect,
  ProFormRadio,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage } from 'umi';
import type { GenTable, GenTableColumn } from './data.d';
import { Col, Divider, Row, Segmented, Skeleton, Tabs } from 'antd';
import { getMenuList } from '@/pages/system/menu/service';
import { buildTreeData } from '@/utils/utils';
import type { DataNode } from 'antd/lib/tree';
import { getGenTable } from './service';
import type { DictDataType } from '@/pages/system/dictData/data';
import { optionselect } from '@/pages/system/dict/service';
import type { EditableFormInstance, ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { ApartmentOutlined, BranchesOutlined, TableOutlined } from '@ant-design/icons';
import type { SegmentedValue } from 'antd/lib/segmented';

export type GenTableFormValueType = Record<string, unknown> & Partial<GenTable>;

export type GenTableFormProps = {
  onCancel: (flag?: boolean, formVals?: GenTableFormValueType) => void;
  onSubmit: (values: GenTableFormValueType) => Promise<void>;
  visible: boolean;
  tableId: string;
};

const GenTableForm: React.FC<GenTableFormProps> = (props) => {
  // 国际化
  const intl = useIntl();

  const [selectedGenType, setselectedGenType] = useState<string>('0');
  const [selectedGenTpl, setselectedGenTpl] = useState<string>('0');

  const [loading, setLoading] = useState<boolean>(true);

  const [tables, setTables] = useState<GenTable[]>([]);
  const [tableOptions, setTableOptions] = useState<any>();
  const [columnOptions, setColumnOptions] = useState<any>();
  const [fkColumnOptions, setFKColumnOptions] = useState<any>();
  const [dictOptions, setDictOptions] = useState<any>();
  const [tableInfo, setTableInfo] = useState<GenTable>();

  const [editableKeys, setEditableKeys] = useState<React.Key[]>();

  const { TabPane } = Tabs;

  // 编辑表单引用
  const formRef = useRef<ProFormInstance>();
  const editableFormRef = useRef<EditableFormInstance>();

  useEffect(() => {
    if (props.tableId) {
      getGenTable(props.tableId).then((res) => {
        setLoading(false);
        if (res.success) {
          setTableInfo(res.data.info);
          formRef.current?.setFieldsValue({ ...res.data.info });
          setselectedGenTpl(res.data.info.tplCategory || 'crud');

          const columnOpitonsData = {};
          const rowKeys: React.Key[] = [];
          res.data.info.columns.forEach((column: GenTableColumn) => {
            columnOpitonsData[column.columnName] = column.columnName + ': ' + column.columnComment;
            rowKeys.push(column.columnId);
          });
          setColumnOptions(columnOpitonsData);
          setEditableKeys(rowKeys);

          setTables(res.data.tables);
          const tableOptionData = {};
          res.data.tables.forEach((table: GenTable) => {
            tableOptionData[table.tableName] = table.tableName + ': ' + table.tableComment;
          });
          setTableOptions(tableOptionData);

          optionselect().then((optionRes) => {
            if (optionRes.success) {
              const dictOptionData = {};
              optionRes.data.forEach((dict: DictDataType) => {
                dictOptionData[dict.dictType] = dict.dictName + ': ' + dict.dictType;
              });

              setDictOptions(dictOptionData);
            }
          });
        }
      });
    }
  }, [props.tableId]);

  // 提交表单
  const handleFinish = () => {
    const values = formRef.current?.getFieldsFormatValue?.();
    values.params = {
      treeCode: values.treeCode || tableInfo?.treeCode,
      treeName: values.treeName || tableInfo?.treeName,
      treeParentCode: values.treeParentCode || tableInfo?.treeParentCode,
      parentMenuId: values.parentMenuId || tableInfo?.parentMenuId,
    };
    return props.onSubmit({ ...tableInfo, ...values } as GenTableFormValueType);
  };

  // 关闭表单
  const handleClose = () => {
    setselectedGenTpl('');
    setselectedGenType('');
    setLoading(true);
    formRef.current?.resetFields();
    props.onCancel();
  };

  const columns: ProColumns<GenTableColumn>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'index',
      align: 'center',
      width: '64px',
      fixed: 'left',
    },
    {
      title: '字段列名',
      dataIndex: 'columnName',
      valueType: 'text',
      editable: false,
      align: 'center',
      fixed: 'left',
    },
    {
      title: '字段描述',
      dataIndex: 'columnComment',
      valueType: 'text',
      align: 'center',
    },
    {
      title: '物理类型',
      dataIndex: 'columnType',
      valueType: 'text',
      editable: false,
      align: 'center',
    },
    {
      title: 'java类型',
      dataIndex: 'javaType',
      valueType: 'select',
      align: 'center',
      valueEnum: {
        Long: 'Long',
        String: 'String',
        Integer: 'Integer',
        Double: 'Double',
        BigDecimal: 'BigDecimal',
        Date: 'Date',
        Boolean: 'Boolean',
      },
    },
    {
      title: 'java属性',
      dataIndex: 'javaField',
      valueType: 'text',
      align: 'center',
    },
    {
      title: '插入',
      dataIndex: 'isInsert',
      valueType: 'checkbox',
      fieldProps: {
        options: [{ label: '', value: '1' }],
      },
      formItemProps: {
        noStyle: true,
        normalize: (value) => value.join(','),
      },
      align: 'center',
      width: '64px',
    },
    {
      title: '编辑',
      dataIndex: 'isEdit',
      valueType: 'checkbox',
      fieldProps: {
        options: [{ label: '', value: '1' }],
      },
      formItemProps: {
        noStyle: true,
        normalize: (value) => value.join(','),
      },
      align: 'center',
      width: '64px',
    },
    {
      title: '列表',
      dataIndex: 'isList',
      valueType: 'checkbox',
      fieldProps: {
        options: [{ label: '', value: '1' }],
      },
      formItemProps: {
        noStyle: true,
        normalize: (value) => value.join(','),
      },
      align: 'center',
      width: '64px',
    },
    {
      title: '查询',
      dataIndex: 'isQuery',
      valueType: 'checkbox',
      fieldProps: {
        options: [{ label: '', value: '1' }],
      },
      formItemProps: {
        noStyle: true,
        normalize: (value) => value.join(','),
      },
      align: 'center',
      width: '64px',
    },
    {
      title: '查询方式',
      dataIndex: 'queryType',
      valueType: 'select',
      valueEnum: {
        EQ: '=',
        NE: '!=',
        GT: '>',
        GTE: '≥',
        LT: '<',
        LTE: '≤',
        LIKE: 'LIKE',
        BETWEEN: 'BETWEEN',
      },
      align: 'center',
    },
    {
      title: '必填',
      dataIndex: 'isRequired',
      valueType: 'checkbox',
      align: 'center',
      fieldProps: {
        options: [{ label: '', value: '1' }],
      },
      formItemProps: {
        noStyle: true,
        normalize: (value) => value.join(','),
      },
      width: '64px',
    },
    {
      title: '显示类型',
      dataIndex: 'htmlType',
      valueType: 'select',
      align: 'center',
      valueEnum: {
        input: '文本框',
        textarea: '文本域',
        select: '下拉框',
        checkbox: '复选框',
        radio: '单选框',
        datetime: '日期控件',
        imageUpload: '图片上传',
        fileUpload: '文件上传',
        editor: '富文本控件',
      },
    },
    {
      title: '字典类型',
      dataIndex: 'dictType',
      valueType: 'select',
      align: 'center',
      valueEnum: dictOptions,
      width: '200px',
    },
  ];

  return (
    <DrawerForm
      title={intl.formatMessage({
        id: 'call.area.formName',
        defaultMessage: '编辑代码生成业务',
      })}
      visible={props.visible}
      initialValues={tableInfo}
      onFinish={handleFinish}
      autoFocusFirstInput
      formRef={formRef}
      drawerProps={{
        width: '60%',
        placement: 'right',
        destroyOnClose: true,
        onClose: handleClose,
      }}
    >
      <input type="hidden" name="tableId" value={props.tableId} />
      <Skeleton loading={loading}>
        {props.tableId && (
          <Tabs onChange={() => {}}>
            <TabPane tab="基本信息" key={'baseInfo'}>
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={12}>
                  <ProFormText
                    name="tableName"
                    label={intl.formatMessage({
                      id: 'gen.tableName',
                      defaultMessage: '表名称',
                    })}
                    placeholder={intl.formatMessage({
                      id: 'gen.tableName.placeholder',
                      defaultMessage: '请填写表名称',
                    })}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="gen.tableName.rule"
                            defaultMessage="表名称不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
                <Col span={12}>
                  <ProFormText
                    name="tableComment"
                    label={intl.formatMessage({
                      id: 'gen.tableComment',
                      defaultMessage: '表描述',
                    })}
                    placeholder={intl.formatMessage({
                      id: 'gen.tableComment.placeholder',
                      defaultMessage: '请填写表描述',
                    })}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="gen.tableComment.rule"
                            defaultMessage="表描述不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={12}>
                  <ProFormText
                    name="className"
                    label={intl.formatMessage({
                      id: 'gen.className',
                      defaultMessage: '实体类名称',
                    })}
                    placeholder={intl.formatMessage({
                      id: 'gen.className.placeholder',
                      defaultMessage: '请填写实体类名称',
                    })}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="gen.className.rule"
                            defaultMessage="实体类名称不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
                <Col span={12}>
                  <ProFormText
                    name="functionAuthor"
                    label="作者"
                    placeholder="请填写作者信息"
                    rules={[
                      {
                        required: true,
                        message: '作者信息不能为空！',
                      },
                    ]}
                  />
                </Col>
              </Row>
              <ProFormTextArea name="remark" label="备注信息" />
            </TabPane>
            <TabPane tab="生成信息" key={'genInfo'}>
              <ProForm.Item label={'生成模板'} name={'tplCategory'}>
                <Segmented
                  options={[
                    { label: '单表（增删改查）', value: 'crud', icon: <TableOutlined /> },
                    { label: '树表（增删改查）', value: 'tree', icon: <BranchesOutlined /> },
                    { label: '主子表（增删改查）', value: 'sub', icon: <ApartmentOutlined /> },
                  ]}
                  onChange={(value: SegmentedValue) => {
                    setselectedGenTpl(value.toString());
                  }}
                />
              </ProForm.Item>
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={8}>
                  <ProFormText
                    name="packageName"
                    label=" 生成包路径"
                    placeholder={intl.formatMessage({
                      id: 'gen.packageName.placeholder',
                      defaultMessage: '请填写生成包路径',
                    })}
                    tooltip={'生成在哪个java包下，例如 com.ruoyi.system'}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="gen.packageName.rule"
                            defaultMessage="生成包路径不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <ProFormText
                    name="moduleName"
                    label={intl.formatMessage({
                      id: 'gen.moduleName',
                      defaultMessage: '生成模块名',
                    })}
                    placeholder={intl.formatMessage({
                      id: 'gen.moduleName.placeholder',
                      defaultMessage: '请填写生成模块名',
                    })}
                    tooltip={'可理解为子系统名，例如 system'}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="gen.moduleName.rule"
                            defaultMessage="生成模块名不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <ProFormText
                    name="businessName"
                    label={intl.formatMessage({
                      id: 'gen.businessName',
                      defaultMessage: '生成业务名',
                    })}
                    placeholder={intl.formatMessage({
                      id: 'gen.businessName.placeholder',
                      defaultMessage: '请填写生成业务名',
                    })}
                    tooltip={'可理解为功能英文名，例如 user'}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="gen.businessName.rule"
                            defaultMessage="生成业务名不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={8}>
                  <ProFormText
                    name="functionName"
                    label={intl.formatMessage({
                      id: 'gen.functionName',
                      defaultMessage: '生成功能名',
                    })}
                    placeholder={intl.formatMessage({
                      id: 'gen.functionName.placeholder',
                      defaultMessage: '请填写生成功能名',
                    })}
                    tooltip={'用作类描述，例如 用户'}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage
                            id="gen.functionName.rule"
                            defaultMessage="生成功能名不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <ProFormTreeSelect
                    name={'parentMenuId'}
                    label={'上级菜单'}
                    request={async () => {
                      const res = await getMenuList();
                      const menu = { id: 0, label: '主类目', children: [] as DataNode[], value: 0 };
                      const memuData = buildTreeData(res.data, 'menuId', 'menuName', '', '', '');
                      menu.children = memuData;
                      const treeData: any = [];
                      treeData.push(menu);
                      return treeData;
                    }}
                    fieldProps={{
                      treeDefaultExpandedKeys: [0],
                    }}
                    tooltip={'分配到指定菜单下，例如 系统管理'}
                    rules={[
                      {
                        required: false,
                        message: '上级菜单不能为空!',
                      },
                    ]}
                  />
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={8}>
                  <ProFormRadio.Group
                    options={[
                      {
                        label: 'zip压缩包',
                        value: '0',
                      },
                      {
                        label: '自定义路径',
                        value: '1',
                      },
                    ]}
                    name="genType"
                    label="生成代码方式"
                    initialValue={selectedGenType}
                    fieldProps={{
                      onChange(e) {
                        setselectedGenType(e.target.value);
                      },
                    }}
                    tooltip={'默认为zip压缩包下载，也可以自定义生成路径'}
                    width="xl"
                    rules={[
                      {
                        required: false,
                        message: '请选择生成代码方式！',
                      },
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <ProFormText
                    name="genPath"
                    label="自定义路径"
                    initialValue={'/'}
                    hidden={selectedGenType === '0'}
                    tooltip={'填写磁盘绝对路径，若不填写，则生成到当前Web项目下'}
                    rules={[
                      {
                        required: selectedGenType === '1',
                        message: (
                          <FormattedMessage
                            id="gen.packageName.rule"
                            defaultMessage="生成包路径不能为空！"
                          />
                        ),
                      },
                    ]}
                  />
                </Col>
              </Row>
              {/* 树表模板 */}
              {selectedGenTpl === 'tree' && <Divider plain>其他信息</Divider>}
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={8}>
                  <ProFormSelect
                    label="树编码字段"
                    name={'treeCode'}
                    valueEnum={columnOptions}
                    tooltip={'树显示的编码字段名， 如：dept_id'}
                    hidden={selectedGenTpl !== 'tree'}
                    rules={[
                      {
                        required: selectedGenTpl === 'tree',
                        message: '树编码字段名不能为空.',
                      },
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <ProFormSelect
                    label="树父编码字段"
                    name={'treeParentCode'}
                    valueEnum={columnOptions}
                    hidden={selectedGenTpl !== 'tree'}
                    tooltip={'树显示的父编码字段名， 如：parent_Id'}
                    rules={[
                      {
                        required: selectedGenTpl === 'tree',
                        message: '树编码字段名不能为空.',
                      },
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <ProFormSelect
                    label="树名称字段"
                    name={'treeName'}
                    valueEnum={columnOptions}
                    hidden={selectedGenTpl !== 'tree'}
                    tooltip={'树节点的显示名称字段名， 如：dept_name'}
                    rules={[
                      {
                        required: selectedGenTpl === 'tree',
                        message: '树编码字段名不能为空.',
                      },
                    ]}
                  />
                </Col>
              </Row>
              {/* 主子表模板 */}
              {selectedGenTpl === 'sub' && <Divider plain>关联信息</Divider>}
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col span={8}>
                  <ProFormSelect
                    label="关联子表的表名"
                    name={'subTableName'}
                    hidden={selectedGenTpl !== 'sub'}
                    valueEnum={tableOptions}
                    fieldProps={{
                      onChange: (value) => {
                        tables.forEach((table: GenTable) => {
                          if (table.tableName === value) {
                            const fkCols = {};
                            table.columns.forEach((column: GenTableColumn) => {
                              fkCols[column.columnName] =
                                column.columnName + ': ' + column.columnComment;
                            });
                            setFKColumnOptions(fkCols);
                            formRef.current?.setFields([{ name: 'subTableFkName', value: '' }]);
                            return;
                          }
                        });
                      },
                    }}
                    tooltip={'关联子表的表名， 如：sys_user'}
                    rules={[
                      {
                        required: selectedGenTpl === 'sub',
                        message: '关联子表的表名不能为空.',
                      },
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <ProFormSelect
                    label="子表关联的外键名"
                    name={'subTableFkName'}
                    valueEnum={fkColumnOptions}
                    hidden={selectedGenTpl !== 'sub'}
                    tooltip={'子表关联的外键名， 如：user_id'}
                    rules={[
                      {
                        required: selectedGenTpl === 'sub',
                        message: '子表关联的外键名不能为空.',
                      },
                    ]}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="字段信息" key={'colInfo'}>
              <ProForm.Item name={'columns'}>
                <EditableProTable<GenTableColumn>
                  rowKey={'columnId'}
                  value={tableInfo?.columns}
                  controlled
                  columns={columns}
                  toolBarRender={false}
                  recordCreatorProps={false}
                  editableFormRef={editableFormRef}
                  editable={{
                    type: 'single',
                    editableKeys,
                    onChange: setEditableKeys,
                    actionRender: (row, _, dom) => {
                      return [dom.delete];
                    },
                  }}
                  scroll={{ x: 1600 }}
                />
              </ProForm.Item>
            </TabPane>
          </Tabs>
        )}
      </Skeleton>
    </DrawerForm>
  );
};

export default GenTableForm;
