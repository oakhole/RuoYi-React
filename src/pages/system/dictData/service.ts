import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { DictDataType, DictDataListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询字典数据列表
export async function getDictDataList(params?: any, sort?: any) {
  return request('/api/system/dict/data/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询字典数据详细
export function getDictData(dictCode: string) {
  return request(`/api/system/dict/data/${dictCode}`, {
    method: 'GET',
  });
}

// 新增字典数据
export async function addDictData(params: DictDataType) {
  return request('/api/system/dict/data', {
    method: 'POST',
    data: params,
  });
}

// 修改字典数据
export async function updateDictData(params: DictDataType) {
  return request('/api/system/dict/data', {
    method: 'PUT',
    data: params,
  });
}

// 删除字典数据
export async function removeDictData(ids: string) {
  return request(`/api/system/dict/data/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出字典数据
export function exportDictData(params?: DictDataListParams) {
  return downLoadXlsx(
    `/api/system/dict/data/export`,
    { params },
    `dict_data_${new Date().getTime()}.xlsx`,
  );
}
