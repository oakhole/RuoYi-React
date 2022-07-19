import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { DictTypeType, DictTypeListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询字典类型列表
export async function getDictTypeList(params?: any, sort?: any) {
  return request('/api/system/dict/type/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询字典类型列表
export async function optionselect() {
  return request('/api/system/dict/type/optionselect', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询字典类型详细
export function getDictType(dictId: string) {
  return request(`/api/system/dict/type/${dictId}`, {
    method: 'GET',
  });
}

// 查询字典数据详细
export function getDict(dictType: string) {
  return request(`/api/system/dict/data/type/${dictType}`, {
    method: 'GET',
  });
}

// 新增字典类型
export async function addDictType(params: DictTypeType) {
  return request('/api/system/dict/type', {
    method: 'POST',
    data: params,
  });
}

// 修改字典类型
export async function updateDictType(params: DictTypeType) {
  return request('/api/system/dict/type', {
    method: 'PUT',
    data: params,
  });
}

// 删除字典类型
export async function removeDictType(ids: string) {
  return request(`/api/system/dict/type/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出字典类型
export function exportDictType(params?: DictTypeListParams) {
  return downLoadXlsx(
    `/api/system/dict/type/export`,
    { params },
    `dict_type_${new Date().getTime()}.xlsx`,
  );
}
