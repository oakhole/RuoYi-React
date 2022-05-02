// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    searchValue?: any;
    createBy: string;
    createTime: string;
    updateBy?: any;
    updateTime?: any;
    remark: string;
    params: Params;
    userId: number;
    deptId: number;
    userName: string;
    nickName: string;
    email: string;
    phonenumber: string;
    sex: string;
    avatar: string;
    status: string;
    delFlag: string;
    loginIp: string;
    loginDate: string;
    dept: Dept;
    roles: Role[];
    roleIds?: any;
    postIds?: any;
    roleId?: any;
    admin: boolean;
    notifyCount?: number;
    unreadCount?: number;
  };

  type Role = {
    searchValue?: any;
    createBy?: any;
    createTime?: any;
    updateBy?: any;
    updateTime?: any;
    remark?: any;
    params: Params;
    roleId: number;
    roleName: string;
    roleKey: string;
    roleSort: string;
    dataScope: string;
    menuCheckStrictly: boolean;
    deptCheckStrictly: boolean;
    status: string;
    delFlag?: any;
    flag: boolean;
    menuIds?: any;
    deptIds?: any;
    admin: boolean;
  };

  type Dept = {
    searchValue?: any;
    createBy?: any;
    createTime?: any;
    updateBy?: any;
    updateTime?: any;
    remark?: any;
    params: Params;
    deptId: number;
    parentId: number;
    ancestors?: any;
    deptName: string;
    orderNum: string;
    leader: string;
    phone?: any;
    email?: any;
    status: string;
    delFlag?: any;
    parentName?: any;
    children: Dept[];
  };

  type Params = {};

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
    code?: number;
    msg?: string;
    token?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type Captcha = {
    code?: number;
    msg: string;
    uuid: string;
    img: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
    uuid?: string;
    code?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
