export interface BaseEntity {
  // 创建时间
  createTime: string;

  // 创建者
  createBy: string;

  // 更新时间
  updateTime?: string;

  // 更新者
  updateBy?: string;

  // 备注信息
  remark?: string;

  // 查询条件
  searchValue?: string;
  params?: object;
}
