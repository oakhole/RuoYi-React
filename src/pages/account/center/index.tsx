import {
  ClusterOutlined,
  MailOutlined,
  TeamOutlined,
  UserOutlined,
  MobileOutlined,
  ManOutlined,
} from '@ant-design/icons';
import { Card, Col, Divider, List, Row } from 'antd';
import React, { useState } from 'react';
import { useRequest } from '@umijs/max';
import type { tabKeyType } from './data.d';
import { queryCurrentUserInfo } from './service';
import styles from './Center.less';
import BaseInfo from './components/BaseInfo';
import ResetPassword from './components/ResetPassword';
import AvatarCropper from './components/AvatarCropper';
import { GridContent } from '@ant-design/pro-components';
import PageLoading from '@/pages/dashboard/analysis/components/PageLoading';

const operationTabList = [
  {
    key: 'base',
    tab: <span>基本资料</span>,
  },
  {
    key: 'password',
    tab: <span>重置密码</span>,
  },
];

const Center: React.FC = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('base');

  const [cropperModalVisible, setCropperModalVisible] = useState<boolean>(false);

  //  获取用户信息
  const { data: userInfo, loading } = useRequest(() => {
    return queryCurrentUserInfo();
  });

  const currentUser = userInfo?.user;

  //  渲染用户信息
  const renderUserInfo = ({
    userName,
    phonenumber,
    email,
    sex,
    dept,
  }: Partial<API.CurrentUser>) => {
    return (
      <List>
        <List.Item>
          <div>
            <UserOutlined
              style={{
                marginRight: 8,
              }}
            />
            用户名
          </div>
          <div>{userName}</div>
        </List.Item>
        <List.Item>
          <div>
            <ManOutlined
              style={{
                marginRight: 8,
              }}
            />
            性别
          </div>
          <div>{sex === '1' ? '女' : '男'}</div>
        </List.Item>
        <List.Item>
          <div>
            <MobileOutlined
              style={{
                marginRight: 8,
              }}
            />
            电话
          </div>
          <div>{phonenumber}</div>
        </List.Item>
        <List.Item>
          <div>
            <MailOutlined
              style={{
                marginRight: 8,
              }}
            />
            邮箱
          </div>
          <div>{email}</div>
        </List.Item>
        <List.Item>
          <div>
            <ClusterOutlined
              style={{
                marginRight: 8,
              }}
            />
            部门
          </div>
          <div>{dept?.deptName}</div>
        </List.Item>
      </List>
    );
  };

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'base') {
      return <BaseInfo values={currentUser} />;
    }
    if (tabValue === 'password') {
      return <ResetPassword />;
    }
    return null;
  };

  if (!currentUser) {
    return <PageLoading />;
  }

  return (
    <GridContent>
      <Row gutter={[16, 24]}>
        <Col lg={6} md={24}>
          <Card title="个人信息" bordered={false} loading={loading}>
            {!loading && (
              <div style={{ textAlign: 'center' }}>
                <div
                  className={styles.avatarHolder}
                  onClick={() => {
                    setCropperModalVisible(true);
                  }}
                >
                  <img alt="" src={currentUser.avatar} />
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>角色</div>
                  <Row gutter={36}>
                    {currentUser.roles &&
                      currentUser.roles.map((item: any) => (
                        <Col key={item.roleId} lg={24} xl={12}>
                          <TeamOutlined
                            style={{
                              marginRight: 8,
                            }}
                          />
                          {item.roleName}
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            )}
          </Card>
        </Col>
        <Col lg={18} md={24}>
          <Card
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
      <AvatarCropper
        onFinished={() => {
          setCropperModalVisible(false);
        }}
        visible={cropperModalVisible}
        data={currentUser.avatar}
      />
    </GridContent>
  );
};

export default Center;
