(self.webpackChunkruoyi_react=self.webpackChunkruoyi_react||[]).push([[6932],{31199:function(z,b,e){"use strict";var c=e(28991),y=e(81253),R=e(85893),g=e(67294),j=e(48162),B=["fieldProps","min","proFieldProps","max"],I=function(P,u){var v=P.fieldProps,E=P.min,r=P.proFieldProps,m=P.max,i=(0,y.Z)(P,B);return(0,R.jsx)(j.Z,(0,c.Z)({valueType:"digit",fieldProps:(0,c.Z)({min:E,max:m},v),ref:u,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:r},i))};b.Z=g.forwardRef(I)},86615:function(z,b,e){"use strict";var c=e(88983),y=e(47933),R=e(28991),g=e(81253),j=e(85893),B=e(22270),I=e(67294),F=e(64893),P=e(48162),u=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],v=I.forwardRef(function(i,h){var s=i.fieldProps,t=i.options,f=i.radioType,d=i.layout,o=i.proFieldProps,n=i.valueEnum,T=(0,g.Z)(i,u);return(0,j.jsx)(P.Z,(0,R.Z)((0,R.Z)({valueType:f==="button"?"radioButton":"radio",ref:h,valueEnum:(0,B.h)(n,void 0)},T),{},{fieldProps:(0,R.Z)({options:t,layout:d},s),proFieldProps:o,filedConfig:{customLightMode:!0}}))}),E=I.forwardRef(function(i,h){var s=i.fieldProps,t=i.children;return(0,j.jsx)(y.ZP,(0,R.Z)((0,R.Z)({},s),{},{ref:h,children:t}))}),r=(0,F.G)(E,{valuePropName:"checked",ignoreWidth:!0}),m=r;m.Group=v,m.Button=y.ZP.Button,m.displayName="ProFormComponent",b.Z=m},5966:function(z,b,e){"use strict";var c=e(28991),y=e(81253),R=e(85893),g=e(48162),j=["fieldProps","proFieldProps"],B=["fieldProps","proFieldProps"],I="text",F=function(E){var r=E.fieldProps,m=E.proFieldProps,i=(0,y.Z)(E,j);return(0,R.jsx)(g.Z,(0,c.Z)({valueType:I,fieldProps:r,filedConfig:{valueType:I},proFieldProps:m},i))},P=function(E){var r=E.fieldProps,m=E.proFieldProps,i=(0,y.Z)(E,B);return(0,R.jsx)(g.Z,(0,c.Z)({valueType:"password",fieldProps:r,proFieldProps:m,filedConfig:{valueType:I}},i))},u=F;u.Password=P,u.displayName="ProFormComponent",b.Z=u},90672:function(z,b,e){"use strict";var c=e(28991),y=e(81253),R=e(85893),g=e(67294),j=e(48162),B=["fieldProps","proFieldProps"],I=function(P,u){var v=P.fieldProps,E=P.proFieldProps,r=(0,y.Z)(P,B);return(0,R.jsx)(j.Z,(0,c.Z)({ref:u,valueType:"textarea",fieldProps:v,proFieldProps:E},r))};b.Z=g.forwardRef(I)},52346:function(z,b,e){"use strict";e.d(b,{jK:function(){return I},j3:function(){return P},Vd:function(){return v},zP:function(){return E},oH:function(){return r},a7:function(){return i},sF:function(){return s},n2:function(){return f}});var c=e(39428),y=e(3182),R=e(66548),g=e(11238),j=e(24480),B="epHD";function I(d,o){return F.apply(this,arguments)}function F(){return F=(0,y.Z)((0,c.Z)().mark(function d(o,n){return(0,c.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.abrupt("return",(0,g.ZP)("/api/system/dict/type/list",{params:(0,j.f)(o,n),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return N.stop()}},d)})),F.apply(this,arguments)}function P(){return u.apply(this,arguments)}function u(){return u=(0,y.Z)((0,c.Z)().mark(function d(){return(0,c.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.ZP)("/api/system/dict/type/optionselect",{method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return n.stop()}},d)})),u.apply(this,arguments)}function v(d){return(0,g.ZP)("/api/system/dict/type/".concat(d),{method:"GET"})}function E(d){return(0,g.ZP)("/api/system/dict/data/type/".concat(d),{method:"GET"})}function r(d){return m.apply(this,arguments)}function m(){return m=(0,y.Z)((0,c.Z)().mark(function d(o){return(0,c.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,g.ZP)("/api/system/dict/type",{method:"POST",data:o}));case 1:case"end":return T.stop()}},d)})),m.apply(this,arguments)}function i(d){return h.apply(this,arguments)}function h(){return h=(0,y.Z)((0,c.Z)().mark(function d(o){return(0,c.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,g.ZP)("/api/system/dict/type",{method:"PUT",data:o}));case 1:case"end":return T.stop()}},d)})),h.apply(this,arguments)}function s(d){return t.apply(this,arguments)}function t(){return t=(0,y.Z)((0,c.Z)().mark(function d(o){return(0,c.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,g.ZP)("/api/system/dict/type/".concat(o),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return T.stop()}},d)})),t.apply(this,arguments)}function f(d){return(0,R.su)("/api/system/dict/type/export",{params:d},"dict_type_".concat(new Date().getTime(),".xlsx"))}},78759:function(z,b,e){"use strict";e.d(b,{Af:function(){return I},Th:function(){return u},bL:function(){return v},_8:function(){return r},n_:function(){return i}});var c=e(39428),y=e(3182),R=e(66548),g=e(24480),j=e(11238),B="3uCI";function I(t,f){return F.apply(this,arguments)}function F(){return F=(0,y.Z)((0,c.Z)().mark(function t(f,d){return(0,c.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,j.ZP)("/api/system/menu/list",{params:(0,g.f)(f,d),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return n.stop()}},t)})),F.apply(this,arguments)}function P(t){return request("/api/system/menu/".concat(t),{method:"GET"})}function u(){return(0,j.ZP)("/api/system/menu/treeselect",{method:"GET"})}function v(t){return E.apply(this,arguments)}function E(){return E=(0,y.Z)((0,c.Z)().mark(function t(f){return(0,c.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.ZP)("/api/system/menu",{method:"POST",data:f}));case 1:case"end":return o.stop()}},t)})),E.apply(this,arguments)}function r(t){return m.apply(this,arguments)}function m(){return m=(0,y.Z)((0,c.Z)().mark(function t(f){return(0,c.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.ZP)("/api/system/menu",{method:"PUT",data:f}));case 1:case"end":return o.stop()}},t)})),m.apply(this,arguments)}function i(t){return h.apply(this,arguments)}function h(){return h=(0,y.Z)((0,c.Z)().mark(function t(f){return(0,c.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,j.ZP)("/api/system/menu/".concat(f),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return o.stop()}},t)})),h.apply(this,arguments)}function s(t){return downLoadXlsx("/api/system/menu/export",{params:t},"menu_".concat(new Date().getTime(),".xlsx"))}},16042:function(z,b,e){"use strict";e.r(b),e.d(b,{default:function(){return Ie}});var c=e(71194),y=e(50146),R=e(62350),g=e(24565),j=e(57663),B=e(71577),I=e(54029),F=e(79166),P=e(2824),u=e(39428),v=e(11849),E=e(34792),r=e(48086),m=e(3182),i=e(49101),h=e(48176),s=e(67294),t=e(43581),f=e(21349),d=e(85224),o=e(16894),n=e(94370),T=e(32157),N=e(7573),oe=e(13062),w=e(71230),M=e(89032),S=e(15746),ie=e(9715),ge=e(71257),Pe=e(952),Ee=e(71975),de=e(31199),pe=e(5966),Ze=e(86615),xe=e(90672),a=e(85893),x="LuCB",Te=function(p){var O=ge.Z.useForm(),C=(0,P.Z)(O,1),_=C[0],$=p.menuTree,l=p.menuCheckedKeys,L=(0,s.useState)(),q=(0,P.Z)(L,2),ue=q[0],X=q[1],le=p.statusOptions;(0,s.useEffect)(function(){_.resetFields(),_.setFieldsValue({roleId:p.values.roleId,roleName:p.values.roleName,roleKey:p.values.roleKey,roleSort:p.values.roleSort,dataScope:p.values.dataScope,menuCheckStrictly:p.values.menuCheckStrictly,deptCheckStrictly:p.values.deptCheckStrictly,status:p.values.status,delFlag:p.values.delFlag,createBy:p.values.createBy,createTime:p.values.createTime,updateBy:p.values.updateBy,updateTime:p.values.updateTime,remark:p.values.remark,menuIds:p.values.menuIds})},[_,p]);var G=(0,t.YB)(),V=function(){p.onCancel(),_.resetFields()},ne=function(){var ee=(0,m.Z)((0,u.Z)().mark(function J(Q){return(0,u.Z)().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:p.onSubmit((0,v.Z)((0,v.Z)({},Q),{},{menuIds:ue}));case 1:case"end":return te.stop()}},J)}));return function(Q){return ee.apply(this,arguments)}}();return(0,a.jsxs)(Ee.a,{"data-inspector-line":"64","data-inspector-column":"4","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",form:_,title:G.formatMessage({id:"system.Role.modify_info",defaultMessage:"\u7F16\u8F91\u89D2\u8272\u4FE1\u606F"}),onFinish:ne,initialValues:p.values,visible:p.visible,drawerProps:{destroyOnClose:!0,onClose:V,maskClosable:!1,keyboard:!1},_nk:"".concat(x,"11"),children:[(0,a.jsx)(w.Z,{"data-inspector-line":"80","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",gutter:[16,16],_nk:"".concat(x,"21"),children:(0,a.jsx)(S.Z,{"data-inspector-line":"81","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",span:24,order:1,_nk:"".concat(x,"31"),children:(0,a.jsx)(de.Z,{"data-inspector-line":"82","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",name:"roleId",label:G.formatMessage({id:"system.Role.role_id",defaultMessage:"\u89D2\u8272ID"}),width:"xl",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272ID",disabled:!0,hidden:!p.values.roleId,rules:[{required:!1,message:(0,a.jsx)(t._H,{"data-inspector-line":"95","data-inspector-column":"25","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",id:"\u8BF7\u8F93\u5165\u89D2\u8272ID\uFF01",defaultMessage:"\u8BF7\u8F93\u5165\u89D2\u8272ID\uFF01",_nk:"".concat(x,"51")})}],_nk:"".concat(x,"41")})})}),(0,a.jsx)(w.Z,{"data-inspector-line":"101","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",gutter:[16,16],_nk:"".concat(x,"22"),children:(0,a.jsx)(S.Z,{"data-inspector-line":"102","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",span:24,order:1,_nk:"".concat(x,"32"),children:(0,a.jsx)(pe.Z,{"data-inspector-line":"103","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",name:"roleName",label:G.formatMessage({id:"system.Role.role_name",defaultMessage:"\u89D2\u8272\u540D\u79F0"}),width:"xl",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",rules:[{required:!0,message:(0,a.jsx)(t._H,{"data-inspector-line":"115","data-inspector-column":"18","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",id:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0\uFF01",defaultMessage:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0\uFF01",_nk:"".concat(x,"52")})}],_nk:"".concat(x,"61")})})}),(0,a.jsx)(w.Z,{"data-inspector-line":"122","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",gutter:[16,16],_nk:"".concat(x,"23"),children:(0,a.jsx)(S.Z,{"data-inspector-line":"123","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",span:24,order:1,_nk:"".concat(x,"33"),children:(0,a.jsx)(pe.Z,{"data-inspector-line":"124","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",name:"roleKey",label:G.formatMessage({id:"system.Role.role_key",defaultMessage:"\u89D2\u8272\u6743\u9650\u5B57\u7B26\u4E32"}),width:"xl",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6743\u9650\u5B57\u7B26\u4E32",rules:[{required:!0,message:(0,a.jsx)(t._H,{"data-inspector-line":"136","data-inspector-column":"18","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",id:"\u8BF7\u8F93\u5165\u89D2\u8272\u6743\u9650\u5B57\u7B26\u4E32\uFF01",defaultMessage:"\u8BF7\u8F93\u5165\u89D2\u8272\u6743\u9650\u5B57\u7B26\u4E32\uFF01",_nk:"".concat(x,"53")})}],_nk:"".concat(x,"62")})})}),(0,a.jsx)(w.Z,{"data-inspector-line":"146","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",gutter:[16,16],_nk:"".concat(x,"24"),children:(0,a.jsx)(S.Z,{"data-inspector-line":"147","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",span:24,order:1,_nk:"".concat(x,"34"),children:(0,a.jsx)(de.Z,{"data-inspector-line":"148","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",name:"roleSort",label:G.formatMessage({id:"system.Role.role_sort",defaultMessage:"\u663E\u793A\u987A\u5E8F"}),width:"xl",placeholder:"\u8BF7\u8F93\u5165\u663E\u793A\u987A\u5E8F",rules:[{required:!0,message:(0,a.jsx)(t._H,{"data-inspector-line":"160","data-inspector-column":"18","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",id:"\u8BF7\u8F93\u5165\u663E\u793A\u987A\u5E8F\uFF01",defaultMessage:"\u8BF7\u8F93\u5165\u663E\u793A\u987A\u5E8F\uFF01",_nk:"".concat(x,"54")})}],_nk:"".concat(x,"42")})})}),(0,a.jsx)(w.Z,{"data-inspector-line":"167","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",gutter:[16,16],_nk:"".concat(x,"25"),children:(0,a.jsx)(S.Z,{"data-inspector-line":"168","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",span:24,order:1,_nk:"".concat(x,"35"),children:(0,a.jsx)(Ze.Z.Group,{"data-inspector-line":"169","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",valueEnum:le,name:"status",label:G.formatMessage({id:"system.Role.status",defaultMessage:"\u89D2\u8272\u72B6\u6001"}),labelCol:{span:24},width:"xl",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u72B6\u6001",rules:[{required:!0,message:(0,a.jsx)(t._H,{"data-inspector-line":"183","data-inspector-column":"18","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",id:"\u8BF7\u8F93\u5165\u89D2\u8272\u72B6\u6001\uFF01",defaultMessage:"\u8BF7\u8F93\u5165\u89D2\u8272\u72B6\u6001\uFF01",_nk:"".concat(x,"55")})}],_nk:"".concat(x,"71")})})}),(0,a.jsx)(w.Z,{"data-inspector-line":"190","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",gutter:[16,16],_nk:"".concat(x,"26"),children:(0,a.jsx)(S.Z,{"data-inspector-line":"191","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",span:24,order:1,_nk:"".concat(x,"36"),children:(0,a.jsx)(Pe.ZP.Item,{"data-inspector-line":"192","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",name:"menuIds",label:G.formatMessage({id:"system.Role.auth",defaultMessage:"\u83DC\u5355\u6743\u9650"}),_nk:"".concat(x,"72"),children:(0,a.jsx)(N.Z,{"data-inspector-line":"200","data-inspector-column":"12","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",checkable:!0,multiple:!0,checkStrictly:!0,defaultExpandAll:!1,treeData:$,defaultCheckedKeys:l,onCheck:function(J){X(J.checked)},_nk:"".concat(x,"81")})})})}),(0,a.jsx)(w.Z,{"data-inspector-line":"214","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",gutter:[16,16],_nk:"".concat(x,"27"),children:(0,a.jsx)(S.Z,{"data-inspector-line":"215","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",span:24,order:1,_nk:"".concat(x,"37"),children:(0,a.jsx)(xe.Z,{"data-inspector-line":"216","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",name:"remark",label:G.formatMessage({id:"system.Role.remark",defaultMessage:"\u5907\u6CE8"}),width:"xl",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",rules:[{required:!1,message:(0,a.jsx)(t._H,{"data-inspector-line":"227","data-inspector-column":"25","data-inspector-relative-path":"src/pages/system/role/components/edit.tsx",id:"\u8BF7\u8F93\u5165\u5907\u6CE8\uFF01",defaultMessage:"\u8BF7\u8F93\u5165\u5907\u6CE8\uFF01",_nk:"".concat(x,"56")})}],_nk:"".concat(x,"91")})})})]})},De=Te,Fe=e(52346),Me=e(78759),me=e(24480),Z="+u3W",Re=function(){var H=(0,m.Z)((0,u.Z)().mark(function p(O){var C,_;return(0,u.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=r.default.loading("\u6B63\u5728\u6DFB\u52A0"),l.prev=1,l.next=4,(0,n._d)((0,v.Z)({},O));case 4:return _=l.sent,C(),_.code===200?r.default.success("\u6DFB\u52A0\u6210\u529F"):r.default.error(_.msg),l.abrupt("return",!0);case 10:return l.prev=10,l.t0=l.catch(1),C(),r.default.error("\u6DFB\u52A0\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),l.abrupt("return",!1);case 15:case"end":return l.stop()}},p,null,[[1,10]])}));return function(O){return H.apply(this,arguments)}}(),je=function(){var H=(0,m.Z)((0,u.Z)().mark(function p(O){var C,_;return(0,u.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C=r.default.loading("\u6B63\u5728\u914D\u7F6E"),l.prev=1,l.next=4,(0,n.ul)(O);case 4:return _=l.sent,C(),_.code===200?r.default.success("\u914D\u7F6E\u6210\u529F"):r.default.error(_.msg),l.abrupt("return",!0);case 10:return l.prev=10,l.t0=l.catch(1),C(),r.default.error("\u914D\u7F6E\u5931\u8D25\u8BF7\u91CD\u8BD5\uFF01"),l.abrupt("return",!1);case 15:case"end":return l.stop()}},p,null,[[1,10]])}));return function(O){return H.apply(this,arguments)}}(),Oe=function(){var H=(0,m.Z)((0,u.Z)().mark(function p(O){var C,_;return(0,u.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(C=r.default.loading("\u6B63\u5728\u5220\u9664"),O){l.next=3;break}return l.abrupt("return",!0);case 3:return l.prev=3,l.next=6,(0,n.l5)(O.map(function(L){return L.roleId}).join(","));case 6:return _=l.sent,C(),_.code===200?r.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):r.default.error(_.msg),l.abrupt("return",!0);case 12:return l.prev=12,l.t0=l.catch(3),C(),r.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),l.abrupt("return",!1);case 17:case"end":return l.stop()}},p,null,[[3,12]])}));return function(O){return H.apply(this,arguments)}}(),Ce=function(){var H=(0,m.Z)((0,u.Z)().mark(function p(O){var C,_,$;return(0,u.Z)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(C=r.default.loading("\u6B63\u5728\u5220\u9664"),O){L.next=3;break}return L.abrupt("return",!0);case 3:return L.prev=3,_=[O.roleId],L.next=7,(0,n.l5)(_.join(","));case 7:return $=L.sent,C(),$.code===200?r.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):r.default.error($.msg),L.abrupt("return",!0);case 13:return L.prev=13,L.t0=L.catch(3),C(),r.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),L.abrupt("return",!1);case 18:case"end":return L.stop()}},p,null,[[3,13]])}));return function(O){return H.apply(this,arguments)}}(),be=function(){var H=(0,m.Z)((0,u.Z)().mark(function p(){var O;return(0,u.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return O=r.default.loading("\u6B63\u5728\u5BFC\u51FA"),_.prev=1,_.next=4,(0,n.Lp)();case 4:return O(),r.default.success("\u5BFC\u51FA\u6210\u529F"),_.abrupt("return",!0);case 9:return _.prev=9,_.t0=_.catch(1),O(),r.default.error("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),_.abrupt("return",!1);case 14:case"end":return _.stop()}},p,null,[[1,9]])}));return function(){return H.apply(this,arguments)}}(),Be=function(){var p=(0,s.useRef)(),O=(0,s.useState)(!1),C=(0,P.Z)(O,2),_=C[0],$=C[1],l=(0,s.useRef)(),L=(0,s.useState)(),q=(0,P.Z)(L,2),ue=q[0],X=q[1],le=(0,s.useState)([]),G=(0,P.Z)(le,2),V=G[0],ne=G[1],ee=(0,s.useState)([]),J=(0,P.Z)(ee,2),Q=J[0],he=J[1],te=(0,s.useState)(),fe=(0,P.Z)(te,2),Le=fe[0],ve=fe[1],Ue=(0,s.useState)([]),_e=(0,P.Z)(Ue,2),ke=_e[0],ye=_e[1],ae=(0,t.md)(),Ae=(0,t.YB)();(0,s.useEffect)(function(){(0,Fe.zP)("sys_normal_disable").then(function(K){if(K.code===200){var U={};K.data.forEach(function(D){U[D.dictValue]=D.dictLabel}),he(U)}})},[]);var we=[{title:(0,a.jsx)(t._H,{"data-inspector-line":"168","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"system.Role.role_id",defaultMessage:"\u89D2\u8272ID",_nk:"".concat(Z,"11")}),dataIndex:"roleId",valueType:"text",hideInSearch:!0},{title:(0,a.jsx)(t._H,{"data-inspector-line":"174","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"system.Role.role_name",defaultMessage:"\u89D2\u8272\u540D\u79F0",_nk:"".concat(Z,"12")}),dataIndex:"roleName",valueType:"text"},{title:(0,a.jsx)(t._H,{"data-inspector-line":"179","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"system.Role.role_key",defaultMessage:"\u89D2\u8272\u6743\u9650\u5B57\u7B26\u4E32",_nk:"".concat(Z,"13")}),dataIndex:"roleKey",valueType:"text"},{title:(0,a.jsx)(t._H,{"data-inspector-line":"184","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"system.Role.role_sort",defaultMessage:"\u663E\u793A\u987A\u5E8F",_nk:"".concat(Z,"14")}),dataIndex:"roleSort",valueType:"text",hideInSearch:!0},{title:(0,a.jsx)(t._H,{"data-inspector-line":"190","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"system.Role.status",defaultMessage:"\u89D2\u8272\u72B6\u6001",_nk:"".concat(Z,"15")}),dataIndex:"status",valueType:"select",valueEnum:Q,render:function(U,D){return(0,a.jsx)(F.Z,{"data-inspector-line":"195","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/index.tsx",status:D.status==="0"?"success":"error",text:Q[D.status],_nk:"".concat(Z,"21")})}},{title:(0,a.jsx)(t._H,{"data-inspector-line":"202","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"system.Role.create_time",defaultMessage:"\u521B\u5EFA\u65F6\u95F4",_nk:"".concat(Z,"16")}),dataIndex:"createTime",valueType:"dateRange",sorter:!0,defaultSortOrder:"descend",render:function(U,D){return(0,a.jsx)("span",{"data-inspector-line":"207","data-inspector-column":"29","data-inspector-relative-path":"src/pages/system/role/index.tsx",_nk:"".concat(Z,"31"),children:D.createTime})},search:{transform:function(U){return{"params[beginTime]":U[0],"params[endTime]":U[1]}}}},{title:(0,a.jsx)(t._H,{"data-inspector-line":"218","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"system.Role.remark",defaultMessage:"\u5907\u6CE8",_nk:"".concat(Z,"17")}),dataIndex:"remark",valueType:"textarea",hideInSearch:!0},{title:(0,a.jsx)(t._H,{"data-inspector-line":"224","data-inspector-column":"13","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C",_nk:"".concat(Z,"18")}),dataIndex:"option",valueType:"option",render:function(U,D){return[(0,a.jsx)(B.Z,{"data-inspector-line":"228","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/index.tsx",type:"link",size:"small",hidden:!ae.hasPerms("system:role:edit"),onClick:function(){(0,n.mj)(D.roleId).then(function(W){if(W.code===200){var A=(0,me.wC)(W.menus);ve(A),ye(W.checkedKeys.map(function(Y){return"".concat(Y)})),$(!0),X(D)}else r.default.warn(W.msg)})},_nk:"".concat(Z,"41"),children:(0,a.jsx)(t._H,{"data-inspector-line":"251","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"pages.searchTable.edit",defaultMessage:"\u7F16\u8F91",_nk:"".concat(Z,"19")})},"edit"),(0,a.jsx)(g.Z,{"data-inspector-line":"253","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/index.tsx",placement:"top",title:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",onConfirm:(0,m.Z)((0,u.Z)().mark(function k(){var W;return(0,u.Z)().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,Ce(D);case 2:W=Y.sent,W&&l.current&&l.current.reload();case 4:case"end":return Y.stop()}},k)})),okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",_nk:"".concat(Z,"51"),children:(0,a.jsx)(B.Z,{"data-inspector-line":"268","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/index.tsx",type:"link",size:"small",danger:!0,hidden:!ae.hasPerms("system:role:remove"),_nk:"".concat(Z,"42"),children:"\u5220\u9664"},"remove")},"remove")]}}];return(0,a.jsxs)(f.Z,{"data-inspector-line":"283","data-inspector-column":"4","data-inspector-relative-path":"src/pages/system/role/index.tsx",_nk:"".concat(Z,"61"),children:[(0,a.jsx)(o.ZP,{"data-inspector-line":"284","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/index.tsx",headerTitle:Ae.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u4FE1\u606F"}),actionRef:l,formRef:p,rowKey:"roleId",search:{labelWidth:"auto"},toolBarRender:function(){return[(0,a.jsxs)(B.Z,{"data-inspector-line":"297","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/index.tsx",type:"text",hidden:!ae.hasPerms("system:role:add"),onClick:(0,m.Z)((0,u.Z)().mark(function U(){return(0,u.Z)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:(0,Me.Th)().then(function(W){if(W.code===200){var A=(0,me.wC)(W.data);ve(A),ye([]),$(!0),X(void 0)}else r.default.warn(W.msg)});case 1:case"end":return k.stop()}},U)})),_nk:"".concat(Z,"43"),children:[(0,a.jsx)(i.Z,{"data-inspector-line":"315","data-inspector-column":"12","data-inspector-relative-path":"src/pages/system/role/index.tsx",_nk:"".concat(Z,"81")})," ",(0,a.jsx)(t._H,{"data-inspector-line":"315","data-inspector-column":"29","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"pages.searchTable.new",defaultMessage:"\u65B0\u5EFA",_nk:"".concat(Z,"1a")})]},"add"),(0,a.jsxs)(B.Z,{"data-inspector-line":"317","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/index.tsx",type:"text",hidden:!ae.hasPerms("system:role:export"),onClick:(0,m.Z)((0,u.Z)().mark(function U(){return(0,u.Z)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:be();case 1:case"end":return k.stop()}},U)})),_nk:"".concat(Z,"44"),children:[(0,a.jsx)(h.Z,{"data-inspector-line":"325","data-inspector-column":"12","data-inspector-relative-path":"src/pages/system/role/index.tsx",_nk:"".concat(Z,"91")})," ",(0,a.jsx)(t._H,{"data-inspector-line":"326","data-inspector-column":"12","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"pages.searchTable.export",defaultMessage:"\u5BFC\u51FA",_nk:"".concat(Z,"1b")})]},"export")]},request:function(U,D){return(0,n.JV)((0,v.Z)({},U),D)},columns:we,rowSelection:{onChange:function(U,D){ne(D)}},_nk:"".concat(Z,"71")},"roleList"),(V==null?void 0:V.length)>0&&(0,a.jsx)(d.Z,{"data-inspector-line":"338","data-inspector-column":"8","data-inspector-relative-path":"src/pages/system/role/index.tsx",extra:(0,a.jsxs)("div",{"data-inspector-line":"340","data-inspector-column":"12","data-inspector-relative-path":"src/pages/system/role/index.tsx",_nk:"".concat(Z,"b1"),children:[(0,a.jsx)(t._H,{"data-inspector-line":"341","data-inspector-column":"14","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"pages.searchTable.chosen",defaultMessage:"\u5DF2\u9009\u62E9",_nk:"".concat(Z,"1c")}),(0,a.jsx)("a",{"data-inspector-line":"342","data-inspector-column":"14","data-inspector-relative-path":"src/pages/system/role/index.tsx",style:{fontWeight:600},_nk:"".concat(Z,"c1"),children:V.length}),(0,a.jsx)(t._H,{"data-inspector-line":"343","data-inspector-column":"14","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"pages.searchTable.item",defaultMessage:"\u9879",_nk:"".concat(Z,"1d")})]}),_nk:"".concat(Z,"a1"),children:(0,a.jsx)(B.Z,{"data-inspector-line":"347","data-inspector-column":"10","data-inspector-relative-path":"src/pages/system/role/index.tsx",danger:!0,hidden:!ae.hasPerms("system:role:remove"),onClick:(0,m.Z)((0,u.Z)().mark(function K(){return(0,u.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:y.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){var k=(0,m.Z)((0,u.Z)().mark(function A(){var Y,se,ce;return(0,u.Z)().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,Oe(V);case 2:Y=re.sent,Y&&(ne([]),(se=l.current)===null||se===void 0||(ce=se.reloadAndRest)===null||ce===void 0||ce.call(se));case 4:case"end":return re.stop()}},A)}));function W(){return k.apply(this,arguments)}return W}()});case 1:case"end":return D.stop()}},K)})),_nk:"".concat(Z,"45"),children:(0,a.jsx)(t._H,{"data-inspector-line":"367","data-inspector-column":"12","data-inspector-relative-path":"src/pages/system/role/index.tsx",id:"pages.searchTable.batchDeletion",defaultMessage:"\u6279\u91CF\u5220\u9664",_nk:"".concat(Z,"1e")})},"batchRemove")}),(0,a.jsx)(De,{"data-inspector-line":"371","data-inspector-column":"6","data-inspector-relative-path":"src/pages/system/role/index.tsx",onSubmit:function(){var K=(0,m.Z)((0,u.Z)().mark(function U(D){var k;return(0,u.Z)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(k=!1,!D.roleId){A.next=7;break}return A.next=4,je((0,v.Z)({},D));case 4:k=A.sent,A.next=10;break;case 7:return A.next=9,Re((0,v.Z)({},D));case 9:k=A.sent;case 10:k&&($(!1),X(void 0),l.current&&l.current.reload());case 11:case"end":return A.stop()}},U)}));return function(U){return K.apply(this,arguments)}}(),onCancel:function(){$(!1),X(void 0)},visible:_,values:ue||{},menuTree:Le||[],menuCheckedKeys:ke||[],statusOptions:Q,_nk:"".concat(Z,"d1")})]})},Ie=Be},94370:function(z,b,e){"use strict";e.d(b,{JV:function(){return I},_d:function(){return u},ul:function(){return E},l5:function(){return m},Lp:function(){return h},mj:function(){return t}});var c=e(39428),y=e(3182),R=e(66548),g=e(11238),j=e(24480),B="3mDo";function I(f,d){return F.apply(this,arguments)}function F(){return F=(0,y.Z)((0,c.Z)().mark(function f(d,o){return(0,c.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",(0,g.ZP)("/api/system/role/list",{params:(0,j.f)(d,o),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return T.stop()}},f)})),F.apply(this,arguments)}function P(f){return request("/api/system/role/".concat(f),{method:"GET"})}function u(f){return v.apply(this,arguments)}function v(){return v=(0,y.Z)((0,c.Z)().mark(function f(d){return(0,c.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.ZP)("/api/system/role",{method:"POST",data:d}));case 1:case"end":return n.stop()}},f)})),v.apply(this,arguments)}function E(f){return r.apply(this,arguments)}function r(){return r=(0,y.Z)((0,c.Z)().mark(function f(d){return(0,c.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.ZP)("/api/system/role",{method:"PUT",data:d}));case 1:case"end":return n.stop()}},f)})),r.apply(this,arguments)}function m(f){return i.apply(this,arguments)}function i(){return i=(0,y.Z)((0,c.Z)().mark(function f(d){return(0,c.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.ZP)("/api/system/role/".concat(d),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return n.stop()}},f)})),i.apply(this,arguments)}function h(f){return s.apply(this,arguments)}function s(){return s=(0,y.Z)((0,c.Z)().mark(function f(d){return(0,c.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,R.su)("/api/system/role/export",{params:d},"role_".concat(new Date().getTime(),".xlsx")));case 1:case"end":return n.stop()}},f)})),s.apply(this,arguments)}function t(f){return(0,g.ZP)("/api/system/menu/roleMenuTreeselect/".concat(f),{method:"get"})}},66548:function(z,b,e){"use strict";e.d(b,{p6:function(){return I},su:function(){return P}});var c=e(39428),y=e(11849),R=e(3182),g=e(11238),j="iJKO",B={xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",zip:"application/zip"};function I(v){(0,g.ZP)(v,{method:"GET",responseType:"blob",getResponse:!0}).then(function(E){F(E,B.zip)})}function F(v,E){var r=document.createElement("a"),m=new Blob([v.data],{type:E}),i=new RegExp("filename=([^;]+\\.[^\\.;]+);*"),h=decodeURI(v.response.headers.get("content-disposition")),s=i.exec(h),t=s?s[1]:"file";t=t.replace(/"/g,""),r.style.display="none",r.href=URL.createObjectURL(m),r.setAttribute("download",t),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href),document.body.removeChild(r)}function P(v,E,r){return u.apply(this,arguments)}function u(){return u=(0,R.Z)((0,c.Z)().mark(function v(E,r,m){return(0,c.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,g.ZP)(E,(0,y.Z)((0,y.Z)({},r),{},{method:"POST",responseType:"blob"})).then(function(s){var t=document.createElement("a"),f=s;t.style.display="none",t.href=URL.createObjectURL(f),t.setAttribute("download",m),document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}));case 1:case"end":return h.stop()}},v)})),u.apply(this,arguments)}},24480:function(z,b,e){"use strict";e.d(b,{C2:function(){return P},wC:function(){return v},f:function(){return r},JG:function(){return m}});var c=e(17673),y="JlWx",R="/user/login",g=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,j=function(h){return g.test(h)},B=function(){return window.location.hostname==="preview.pro.ant.design"},I=function(){var h="production";return h==="development"?!0:B()};function F(i){return i.replace(/^\s+|\s+$/gm,"")}function P(i,h,s,t,f,d){var o={id:h||"id",name:s||"name",parentId:t||"parentId",parentName:f||"parentName",childrenList:d||"children"},n={},T={},N=[];i.forEach(function(w){var M=w,S=M[o.parentId];n[S]==null&&(n[S]=[]),M.key=M[o.id],M.title=M[o.name],M.value=M[o.id],T[M[o.id]]=M,n[S].push(M)}),i.forEach(function(w){var M=w,S=M[o.parentId];T[S]==null&&(M[o.parentName]="",N.push(M))}),N.forEach(function(w){oe(w)});function oe(w){var M=w;n[M[o.id]]!==null&&(M[o.childrenList]=n[M[o.id]]),M[o.childrenList]&&M[o.childrenList].forEach(function(S){var ie=S;ie[o.parentName]=M[o.name],oe(ie)})}return N}var u=function(){return parse(window.location.href.split("?")[1])};function v(i){var h=i.map(function(s){var t={id:s.id,title:s.label,key:"".concat(s.id),value:s.id};return s.children&&(t.children=v(s.children)),t});return h}function E(i){window.location.href="/api/common/download?fileName=".concat(encodeURI(i),"&delete=",!0)}function r(i,h){for(var s in h)Object.prototype.hasOwnProperty.call(h,s)&&(i.orderByColumn=s,i.isAsc=h[s]==="descend"?"descending":"ascending");return i}function m(i,h){var s=document.createElement("textarea");s.readOnly=!0,s.style.position="absolute",s.style.left="-9999px",s.value=i,document.body.appendChild(s),s.select(),s.setSelectionRange(0,s.value.length),document.execCommand("Copy"),document.body.removeChild(s),h&&Object.prototype.toString.call(h)==="[object Function]"&&h()}}}]);
