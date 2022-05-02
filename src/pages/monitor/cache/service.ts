import request from 'umi-request';

// 获取服务器信息
export async function getCacheInfo() {
  return request('/api/monitor/cache', {
    method: 'GET',
  });
}
