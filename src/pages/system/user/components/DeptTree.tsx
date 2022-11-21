/*
 * @Author: Oakhole oakhole@163.com
 * @Date: 2022-11-21 09:53:36
 * @LastEditors: Oakhole oakhole@163.com
 * @LastEditTime: 2022-11-21 10:26:37
 * @FilePath: /RuoYi-React/src/pages/system/user/components/DeptTree.tsx
 * @Description: render dept tree
 */
import React, { useState, useEffect } from 'react';
import { getDeptTreeList } from '../../dept/service';
import { Input, Tree } from 'antd';

const { Search } = Input;
const { DirectoryTree } = Tree;

interface TreeProps {
  // 展开深度
  expandDepth?: number;
  onSelect: (values: any) => Promise<void>;
}

const getParentKey: any = (key: any, tree: any[]) => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item: any) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

const DeptTree: React.FC<TreeProps> = (props) => {
  const [treeData, setTreeData] = useState<any>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');
  const [treeNodeList, setTreeNodeList] = useState<any[]>([]);

  useEffect(() => {
    const nodes: React.SetStateAction<any[]> = [];
    const parentKeys: any[] | ((prevState: React.Key[]) => React.Key[]) = [];

    const generateList = (data: any[], _expandDepth: number) => {
      for (let i = 0; i < data.length; i++) {
        const node = data[i];
        nodes.push(node);

        if (node.children) {
          if (_expandDepth > 0) {
            parentKeys.push(node.key);
          }
          generateList(node.children, _expandDepth - 1);
        }
      }
    };

    getDeptTreeList({}).then((res: any) => {
      setTreeData(res);
      generateList(res, props.expandDepth || 2);

      setTreeNodeList(nodes);
      setExpandedKeys(parentKeys);
    });
  }, [props.expandDepth]);

  const onSelect = (keys: React.Key[], info: any) => {
    props.onSelect(info.node);
  };

  const onExpand = (expandedKeysValue: React.Key[]) => {
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    const expandedParentKeys = treeNodeList
      .map((item: any) => {
        if (item.title.indexOf(value) > -1) {
          const parentKey = getParentKey(item.key, treeData);
          return parentKey;
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);

    setExpandedKeys(expandedParentKeys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  const loop: any = (data: any) => {
    return data.map((item: { title: string; children: any; key: any }) => {
      const index = item.title.indexOf(searchValue);
      const beforeStr = item.title.substring(0, index);
      const afterStr = item.title.slice(index + searchValue.length);
      const title =
        index > -1 ? (
          <span>
            {beforeStr}
            <span style={{ color: '#d93026' }}>{searchValue}</span>
            {afterStr}
          </span>
        ) : (
          <span>{item.title}</span>
        );
      if (item.children) {
        return { title, key: item.key, children: loop(item.children) };
      }

      return {
        title,
        key: item.key,
      };
    });
  };

  return (
    <div>
      <Search style={{ marginBottom: 8 }} placeholder="请输入部门名称" onChange={onChange} />
      <DirectoryTree
        multiple
        defaultExpandAll
        expandAction={'doubleClick'}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={loop(treeData)}
        onSelect={onSelect}
        onExpand={onExpand}
      />
    </div>
  );
};

DeptTree.defaultProps = {
  // 默认展开深度 2级
  expandDepth: 2,
};

export default DeptTree;
