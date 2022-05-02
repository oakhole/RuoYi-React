import { request } from 'umi';
import type { NoticeType, ActivitiesType, AnalysisData } from './data';

export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  return request('https://proapi.azurewebsites.net//api/project/notice');
}

export async function queryActivities(): Promise<{ data: ActivitiesType[] }> {
  return request('https://proapi.azurewebsites.net//api/activities');
}

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('https://proapi.azurewebsites.net//api/fake_workplace_chart_data');
}
