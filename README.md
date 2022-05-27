# RuoYi-React

## 平台简介

- 前端：基于 [**`ant-design-pro V5`**](https://github.com/ant-design/ant-design-pro)
- 后端：基于 [**`Ruoyi-Vue 3.8.2`**](https://gitee.com/y_project/RuoYi-Vue)，主要修改了 json 序列化 `Long/BigInteger/BigDecimal --> String`, 代码如下:

```java
//【ruoyi-framework】 src/../config/ApplicationConfig.java
@Bean
public Jackson2ObjectMapperBuilderCustomizer jacksonObjectMapperCustomization() {
    return jacksonObjectMapperBuilder -> {
        jacksonObjectMapperBuilder.timeZone(TimeZone.getDefault());
        jacksonObjectMapperBuilder.serializerByType(Long.TYPE, ToStringSerializer.instance);
        jacksonObjectMapperBuilder.serializerByType(Long.class, ToStringSerializer.instance);
        jacksonObjectMapperBuilder.serializerByType(BigInteger.class, ToStringSerializer.instance);
        jacksonObjectMapperBuilder.serializerByType(BigDecimal.class, ToStringSerializer.instance);
    };
}
```

## 目录结构

```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── vm                       # 使用 Velocity 生成页面代码
├── README.md
└── package.json
```

###

`src/pages/document.ejs` js 还没加载成功，但是 html 已经加载成功的 landing 页面，具体可分为 `landing 加载页`、`js 加载前`、`js 加载后`、`业务中的加载`。

> 详情参考 [官方介绍](https://pro.ant.design/zh-CN/docs/title-landing)

## 内置功能

1.  用户管理：用户是系统操作者，该功能主要完成系统用户配置。
2.  部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
3.  岗位管理：配置系统用户所属担任职务。
4.  菜单管理：配置系统菜单，操作权限，按钮权限标识等。
5.  角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
6.  字典管理：对系统中经常使用的一些较为固定的数据进行维护。
7.  参数管理：对系统动态配置常用参数。
8.  通知公告：系统通知公告信息发布维护。
9.  操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
10. 登录日志：系统登录日志记录查询包含登录异常。
11. 在线用户：当前系统中活跃用户状态监控。
12. 定时任务：在线（添加、修改、删除)任务调度包含执行结果日志。
13. 代码生成：前后端代码的生成（java、html、xml、sql）支持 CRUD 下载 。
14. 系统接口：根据业务代码自动生成相关的 api 接口文档。
15. 服务监控：监视当前系统 CPU、内存、磁盘、堆栈等相关信息。
16. 缓存监控：对系统的缓存信息查询，命令统计等。
17. 连接池监视：监视当前系统数据库连接池状态，可进行分析 SQL 找出系统性能瓶颈。

## 在线体验

- https://ruoyi-react.oakhole.top
- admin/admin123
