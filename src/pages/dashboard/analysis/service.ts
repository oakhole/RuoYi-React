import { request } from 'umi';
import type { AnalysisData } from './data';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  return request('https://proapi.azurewebsites.net//api/fake_analysis_chart_data');
}
