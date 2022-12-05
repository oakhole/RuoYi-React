/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-02 10:16:13
 * @FilePath: /RuoYi-React/src/pages/account/center/components/ResetPassword/index.tsx
 * @Description: 账户中心 - 重置密码页面
 */
import React from 'react';
import { Form, message } from 'antd';
import { FormattedMessage } from 'react-intl';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { updateUserPwd } from '@/pages/system/user/service';

const ResetPassword: React.FC = () => {
  const [form] = Form.useForm();
  const intl = useIntl();

  const handleFinish = async (values: Record<string, any>) => {
    const resp = await updateUserPwd(values.oldPassword, values.newPassword);
    if (resp.code === 200) {
      message.success('密码重置成功。');
    } else {
      message.warn(resp.msg);
    }
  };

  const checkPassword = (rule: any, value: string) => {
    const login_password = form.getFieldValue('newPassword');
    if (value === login_password) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('两次密码输入不一致'));
  };

  return (
    <>
      <ProForm form={form} onFinish={handleFinish}>
        <ProFormText
          name="oldPassword"
          label={intl.formatMessage({
            id: 'system.User.old_password',
            defaultMessage: '旧密码',
          })}
          width="xl"
          placeholder="请输入旧密码"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="请输入旧密码！" defaultMessage="请输入旧密码！" />,
            },
          ]}
        />
        <ProFormText
          name="newPassword"
          label={intl.formatMessage({
            id: 'system.User.new_password',
            defaultMessage: '新密码',
          })}
          width="xl"
          placeholder="请输入新密码"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="请输入新密码！" defaultMessage="请输入新密码！" />,
            },
          ]}
        />
        <ProFormText
          name="confirmPassword"
          label={intl.formatMessage({
            id: 'system.User.confirm_password',
            defaultMessage: '确认密码',
          })}
          width="xl"
          placeholder="请输入确认密码"
          rules={[
            {
              required: true,
              message: <FormattedMessage id="请输入确认密码！" defaultMessage="请输入确认密码！" />,
            },
            { validator: checkPassword },
          ]}
        />
      </ProForm>
    </>
  );
};

export default ResetPassword;
