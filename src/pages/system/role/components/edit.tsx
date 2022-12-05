/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-02 10:15:18
 * @FilePath: /RuoYi-React/src/pages/system/role/components/edit.tsx
 * @Description: 角色编辑页面
 */
import React, { useEffect, useState } from 'react';
import {
  ProForm,
  ProFormDigit,
  ProFormText,
  ProFormRadio,
  ProFormTextArea,
  DrawerForm,
} from '@ant-design/pro-components';
import { Form, Row, Col, Tree } from 'antd';
import { useIntl, FormattedMessage } from '@umijs/max';
import type { RoleType } from '../data.d';
import type { DataNode } from 'antd/lib/tree';

export type RoleFormValueType = Record<string, unknown> & Partial<RoleType>;

export type RoleFormProps = {
  onCancel: (flag?: boolean, formVals?: RoleFormValueType) => void;
  onSubmit: (values: RoleFormValueType) => Promise<void>;
  visible: boolean;
  values: Partial<RoleType>;
  menuTree: DataNode[];
  menuCheckedKeys: string[];
  statusOptions: any;
};

const RoleForm: React.FC<RoleFormProps> = (props) => {
  const [form] = Form.useForm();

  const { menuTree, menuCheckedKeys } = props;
  const [menuIds, setMenuIds] = useState<any>();
  const { statusOptions } = props;

  useEffect(() => {
    form.resetFields();
    form.setFieldsValue({
      roleId: props.values.roleId,
      roleName: props.values.roleName,
      roleKey: props.values.roleKey,
      roleSort: props.values.roleSort,
      dataScope: props.values.dataScope,
      menuCheckStrictly: props.values.menuCheckStrictly,
      deptCheckStrictly: props.values.deptCheckStrictly,
      status: props.values.status,
      delFlag: props.values.delFlag,
      createBy: props.values.createBy,
      createTime: props.values.createTime,
      updateBy: props.values.updateBy,
      updateTime: props.values.updateTime,
      remark: props.values.remark,
      menuIds: props.values.menuIds,
    });
  }, [form, props]);

  const intl = useIntl();
  const handleClose = () => {
    props.onCancel();
    form.resetFields();
  };
  const handleFinish = async (values: Record<string, any>) => {
    props.onSubmit({ ...values, menuIds } as RoleFormValueType);
  };

  return (
    <DrawerForm
      form={form}
      title={intl.formatMessage({
        id: 'system.Role.modify_info',
        defaultMessage: '编辑角色信息',
      })}
      onFinish={handleFinish}
      initialValues={props.values}
      visible={props.visible}
      drawerProps={{
        destroyOnClose: true,
        onClose: handleClose,
        maskClosable: false,
        keyboard: false,
      }}
    >
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormDigit
            name="roleId"
            label={intl.formatMessage({
              id: 'system.Role.role_id',
              defaultMessage: '角色ID',
            })}
            width="xl"
            placeholder="请输入角色ID"
            disabled
            hidden={!props.values.roleId}
            rules={[
              {
                required: false,
                message: <FormattedMessage id="请输入角色ID！" defaultMessage="请输入角色ID！" />,
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormText
            name="roleName"
            label={intl.formatMessage({
              id: 'system.Role.role_name',
              defaultMessage: '角色名称',
            })}
            width="xl"
            placeholder="请输入角色名称"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="请输入角色名称！" defaultMessage="请输入角色名称！" />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormText
            name="roleKey"
            label={intl.formatMessage({
              id: 'system.Role.role_key',
              defaultMessage: '角色权限字符串',
            })}
            width="xl"
            placeholder="请输入角色权限字符串"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="请输入角色权限字符串！"
                    defaultMessage="请输入角色权限字符串！"
                  />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormDigit
            name="roleSort"
            label={intl.formatMessage({
              id: 'system.Role.role_sort',
              defaultMessage: '显示顺序',
            })}
            width="xl"
            placeholder="请输入显示顺序"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="请输入显示顺序！" defaultMessage="请输入显示顺序！" />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormRadio.Group
            valueEnum={statusOptions}
            name="status"
            label={intl.formatMessage({
              id: 'system.Role.status',
              defaultMessage: '角色状态',
            })}
            labelCol={{ span: 24 }}
            width="xl"
            placeholder="请输入角色状态"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="请输入角色状态！" defaultMessage="请输入角色状态！" />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProForm.Item
            // width="xl"
            name="menuIds"
            label={intl.formatMessage({
              id: 'system.Role.auth',
              defaultMessage: '菜单权限',
            })}
          >
            <Tree
              checkable={true}
              multiple={true}
              checkStrictly={true}
              defaultExpandAll={false}
              treeData={menuTree}
              defaultCheckedKeys={menuCheckedKeys}
              onCheck={(keys: any) => {
                setMenuIds(keys.checked);
              }}
            />
          </ProForm.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormTextArea
            name="remark"
            label={intl.formatMessage({
              id: 'system.Role.remark',
              defaultMessage: '备注',
            })}
            width="xl"
            placeholder="请输入备注"
            rules={[
              {
                required: false,
                message: <FormattedMessage id="请输入备注！" defaultMessage="请输入备注！" />,
              },
            ]}
          />
        </Col>
      </Row>
    </DrawerForm>
  );
};

export default RoleForm;
