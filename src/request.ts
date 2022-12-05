/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-12-05 16:55:23
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-12-05 20:13:02
 * @FilePath: /RuoYi-React/src/request.ts
 * @Description: 封装 axios 请求全局配置
 */

import type { RequestConfig } from '@umijs/max';
import { message, notification } from 'antd';
import { lowerCase } from 'lodash';
import queryString from 'query-string';

/** 响应消息 */
const codeMessage: Record<number, string> = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

// 加载中提示信息
let beforeRequestLoading: any;
/** 拦截请求方法: POST、PUT、DELETE, 添加 message 提示 */
const beforeRequest = (url: string, options: any) => {
  if (
    url !== '/api/login' &&
    url !== '/api/logout' &&
    ['post', 'put', 'delete'].some((method) => method === lowerCase(options.method))
  ) {
    beforeRequestLoading = message.loading('正在处理，请稍后');
  }

  return {
    url: url,
    options: { ...options },
  };
};

/** 响应后提示信息 */
const afterResponse = (response: any) => {
  // 仅处理 json 响应数据
  if (response.headers['content-type']?.indexOf('application/json') !== -1) {
    beforeRequestLoading?.();
    switch (response.data.code) {
      case 200:
        if (
          response.config.url !== '/api/login' &&
          response.config.url !== '/api/logout' &&
          ['get', 'post', 'put', 'delete'].some(
            (method) => method === lowerCase(response.config.method),
          )
        ) {
          switch (lowerCase(response.config.method)) {
            case 'post':
              message.success('添加成功');
              break;
            case 'put':
              message.success('更新成功');
              break;
            case 'delete':
              message.success('删除成功');
              break;
            default:
              break;
          }
        }
        break;
      case 401:
        let redirect = history.location.pathname;
        console.log('redirect: ' + redirect);
        if (redirect.indexOf('login') !== -1) redirect = '';
        if (redirect) {
          redirect = '?redirect=' + redirect;
        }
        const search = history.location.search;
        history.push(loginPath + redirect + search);
        break;
      case 404:
      case 500:
        message.error(response.data.msg ?? codeMessage[response.data.code]);
        break;
      default:
        break;
    }
  }
  return response;
};

/** Authorization 鉴权 token */
const authHeaderInterceptor = (url: string, options: any) => {
  // 排除 login / getCaptcha
  if (/api\/(captchaImage|login)/.test(url)) {
    return {
      url: `${url}`,
      options: { ...options },
    };
  }
  const authHeader = {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};

/** 查询时参数转换 */
const convertPaginationArgs = (url: string, options: any) => {
  if (options.method === 'get' && options.params && 'current' in options.params) {
    options.params.pageNum = options.params.current;
    delete options.params.current;
    return {
      url: `${url}`,
      options: { ...options, interceptors: true },
    };
  }

  return {
    url: `${url}`,
    options: { ...options },
  };
};

/** 查询结果转换 */
const convertPaginationResponse = (response: any) => {
  if (response.headers['content-type']?.indexOf('application/json') !== -1) {
    const res = response.data;
    res.success = res.code === 200;
    res.data = res.data ?? res.rows;
    delete res.rows;
    return response;
  } else {
    return response;
  }
};

/** 异常处理 */
const errorHandler = (error: any) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status } = response;

    notification.error({
      message: `请求错误 ${status}: ${response.config.url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

export const GlobalRequestConfig: RequestConfig = {
  /** @doc https://github.com/sindresorhus/query-string#arrayformat-1 */
  // Umi@4 使用 axios，保持与 Umi@3 一致的 GET 参数序列化方式
  // @see 具体文档参考 https://umijs.org/docs/max/request#request-%E6%96%B9%E6%B3%95%E7%9A%84%E5%8F%82%E6%95%B0%E5%8F%98%E5%8A%A8
  paramsSerializer: (params: any) => {
    return queryString.stringify(params);
  },
  requestInterceptors: [beforeRequest, authHeaderInterceptor, convertPaginationArgs],
  responseInterceptors: [afterResponse, convertPaginationResponse],
  errorConfig: { errorHandler },
};
