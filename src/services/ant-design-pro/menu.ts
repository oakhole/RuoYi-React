import { request } from 'umi';

/**  */
export async function getRouters(options?: Record<string, any>) {
  return request('/api/getRouters', {
    method: 'GET',
    ...(options || {}),
  });
}
