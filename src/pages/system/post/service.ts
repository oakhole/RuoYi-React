import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { PostType, PostListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询岗位信息列表
export async function getPostList(params?: any, sort?: any) {
  return request('/api/system/post/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询岗位信息详细
export function getPost(postId: number) {
  return request(`/api/system/post/${postId}`, {
    method: 'GET',
  });
}

// 新增岗位信息
export async function addPost(params: PostType) {
  return request('/api/system/post', {
    method: 'POST',
    data: params,
  });
}

// 修改岗位信息
export async function updatePost(params: PostType) {
  return request('/api/system/post', {
    method: 'PUT',
    data: params,
  });
}

// 删除岗位信息
export async function removePost(ids: string) {
  return request(`/api/system/post/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出岗位信息
export function exportPost(params?: PostListParams) {
  return downLoadXlsx(`/api/system/post/export`, { params }, `post_${new Date().getTime()}.xlsx`);
}
