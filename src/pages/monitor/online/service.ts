import request from 'umi-request';
import { paramsSortable } from '@/utils/utils';

// 查询在线用户列表
export async function getOnlineUserList(params?: any, sort?: any) {
  return request('/api/monitor/online/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
  });
}

// 强退用户
export async function forceLogout(tokenId: string) {
  return request(`/api/monitor/online/${tokenId}`, {
    method: 'DELETE',
  });
}
