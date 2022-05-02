import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { NoticeType, NoticeListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询通知公告列表
export async function getNoticeList(params?: any, sort?: any) {
  return request('/api/system/notice/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询通知公告详细
export function getNotice(noticeId: number) {
  return request(`/api/system/notice/${noticeId}`, {
    method: 'GET',
  });
}

// 新增通知公告
export async function addNotice(params: NoticeType) {
  return request('/api/system/notice', {
    method: 'POST',
    data: params,
  });
}

// 修改通知公告
export async function updateNotice(params: NoticeType) {
  return request('/api/system/notice', {
    method: 'PUT',
    data: params,
  });
}

// 删除通知公告
export async function removeNotice(ids: string) {
  return request(`/api/system/notice/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出通知公告
export function exportNotice(params?: NoticeListParams) {
  return downLoadXlsx(
    `/api/system/notice/export`,
    { params },
    `notice_${new Date().getTime()}.xlsx`,
  );
}
