import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { UserType, UserListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询用户信息列表
export async function getUserList(params?: any, sort?: any) {
  return request('/api/system/user/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询用户信息详细
export function getUser(userId: number) {
  return request(`/api/system/user/${userId}`, {
    method: 'GET',
  });
}

// 新增用户信息
export async function addUser(params: UserType) {
  return request('/api/system/user', {
    method: 'POST',
    data: params,
  });
}

// 修改用户信息
export async function updateUser(params: UserType) {
  return request('/api/system/user', {
    method: 'PUT',
    data: params,
  });
}

// 删除用户信息
export async function removeUser(ids: string) {
  return request(`/api/system/user/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出用户信息
export function exportUser(params?: UserListParams) {
  return downLoadXlsx(`/api/system/user/export`, { params }, `user_${new Date().getTime()}.xlsx`);
}

export function updateUserProfile(data: API.CurrentUser) {
  return request('/api/system/user/profile', {
    method: 'put',
    data: data,
  });
}

// 用户密码重置
export function updateUserPwd(oldPassword: string, newPassword: string) {
  const data = {
    oldPassword,
    newPassword,
  };
  return request('/api/system/user/profile/updatePwd', {
    method: 'put',
    params: data,
  });
}

// 用户头像上传
export function uploadAvatar(data: any) {
  return request('/api/system/user/profile/avatar', {
    method: 'post',
    data: data,
  });
}
