import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { LogininforType, LogininforListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询系统访问记录列表
export async function getLogininforList(params?: any, sort?: any) {
  return request('/api/monitor/logininfor/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询系统访问记录详细
export function getLogininfor(infoId: number) {
  return request(`/api/monitor/logininfor/${infoId}`, {
    method: 'GET',
  });
}

// 新增系统访问记录
export async function addLogininfor(params: LogininforType) {
  return request('/api/monitor/logininfor', {
    method: 'POST',
    data: params,
  });
}

// 修改系统访问记录
export async function updateLogininfor(params: LogininforType) {
  return request('/api/monitor/logininfor', {
    method: 'PUT',
    data: params,
  });
}

// 删除系统访问记录
export async function removeLogininfor(ids: string) {
  return request(`/api/monitor/logininfor/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出系统访问记录
export function exportLogininfor(params?: LogininforListParams) {
  return downLoadXlsx(
    `/api/monitor/logininfor/export`,
    { params },
    `login_infor_${new Date().getTime()}.xlsx`,
  );
}

// 清空登录日志
export async function cleanLogininfor() {
  return request('/api/monitor/logininfor/clean', {
    method: 'DELETE',
  });
}
