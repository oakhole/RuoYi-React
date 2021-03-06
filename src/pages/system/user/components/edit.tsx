import React, { useEffect, useState } from 'react';
import {
  ProFormDigit,
  ProFormText,
  ProFormSelect,
  ProFormTextArea,
  ProFormTreeSelect,
  DrawerForm,
} from '@ant-design/pro-form';
import { Form, Row, Col } from 'antd';
import { useIntl, FormattedMessage } from 'umi';
import type { UserType } from '../data.d';
import type { DataNode } from 'antd/lib/tree';

export type UserFormValueType = Record<string, unknown> & Partial<UserType>;

export type UserFormProps = {
  onCancel: (flag?: boolean, formVals?: UserFormValueType) => void;
  onSubmit: (values: UserFormValueType) => Promise<void>;
  visible: boolean;
  values: Partial<UserType>;
  sexOptions: any;
  statusOptions: any;
  postIds: string[];
  posts: string[];
  roleIds: string[];
  roles: string[];
  depts: DataNode[];
};

const UserForm: React.FC<UserFormProps> = (props) => {
  const [form] = Form.useForm();

  const [userId, setUserId] = useState<any>('');

  const { sexOptions, statusOptions } = props;
  const { roles, posts, depts } = props;

  useEffect(() => {
    form.resetFields();
    setUserId(props.values.userId);
    form.setFieldsValue({
      userId: props.values.userId,
      deptId: props.values.deptId,
      postIds: props.postIds,
      roleIds: props.roleIds,
      userName: props.values.userName,
      nickName: props.values.nickName,
      userType: props.values.userType,
      email: props.values.email,
      phonenumber: props.values.phonenumber,
      sex: props.values.sex,
      avatar: props.values.avatar,
      password: props.values.password,
      status: props.values.status,
      delFlag: props.values.delFlag,
      loginIp: props.values.loginIp,
      loginDate: props.values.loginDate,
      createBy: props.values.createBy,
      createTime: props.values.createTime,
      updateBy: props.values.updateBy,
      updateTime: props.values.updateTime,
      remark: props.values.remark,
    });
  }, [form, props]);

  const intl = useIntl();

  const handleClose = () => {
    props.onCancel();
    form.resetFields();
  };
  const handleFinish = async (values: Record<string, any>) => {
    props.onSubmit(values as UserFormValueType);
  };

  return (
    <DrawerForm
      form={form}
      title={intl.formatMessage({
        id: 'system.User.modify_info',
        defaultMessage: '??????????????????',
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
      <ProFormDigit
        name="userId"
        label={intl.formatMessage({
          id: 'system.User.user_id',
          defaultMessage: '??????ID',
        })}
        width="xl"
        placeholder="???????????????ID"
        disabled
        hidden={true}
        rules={[
          {
            required: false,
            message: <FormattedMessage id="???????????????ID???" defaultMessage="???????????????ID???" />,
          },
        ]}
      />
      <Row gutter={[16, 16]}>
        <Col span={12} order={1}>
          <ProFormText
            name="nickName"
            label={intl.formatMessage({
              id: 'system.User.nick_name',
              defaultMessage: '????????????',
            })}
            width="xl"
            placeholder="?????????????????????"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
        <Col span={12} order={2}>
          <ProFormTreeSelect
            name="deptId"
            label={intl.formatMessage({
              id: 'system.User.dept_id',
              defaultMessage: '??????',
            })}
            request={async () => {
              return depts;
            }}
            width="xl"
            placeholder="?????????????????????"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} order={1}>
          <ProFormText
            name="phonenumber"
            label={intl.formatMessage({
              id: 'system.User.phonenumber',
              defaultMessage: '????????????',
            })}
            width="xl"
            placeholder="?????????????????????"
            rules={[
              {
                required: false,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
        <Col span={12} order={2}>
          <ProFormText
            name="email"
            label={intl.formatMessage({
              id: 'system.User.email',
              defaultMessage: '????????????',
            })}
            width="xl"
            placeholder="?????????????????????"
            rules={[
              {
                required: false,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} order={1}>
          <ProFormText
            name="userName"
            label={intl.formatMessage({
              id: 'system.User.user_name',
              defaultMessage: '????????????',
            })}
            width="xl"
            hidden={userId}
            placeholder="?????????????????????"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
        <Col span={12} order={2}>
          <ProFormText
            name="password"
            label={intl.formatMessage({
              id: 'system.User.password',
              defaultMessage: '??????',
            })}
            width="xl"
            hidden={userId}
            placeholder="???????????????"
            rules={[
              {
                required: false,
                message: <FormattedMessage id="??????????????????" defaultMessage="??????????????????" />,
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} order={1}>
          <ProFormSelect
            valueEnum={sexOptions}
            name="sex"
            label={intl.formatMessage({
              id: 'system.User.sex',
              defaultMessage: '????????????',
            })}
            width="xl"
            placeholder="?????????????????????"
            rules={[
              {
                required: false,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
        <Col span={12} order={2}>
          <ProFormSelect
            valueEnum={statusOptions}
            name="status"
            label={intl.formatMessage({
              id: 'system.User.status',
              defaultMessage: '????????????',
            })}
            width="xl"
            placeholder="?????????????????????"
            rules={[
              {
                required: false,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormText
            name="avatar"
            label={intl.formatMessage({
              id: 'system.User.avatar',
              defaultMessage: '????????????',
            })}
            width="xl"
            placeholder="?????????????????????"
            rules={[
              {
                required: false,
                message: (
                  <FormattedMessage id="????????????????????????" defaultMessage="????????????????????????" />
                ),
              },
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12} order={1}>
          <ProFormSelect
            name="postIds"
            mode="multiple"
            width="xl"
            label={intl.formatMessage({
              id: 'post',
              defaultMessage: '??????',
            })}
            options={posts}
            placeholder="???????????????"
            rules={[{ required: true, message: '???????????????!' }]}
          />
        </Col>
        <Col span={12} order={2}>
          <ProFormSelect
            name="roleIds"
            mode="multiple"
            width="xl"
            label={intl.formatMessage({
              id: 'role',
              defaultMessage: '??????',
            })}
            options={roles}
            placeholder="???????????????"
            rules={[{ required: true, message: '???????????????!' }]}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} order={1}>
          <ProFormTextArea
            name="remark"
            label={intl.formatMessage({
              id: 'system.User.remark',
              defaultMessage: '??????',
            })}
            width="xl"
            placeholder="???????????????"
            rules={[
              {
                required: false,
                message: <FormattedMessage id="??????????????????" defaultMessage="??????????????????" />,
              },
            ]}
          />
        </Col>
      </Row>
    </DrawerForm>
  );
};

export default UserForm;
