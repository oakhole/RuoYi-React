/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:03
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-01 18:25:07
 * @FilePath: /RuoYi-React/src/pages/user/Login/index.tsx
 * @Description: 登录页面
 */
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  SafetyCertificateOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Space, message, Tabs, Input, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { ProForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Link, history, useModel } from '@umijs/max';
import Footer from '@/components/Footer';
import { login } from '@/services/ant-design-pro/api';
import { getFakeCaptcha, getCaptcha } from '@/services/ant-design-pro/login';
import styles from './index.less';
import Col from 'antd/es/grid/col';
import { parse } from 'query-string';

const LoginMessage: React.FC<{
  content?: string;
}> = ({ content }) => (
  <Alert
    closable
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  // 响应的 UUID
  const [captchaKey, setCaptchaKey] = useState<string>('');
  // 响应的图片内容, base64 格式
  const [imageData, setImageData] = useState<string>('');

  /** 刷新验证码图片 */
  const refreshCaptchaImage = async () => {
    getCaptcha().then((data: API.Captcha) => {
      if (data) {
        setCaptchaKey(data.uuid);
        setImageData(data.img);
      }
    });
  };

  useEffect(() => {
    refreshCaptchaImage();
  }, []);

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();

    if (userInfo) {
      await setInitialState((s: any) => ({ ...s, currentUser: userInfo }));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    setSubmitting(true);

    try {
      // 登录
      values.uuid = captchaKey;
      const loginResult: API.LoginResult = await login({ ...values, type });

      if (loginResult.code === 200) {
        // 存储 token
        localStorage.setItem('token', loginResult.token || '');

        const defaultLoginSuccessMessage = '登录成功！';
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const query = parse(history.location.search);
        const { redirect } = query as {
          redirect: string;
        };
        history.push(redirect || '/');
        return;
      } // 如果失败去设置用户错误信息
      setUserLoginState(loginResult);
      refreshCaptchaImage();
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <Row className={styles.content}>
        <Col md={14} className={styles.leftSide} />
        <Col md={10} className={styles.rightSide}>
          <div className={styles.form}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <span className={styles.title}>RuoYi-React</span>
                </Link>
              </div>
              <div className={styles.desc}>{'基于 RuoYi-Vue 提供服务实现 React 前端 UI'}</div>
            </div>

            <div className={styles.main}>
              <ProForm
                initialValues={{
                  autoLogin: true,
                  username: 'admin',
                  password: 'admin123',
                }}
                submitter={{
                  searchConfig: {
                    submitText: '登录',
                  },
                  render: (_: any, dom: any[]) => dom.pop(),
                  submitButtonProps: {
                    loading: submitting,
                    size: 'large',
                    style: {
                      width: '100%',
                      fontWeight: 600,
                      background: '#518eff',
                      borderColor: '#518eff',
                      justifyContent: 'center',
                    },
                  },
                }}
                onFinish={async (values: API.LoginParams) => {
                  await handleSubmit(values as API.LoginParams);
                }}
                isKeyPressSubmit={true}
              >
                <Tabs
                  activeKey={type}
                  onChange={setType}
                  items={[
                    { key: 'account', label: '账户密码登录' },
                    { key: 'mobile', label: '手机号登录', style: { color: 'white' } },
                  ]}
                />

                {userLoginState.code === 500 && type === 'account' && (
                  <LoginMessage content={userLoginState.msg || '登录失败，请重试！'} />
                )}
                {type === 'account' && (
                  <>
                    <ProFormText
                      name="username"
                      fieldProps={{
                        size: 'middle',
                        prefix: <UserOutlined className={styles.prefixIcon} />,
                      }}
                      placeholder={'账号'}
                      rules={[
                        {
                          required: true,
                          message: '请输入您的账号',
                        },
                      ]}
                    />
                    <ProFormText.Password
                      name="password"
                      fieldProps={{
                        size: 'middle',
                        prefix: <LockOutlined className={styles.prefixIcon} />,
                      }}
                      placeholder={'密码'}
                      rules={[
                        {
                          required: true,
                          message: '请输入您的密码',
                        },
                      ]}
                    />
                    <Input.Group compact>
                      <ProFormText
                        name="code"
                        fieldProps={{
                          size: 'middle',
                          prefix: <SafetyCertificateOutlined className={styles.prefixIcon} />,
                        }}
                        placeholder={'验证码'}
                        style={{
                          verticalAlign: 'middle',
                        }}
                        rules={[
                          {
                            pattern: /^\d+$/,
                            message: '请输入正确的验证码',
                          },
                        ]}
                      />
                      <img
                        style={{
                          height: '32px',
                          verticalAlign: 'middle',
                          cursor: 'pointer',
                          float: 'right',
                        }}
                        src={'data:image/gif;base64,' + imageData}
                        onClick={refreshCaptchaImage}
                      />
                    </Input.Group>
                  </>
                )}

                {userLoginState.code === 500 && type === 'mobile' && (
                  <LoginMessage content={userLoginState.msg || '登录失败，请重试！'} />
                )}
                {type === 'mobile' && (
                  <>
                    <ProFormText
                      fieldProps={{
                        size: 'middle',
                        prefix: <MobileOutlined className={styles.prefixIcon} />,
                      }}
                      name="mobile"
                      placeholder={'手机号码'}
                      rules={[
                        {
                          required: true,
                          message: '请输入您的手机号码',
                        },
                        {
                          pattern: /^1\d{10}$/,
                          message: '不合法的手机号！',
                        },
                      ]}
                    />
                    <ProFormCaptcha
                      fieldProps={{
                        size: 'large',
                        prefix: <LockOutlined className={styles.prefixIcon} />,
                      }}
                      captchaProps={{
                        size: 'middle',
                      }}
                      placeholder={'短信验证码'}
                      captchaTextRender={(timing: any, count: any) => {
                        if (timing) {
                          return `${count} ${'秒后重新获取'}`;
                        }

                        return '获取验证码';
                      }}
                      name="captcha"
                      rules={[
                        {
                          required: true,
                          message: '请输入您的验证码',
                        },
                      ]}
                      onGetCaptcha={async (phone: any) => {
                        const result = await getFakeCaptcha({
                          phone,
                        });

                        if (result === false) {
                          return;
                        }

                        message.success('获取验证码成功！验证码为：1234');
                      }}
                    />
                  </>
                )}
                <div
                  style={{
                    marginBottom: 24,
                  }}
                >
                  <ProFormCheckbox noStyle name="autoLogin">
                    记住密码
                  </ProFormCheckbox>
                </div>
              </ProForm>
              <Space className={styles.other}>
                其他登录方式 :
                <AlipayCircleOutlined className={styles.icon} />
                <TaobaoCircleOutlined className={styles.icon} />
                <WeiboCircleOutlined className={styles.icon} />
              </Space>
              <Footer />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
