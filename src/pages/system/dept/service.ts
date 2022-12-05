import { downLoadXlsx } from '@/utils/downloadFile';
import { request } from '@umijs/max';
import { formatTreeSelectData, paramsSortable } from '@/utils/utils';
import type { DataNode } from 'antd/lib/tree';
import type { DeptType, DeptListParams } from './data.d';

// 查询部门列表
export async function getDeptList(params?: DeptListParams, sort?: any) {
  return request('/api/system/dept/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询部门列表（排除节点）
export function getDeptListExcludeChild() {
  return request('/api/system/dept/list', {
    method: 'get',
  });
}

// 查询部门详细
export function getDept(deptId: number) {
  return request(`/api/system/dept/${deptId}`, {
    method: 'GET',
  });
}

// 新增部门
export async function addDept(params: DeptType) {
  return request('/api/system/dept', {
    method: 'POST',
    data: params,
  });
}

// 修改部门
export async function updateDept(params: DeptType) {
  return request('/api/system/dept', {
    method: 'PUT',
    data: params,
  });
}

// 删除部门
export async function removeDept(ids: string) {
  return request(`/api/system/dept/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出部门
export function exportDept(params?: DeptListParams) {
  return downLoadXlsx(`/api/system/dept/export`, { params }, `dept_${new Date().getTime()}.xlsx`);
}

// 获取数据列表
export function getTreeList(params: any): Promise<DataNode[]> {
  return new Promise((resolve) => {
    const queryString = new URLSearchParams(params).toString();
    request(`/api/system/dept/treeselect?${queryString}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }).then((res) => {
      if (res && res.code === 200) {
        const treeData = formatTreeSelectData(res.data);
        resolve(treeData);
      } else {
        resolve([]);
      }
    });
  });
}

// 获取部门列表树结构数据
export function getDeptTreeList(params: any): Promise<DataNode[]> {
  return new Promise((resolve) => {
    const queryString = new URLSearchParams(params).toString();
    request(`/api/system/user/deptTree?${queryString}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }).then((res) => {
      if (res && res.code === 200) {
        const treeData = formatTreeSelectData(res.data);
        resolve(treeData);
      } else {
        resolve([]);
      }
    });
  });
}
