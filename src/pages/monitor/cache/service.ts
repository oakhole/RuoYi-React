import { request } from '@umijs/max';

// 获取服务器信息
export async function getCacheInfo() {
  return request('/api/monitor/cache', {
    method: 'GET',
  });
}
