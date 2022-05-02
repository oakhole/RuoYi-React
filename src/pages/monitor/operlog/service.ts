import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { OperlogType, OperlogListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询操作日志记录列表
export async function getOperlogList(params?: any, sort?: any) {
  return request('/api/monitor/operlog/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询操作日志记录详细
export function getOperlog(operId: number) {
  return request(`/api/monitor/operlog/${operId}`, {
    method: 'GET',
  });
}

// 新增操作日志记录
export async function addOperlog(params: OperlogType) {
  return request('/api/monitor/operlog', {
    method: 'POST',
    data: params,
  });
}

// 修改操作日志记录
export async function updateOperlog(params: OperlogType) {
  return request('/api/monitor/operlog', {
    method: 'PUT',
    data: params,
  });
}

// 删除操作日志记录
export async function removeOperlog(ids: string) {
  return request(`/api/monitor/operlog/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出操作日志记录
export function exportOperlog(params?: OperlogListParams) {
  return downLoadXlsx(
    `/api/monitor/operlog/export`,
    { params },
    `oper_log_${new Date().getTime()}.xlsx`,
  );
}

// 清空操作日志
export async function cleanOperlog() {
  return request('/api/monitor/operlog/clean', {
    method: 'DELETE',
  });
}
