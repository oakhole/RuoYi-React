import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { RoleType, RoleListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询角色信息列表
export async function getRoleList(params?: any, sort?: any) {
  return request('/api/system/role/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询角色信息详细
export function getRole(roleId: number) {
  return request(`/api/system/role/${roleId}`, {
    method: 'GET',
  });
}

// 新增角色信息
export async function addRole(params: RoleType) {
  return request('/api/system/role', {
    method: 'POST',
    data: params,
  });
}

// 修改角色信息
export async function updateRole(params: RoleType) {
  return request('/api/system/role', {
    method: 'PUT',
    data: params,
  });
}

// 删除角色信息
export async function removeRole(ids: string) {
  return request(`/api/system/role/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出角色信息
export async function exportRole(params?: RoleListParams) {
  return downLoadXlsx(`/api/system/role/export`, { params }, `role_${new Date().getTime()}.xlsx`);
}

// 获取角色菜单列表
export function getRoleMenuList(id: number) {
  return request(`/api/system/menu/roleMenuTreeselect/${id}`, {
    method: 'get',
  });
}
