import type { Request, Response } from 'express';
import Mock from 'mockjs';
import type { GenTable } from './data.d';

/**
 * MOCK: 代码生成业务
 *
 * @date 2022-07-15
 */

// 模拟单个数据
function fakeObject(): GenTable {
  const obj: GenTable = Mock.mock({
    // 编号
    tableId: '@natural(0, 1000000)',
    // 表名称
    tableName: '@ctitle(8, 16)',
    // 表描述
    tableComment: '@ctitle(8, 16)',
    // 关联子表的表名
    subTableName: '@ctitle(8, 16)',
    // 子表关联的外键名
    subTableFkName: '@ctitle(8, 16)',
    // 实体类名称
    className: '@ctitle(8, 16)',
    // 使用的模板（crud单表操作 tree树表操作）
    tplCategory: '@ctitle(8, 16)',
    // 生成包路径
    packageName: '@ctitle(8, 16)',
    // 生成模块名
    moduleName: '@ctitle(8, 16)',
    // 生成业务名
    businessName: '@ctitle(8, 16)',
    // 生成功能名
    functionName: '@ctitle(8, 16)',
    // 生成功能作者
    functionAuthor: '@ctitle(8, 16)',
    // 生成代码方式（0zip压缩包 1自定义路径）
    genType: '@ctitle(8, 16)',
    // 生成路径（不填默认项目路径）
    genPath: '@ctitle(8, 16)',
    // 其它生成选项
    options: '@ctitle(8, 16)',
    // 创建者
    createBy: '@ctitle(8, 16)',
    // 创建时间
    createTime: "@date('yyyy-MM-dd HH:mm:ss')",
    // 更新者
    updateBy: '@ctitle(8, 16)',
    // 更新时间
    updateTime: "@date('yyyy-MM-dd HH:mm:ss')",
    // 备注
    remark: '@ctitle(8, 16)',
  });
  return obj;
}

// 模拟数据列表
function fakeList(count: number): GenTable[] {
  const list: GenTable[] = [];
  for (let i = 0; i < count; i += 1) {
    list.push(fakeObject());
  }

  return list;
}

// 查询代码生成业务列表
function getGenTableList(req: Request, res: Response) {
  const params: any = req.query;
  const count = params.pageSize || 20;
  const result = fakeList(Math.floor(Math.random() * count));
  return res.json({
    code: 200,
    success: true,
    data: result,
  });
}

// 获取代码生成业务详细信息
export async function getGenTable(req: Request, res: Response) {
  return res.json({
    code: 200,
    success: true,
    msg: '操作成功',
    data: fakeObject(),
  });
}

// 新增代码生成业务
export async function addGenTable(req: Request, res: Response) {
  return res.json({
    code: 200,
    success: true,
    msg: '操作成功',
  });
}

// 修改代码生成业务
export async function updateGenTable(req: Request, res: Response) {
  return res.json({
    code: 200,
    success: true,
    msg: '操作成功',
  });
}

// 删除代码生成业务
export async function removeGenTable(req: Request, res: Response) {
  return res.json({
    code: 200,
    success: true,
    msg: '操作成功',
  });
}

// 导出代码生成业务列表
export async function exportGenTable(req: Request) {
  const params: any = req.query;
  const aLink = document.createElement('a');
  const blob = new Blob([params], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  aLink.style.display = 'none';
  aLink.href = URL.createObjectURL(blob);
  aLink.setAttribute('download', `table_$#{new Date().getTime()}.xlsx`); // 设置下载文件名称
  document.body.appendChild(aLink);
  aLink.click();
  URL.revokeObjectURL(aLink.href); // 清除引用
  document.body.removeChild(aLink);
}

export default {
  'GET  /api/question/table/list': getGenTableList,
  'GET  /api/question/table/:id': getGenTable,
  'POST  /api/question/table': addGenTable,
  'PUT  /api/question/table': updateGenTable,
  'DELETE  /api/question/table/:id': removeGenTable,
  'GET  /api/question/table/export': exportGenTable,
};
