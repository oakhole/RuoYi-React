/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 14:27:02
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-11-30 20:52:13
 * @FilePath: /RuoYi-React/config/proxy.ts
 * @Description: 代理配置
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://vue.ruoyi.vip',
      changeOrigin: true,
      pathRewrite: { '^/api': '/prod-api' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'http://vue.ruoyi.vip',
      changeOrigin: true,
      pathRewrite: { '^/api': '/prod-api' },
    },
  },
};
