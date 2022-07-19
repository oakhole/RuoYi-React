import { downLoadXlsx, downLoadZip } from '@/utils/downloadFile';
import { paramsSortable } from '@/utils/utils';
import request from 'umi-request';
import type { GenTable } from './data';

/**
 * SERVICE: 代码生成业务
 *
 * @date 2022-07-15
 */

// 查询代码生成业务列表
export async function getGenTableList(params?: any, sort?: any) {
  return request('/api/tool/gen/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 获取代码生成业务详细信息
export async function getGenTable(id: string) {
  return request(`/api/tool/gen/${id}`, {
    method: 'GET',
  });
}

// 新增代码生成业务
export async function addGenTable(params: Partial<GenTable>) {
  return request('/api/tool/gen', {
    method: 'POST',
    data: params,
  });
}

// 修改代码生成业务
export async function updateGenTable(params: Partial<GenTable>) {
  return request('/api/tool/gen', {
    method: 'PUT',
    data: params,
  });
}

// 删除代码生成业务
export async function removeGenTable(ids: string) {
  return request(`/api/tool/gen/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出代码生成业务列表
export async function exportGenTable(params?: GenTable) {
  return downLoadXlsx(
    `/api/tool/gen/export`,
    { params },
    `question_table_${new Date().getTime()}.xlsx`,
  );
}

// 查询 db 表数据
export async function getDbTables(params: any, sort: any) {
  return request('/api/tool/gen/db/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导入数据库表
export async function importDbTables(tables: string) {
  return request('/api/tool/gen/importTable', {
    method: 'POST',
    params: { tables },
  });
}

// 同步数据库表结构
export async function syncDb(tableName: string) {
  return request(`/api/tool/gen/synchDb/${tableName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 预览生成代码数据
export async function preview(tableId: string) {
  return request(`/api/tool/gen/preview/${tableId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 生成代码
export async function generate(tables: string) {
  return downLoadZip(`/api/tool/gen/batchGenCode?tables=${tables}`);
}
