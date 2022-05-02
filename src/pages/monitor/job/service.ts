import { downLoadXlsx } from '@/utils/downloadFile';
import request from 'umi-request';
import type { JobType, JobListParams } from './data.d';
import { paramsSortable } from '@/utils/utils';

// 查询定时任务调度列表
export async function getJobList(params?: any, sort?: any) {
  return request('/api/monitor/job/list', {
    params: paramsSortable(params, sort),
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 查询定时任务调度详细
export function getJob(jobId: number) {
  return request(`/api/monitor/job/${jobId}`, {
    method: 'GET',
  });
}

// 新增定时任务调度
export async function addJob(params: JobType) {
  return request('/api/monitor/job', {
    method: 'POST',
    data: params,
  });
}

// 修改定时任务调度
export async function updateJob(params: JobType) {
  return request('/api/monitor/job', {
    method: 'PUT',
    data: params,
  });
}

// 删除定时任务调度
export async function removeJob(ids: string) {
  return request(`/api/monitor/job/${ids}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
}

// 导出定时任务调度
export function exportJob(params?: JobListParams) {
  return downLoadXlsx(`/api/monitor/job/export`, { params }, `job_${new Date().getTime()}.xlsx`);
}

// 定时任务立即执行一次
export async function runJob(jobId: number, jobGroup: string) {
  const job = {
    jobId,
    jobGroup,
  };
  return request('/api/monitor/job/run', {
    method: 'PUT',
    data: job,
  });
}
