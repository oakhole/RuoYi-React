import React, { useEffect, useState } from 'react';
import {
  ProFormDigit,
  ProFormText,
  ProFormRadio,
  ProFormSelect,
  ProFormTreeSelect,
  DrawerForm,
} from '@ant-design/pro-components';
import { Form, Modal } from 'antd';
import { useIntl, FormattedMessage, getLocale } from '@umijs/max';
import type { DataNode } from 'antd/lib/tree';
import type { MenuType } from '../data.d';
import IconSelector from '@/components/IconSelector';
import { createIcon } from '@/utils/IconUtil';
import { IntlProvider } from 'react-intl';

export type MenuFormValueType = Record<string, unknown> & Partial<MenuType>;

export type MenuFormProps = {
  onCancel: (flag?: boolean, formVals?: MenuFormValueType) => void;
  onSubmit: (values: MenuFormValueType) => Promise<void>;
  visible: boolean;
  values: Partial<MenuType>;
  visibleOptions: any;
  statusOptions: any;
  menuTree: DataNode[];
};

const MenuForm: React.FC<MenuFormProps> = (props) => {
  const [form] = Form.useForm();

  const [menuTypeId, setMenuTypeId] = useState<any>('');
  const [menuIconName, setMenuIconName] = useState<any>();

  const [previewModalVisible, setPreviewModalVisible] = useState<boolean>(false);

  const { menuTree, visibleOptions, statusOptions } = props;
  useEffect(() => {
    form.resetFields();
    setMenuTypeId(props.values.menuType ? props.values.menuType : 'C');
    setMenuIconName(props.values.icon);
    form.setFieldsValue({
      menuId: props.values.menuId,
      menuName: props.values.menuName,
      parentId: props.values.parentId,
      orderNum: props.values.orderNum,
      path: props.values.path,
      component: props.values.component,
      isFrame: props.values.isFrame,
      isCache: props.values.isCache,
      menuType: props.values.menuType,
      visible: props.values.visible,
      status: props.values.status,
      perms: props.values.perms,
      icon: props.values.icon,
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
    props.onSubmit(values as MenuFormValueType);
  };

  return (
    <DrawerForm
      form={form}
      title={intl.formatMessage({
        id: 'system.Menu.modify_info',
        defaultMessage: '编辑菜单信息',
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
      <Modal
        width={1200}
        visible={previewModalVisible}
        onCancel={() => {
          setPreviewModalVisible(false);
        }}
        footer={null}
      >
        <IntlProvider locale={getLocale()}>
          <IconSelector
            onSelect={(name: string) => {
              form.setFieldsValue({ icon: name });
              setMenuIconName(name);
              setPreviewModalVisible(false);
            }}
          />
        </IntlProvider>
      </Modal>

      <ProFormDigit
        name="menuId"
        label={intl.formatMessage({
          id: 'system.Menu.menu_id',
          defaultMessage: '菜单ID',
        })}
        width="xl"
        placeholder="请输入菜单ID"
        disabled
        hidden={true}
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入菜单ID！" defaultMessage="请输入菜单ID！" />,
          },
        ]}
      />

      <ProFormTreeSelect
        name="parentId"
        label={intl.formatMessage({
          id: 'system.Menu.parent_id',
          defaultMessage: '父菜单',
        })}
        request={async () => {
          return menuTree;
        }}
        width="xl"
        placeholder="请选择父菜单"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="请选择父菜单！" defaultMessage="请选择父菜单！" />,
          },
        ]}
      />
      <ProFormRadio.Group
        valueEnum={{
          M: '目录',
          C: '菜单',
          F: '按钮',
        }}
        name="menuType"
        label={intl.formatMessage({
          id: 'system.Menu.menu_type',
          defaultMessage: '菜单类型',
        })}
        fieldProps={{
          onChange: (e) => {
            setMenuTypeId(e.target.value);
          },
        }}
        initialValue="C"
        width="xl"
        labelCol={{ span: 24 }}
        placeholder="请输入菜单类型"
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入菜单类型！" defaultMessage="请输入菜单类型！" />,
          },
        ]}
      />
      <ProFormSelect
        name="icon"
        allowClear={true}
        hidden={menuTypeId === 'F'}
        addonBefore={createIcon(menuIconName)}
        width="xl"
        fieldProps={{
          onClick: () => {
            setPreviewModalVisible(true);
          },
        }}
        label={intl.formatMessage({
          id: 'system.Menu.icon',
          defaultMessage: '菜单图标',
        })}
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请选择菜单图标！" defaultMessage="请选择菜单图标！" />,
          },
        ]}
      />
      <ProFormText
        name="menuName"
        label={intl.formatMessage({
          id: 'system.Menu.menu_name',
          defaultMessage: '菜单名称',
        })}
        width="xl"
        placeholder="请输入菜单名称"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="请输入菜单名称！" defaultMessage="请输入菜单名称！" />,
          },
        ]}
      />
      <ProFormDigit
        name="orderNum"
        label={intl.formatMessage({
          id: 'system.Menu.order_num',
          defaultMessage: '显示顺序',
        })}
        initialValue="0"
        width="xl"
        placeholder="请输入显示顺序"
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入显示顺序！" defaultMessage="请输入显示顺序！" />,
          },
        ]}
      />
      <ProFormRadio.Group
        name="isFrame"
        valueEnum={{
          0: '是',
          1: '否',
        }}
        initialValue="1"
        label={intl.formatMessage({
          id: 'system.Menu.is_frame',
          defaultMessage: '是否为外链',
        })}
        width="xl"
        labelCol={{ span: 24 }}
        hidden={menuTypeId === 'F'}
        placeholder="请输入是否为外链"
        rules={[
          {
            required: false,
            message: (
              <FormattedMessage id="请输入是否为外链！" defaultMessage="请输入是否为外链！" />
            ),
          },
        ]}
      />
      <ProFormText
        name="path"
        label={intl.formatMessage({
          id: 'system.Menu.path',
          defaultMessage: '路由地址',
        })}
        width="xl"
        labelCol={{ span: 24 }}
        placeholder="请输入路由地址"
        hidden={menuTypeId === 'F'}
        rules={[
          {
            required: menuTypeId !== 'F',
            message: <FormattedMessage id="请输入路由地址！" defaultMessage="请输入路由地址！" />,
          },
        ]}
      />
      <ProFormText
        name="perms"
        label={intl.formatMessage({
          id: 'system.Menu.perms',
          defaultMessage: '权限标识',
        })}
        width="xl"
        placeholder="请输入权限标识"
        hidden={menuTypeId === 'M'}
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入权限标识！" defaultMessage="请输入权限标识！" />,
          },
        ]}
      />
      <ProFormText
        name="component"
        label={intl.formatMessage({
          id: 'system.Menu.component',
          defaultMessage: '组件路径',
        })}
        width="xl"
        placeholder="请输入组件路径"
        hidden={menuTypeId !== 'C'}
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入组件路径！" defaultMessage="请输入组件路径！" />,
          },
        ]}
      />
      <ProFormText
        name="query"
        label={intl.formatMessage({
          id: 'system.Menu.query',
          defaultMessage: '路由参数',
        })}
        width="xl"
        placeholder="请输入权路由参数"
        hidden={menuTypeId !== 'C'}
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入路由参数！" defaultMessage="请输入路由参数！" />,
          },
        ]}
      />
      <ProFormRadio.Group
        name="isCache"
        valueEnum={{
          0: '缓存',
          1: '不缓存',
        }}
        initialValue="0"
        label={intl.formatMessage({
          id: 'system.Menu.is_cache',
          defaultMessage: '是否缓存',
        })}
        width="xl"
        labelCol={{ span: 24 }}
        hidden={menuTypeId !== 'C'}
        placeholder="请输入是否缓存"
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入是否缓存！" defaultMessage="请输入是否缓存！" />,
          },
        ]}
      />
      <ProFormRadio.Group
        valueEnum={visibleOptions}
        name="visible"
        label={intl.formatMessage({
          id: 'system.Menu.visible',
          defaultMessage: '可见状态',
        })}
        initialValue="0"
        width="xl"
        labelCol={{ span: 24 }}
        hidden={menuTypeId === 'F'}
        placeholder="请输入可见状态"
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入可见状态！" defaultMessage="请输入可见状态！" />,
          },
        ]}
      />
      <ProFormRadio.Group
        valueEnum={statusOptions}
        name="status"
        label={intl.formatMessage({
          id: 'system.Menu.status',
          defaultMessage: '菜单状态',
        })}
        initialValue="0"
        width="xl"
        labelCol={{ span: 24 }}
        hidden={menuTypeId === 'F'}
        placeholder="请输入菜单状态"
        rules={[
          {
            required: false,
            message: <FormattedMessage id="请输入菜单状态！" defaultMessage="请输入菜单状态！" />,
          },
        ]}
      />
    </DrawerForm>
  );
};

export default MenuForm;
