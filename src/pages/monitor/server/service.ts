import request from 'umi-request';

// 获取服务器信息
export async function getServerInfo() {
  return request('/api/monitor/server', {
    method: 'GET',
  });
}
