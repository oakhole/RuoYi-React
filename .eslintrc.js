module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    // @see https://pro.ant.design/zh-CN/blog/deploy-pro/
    // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION  中这个字段又长又罗嗦就是为了不让用户使用。
    // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
    'prettier.semi': false,
  },
};
