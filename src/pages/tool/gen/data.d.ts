import type { BaseEntity } from '@/models/BaseEntity';

/**
 * 代码生成业务字段 gen_table_column
 *
 * @date 2022-07-18
 */
export interface GenTableColumn extends BaseEntity {
  // 编号
  columnId: string;
  // 归属表编号
  tableId: string;
  // 列名称
  columnName: string;
  // 列描述
  columnComment: string;
  // 列类型
  columnType: string;
  // JAVA类型
  javaType: string;
  // JAVA字段名
  javaField: string;
  // 是否主键（1是）
  isPk: string;
  // 是否自增（1是）
  isIncrement: string;
  // 是否必填（1是）
  isRequired: string;
  // 是否为插入字段（1是）
  isInsert: string;
  // 是否编辑字段（1是）
  isEdit: string;
  // 是否列表字段（1是）
  isList: string;
  // 是否查询字段（1是）
  isQuery: string;
  // 查询方式（等于、不等于、大于、小于、范围）
  queryType: string;
  // 显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件）
  htmlType: string;
  // 字典类型
  dictType: string;
  // 排序
  sort: string;
}

/**
 * 代码生成业务 gen_table
 *
 * @date 2022-07-15
 */
export interface GenTable extends BaseEntity {
  // 编号
  tableId: string;
  // 表名称
  tableName: string;
  // 表描述
  tableComment: string;
  // 关联子表的表名
  subTableName: string;
  // 子表关联的外键名
  subTableFkName: string;
  // 实体类名称
  className: string;
  // 使用的模板（crud单表操作 tree树表操作）
  tplCategory: string;
  // 生成包路径
  packageName: string;
  // 生成模块名
  moduleName: string;
  // 生成业务名
  businessName: string;
  // 生成功能名
  functionName: string;
  // 生成功能作者
  functionAuthor: string;
  // 生成代码方式（0zip压缩包 1自定义路径）
  genType: string;
  // 生成路径（不填默认项目路径）
  genPath: string;
  // 其它生成选项
  options: string;

  treeCode: string;
  treeName: string;
  treeParentCode: string;
  // 父菜单
  parentMenuId: string;

  // 列
  columns: GenTableColumn[];
}
