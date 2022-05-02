import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { ConfigType, ConfigListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询参数配置列表
export async function getConfigList(params?: any, sort?: any) {
  return request('/api/system/config/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询参数配置详细
export function getConfig(configId: number) {
  return request(`/api/system/config/${configId}`, {
    method: 'GET',
  });
}

// 新增参数配置
export async function addConfig(params: ConfigType) {
  return request('/api/system/config', {
    method: 'POST',
    data: params,
  });
}

// 修改参数配置
export async function updateConfig(params: ConfigType) {
  return request('/api/system/config', {
    method: 'PUT',
    data: params,
  });
}

// 删除参数配置
export async function removeConfig(ids: string) {
  return request(`/api/system/config/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出参数配置
export function exportConfig(params?: ConfigListParams) {
  return downLoadXlsx(
    `/api/system/config/export`,
    { params },
    `config_${new Date().getTime()}.xlsx`,
  );
}
