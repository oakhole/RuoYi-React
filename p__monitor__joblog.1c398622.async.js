(self.webpackChunkruoyi_react=self.webpackChunkruoyi_react||[]).push([[4070],{82920:function(Te,V,s){"use strict";s.r(V),s.d(V,{default:function(){return fe}});var ee=s(11849),Ee=s(71194),O=s(50146),Fe=s(57663),C=s(71577),w=s(2824),Ce=s(34792),h=s(48086),v=s(3182),te=s(94043),n=s.n(te),z=s(57119),ae=s(73171),$=s(49101),y=s(67294),i=s(43581),ne=s(19374),re=s(66548),S=s(11238);function oe(l){return H.apply(this,arguments)}function H(){return H=(0,v.Z)(n().mark(function l(t){var c;return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c=new URLSearchParams(t).toString(),r.abrupt("return",(0,S.ZP)("/api/monitor/jobLog/list",{data:t,method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 2:case"end":return r.stop()}},l)})),H.apply(this,arguments)}function we(l){return request("/api/monitor/jobLog/".concat(l),{method:"GET"})}function Je(l){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime.mark(function l(t){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/monitor/jobLog",{method:"POST",data:t}));case 1:case"end":return a.stop()}},l)})),D.apply(this,arguments)}function Me(l){return B.apply(this,arguments)}function B(){return B=_asyncToGenerator(_regeneratorRuntime.mark(function l(t){return _regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/monitor/jobLog",{method:"PUT",data:t}));case 1:case"end":return a.stop()}},l)})),B.apply(this,arguments)}function N(l){return A.apply(this,arguments)}function A(){return A=(0,v.Z)(n().mark(function l(t){return n().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,S.ZP)("/api/monitor/jobLog/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return a.stop()}},l)})),A.apply(this,arguments)}function se(l){return(0,re.su)("/api/monitor/jobLog/export",{params:l},"job_log_".concat(new Date().getTime(),".xlsx"))}function ie(){return(0,S.ZP)("/api/monitor/jobLog/clean",{method:"DELETE"})}var Oe=s(98858),L=s(4914),Re=s(9715),le=s(86835),e=s(85893),ce=function(t){var c=le.Z.useForm(),a=(0,w.Z)(c,1),r=a[0],o=t.values,u=t.statusOptions,m=t.jobGroupOptions;(0,y.useEffect)(function(){r.resetFields(),r.setFieldsValue({jobLogId:t.values.jobLogId,jobName:t.values.jobName,jobGroup:t.values.jobGroup,invokeTarget:t.values.invokeTarget,jobMessage:t.values.jobMessage,status:t.values.status,exceptionInfo:t.values.exceptionInfo,createTime:t.values.createTime})},[r,t]);var k=(0,i.YB)(),G=function(){r.submit()},I=function(){t.onCancel(),r.resetFields()};return(0,e.jsx)(O.Z,{"data-inspector-line":"45","data-inspector-column":"4","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",width:640,title:k.formatMessage({id:"monitor.JobLog.title",defaultMessage:"\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6\u65E5\u5FD7"}),visible:t.visible,destroyOnClose:!0,onOk:G,onCancel:I,children:(0,e.jsxs)(L.Z,{"data-inspector-line":"56","data-inspector-column":"6","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",column:24,children:[(0,e.jsx)(L.Z.Item,{"data-inspector-line":"57","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(i._H,{"data-inspector-line":"59","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_id",defaultMessage:"\u4EFB\u52A1\u7F16\u53F7"}),children:o.jobLogId}),(0,e.jsx)(L.Z.Item,{"data-inspector-line":"63","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(i._H,{"data-inspector-line":"65","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.create_time",defaultMessage:"\u6267\u884C\u65F6\u95F4"}),children:o.createTime}),(0,e.jsx)(L.Z.Item,{"data-inspector-line":"69","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(i._H,{"data-inspector-line":"71","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_name",defaultMessage:"\u4EFB\u52A1\u540D\u79F0"}),children:o.jobName}),(0,e.jsx)(L.Z.Item,{"data-inspector-line":"75","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(i._H,{"data-inspector-line":"77","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_group",defaultMessage:"\u4EFB\u52A1\u7EC4\u540D"}),children:m[o.jobGroup?o.jobGroup:"DEFAULT"]}),(0,e.jsx)(L.Z.Item,{"data-inspector-line":"81","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:24,label:(0,e.jsx)(i._H,{"data-inspector-line":"83","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.invoke_target",defaultMessage:"\u8C03\u7528\u76EE\u6807"}),children:o.invokeTarget}),(0,e.jsx)(L.Z.Item,{"data-inspector-line":"87","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:24,label:(0,e.jsx)(i._H,{"data-inspector-line":"89","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_message",defaultMessage:"\u65E5\u5FD7\u4FE1\u606F"}),children:o.jobMessage}),(0,e.jsx)(L.Z.Item,{"data-inspector-line":"93","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:24,label:(0,e.jsx)(i._H,{"data-inspector-line":"95","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.exception_info",defaultMessage:"\u5F02\u5E38\u4FE1\u606F"}),children:o.exceptionInfo}),(0,e.jsx)(L.Z.Item,{"data-inspector-line":"99","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(i._H,{"data-inspector-line":"101","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.status",defaultMessage:"\u6267\u884C\u72B6\u6001"}),children:u[o.status?o.status:0]})]})})},ue=ce,W=s(52346),de=s(21349),pe=s(85224),Y=function(){var l=(0,v.Z)(n().mark(function t(c){var a,r;return n().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(a=h.default.loading("\u6B63\u5728\u5220\u9664"),c){u.next=3;break}return u.abrupt("return",!0);case 3:return u.prev=3,u.next=6,N(c.map(function(m){return m.jobLogId}).join(","));case 6:return r=u.sent,a(),r.code===200?h.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):h.default.error(r.msg),u.abrupt("return",!0);case 12:return u.prev=12,u.t0=u.catch(3),a(),h.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),u.abrupt("return",!1);case 17:case"end":return u.stop()}},t,null,[[3,12]])}));return function(c){return l.apply(this,arguments)}}(),me=function(){var l=(0,v.Z)(n().mark(function t(){var c,a;return n().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=h.default.loading("\u6B63\u5728\u5220\u9664"),o.prev=1,o.next=4,ie();case 4:return a=o.sent,c(),a.code===200?h.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):h.default.error(a.msg),o.abrupt("return",!0);case 10:return o.prev=10,o.t0=o.catch(1),c(),h.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),o.abrupt("return",!1);case 15:case"end":return o.stop()}},t,null,[[1,10]])}));return function(){return l.apply(this,arguments)}}(),ge=function(){var l=(0,v.Z)(n().mark(function t(c){var a,r,o;return n().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(a=h.default.loading("\u6B63\u5728\u5220\u9664"),c){m.next=3;break}return m.abrupt("return",!0);case 3:return m.prev=3,r=[c.jobLogId],m.next=7,N(r.join(","));case 7:return o=m.sent,a(),o.code===200?h.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):h.default.error(o.msg),m.abrupt("return",!0);case 13:return m.prev=13,m.t0=m.catch(3),a(),h.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),m.abrupt("return",!1);case 18:case"end":return m.stop()}},t,null,[[3,13]])}));return function(c){return l.apply(this,arguments)}}(),ve=function(){var l=(0,v.Z)(n().mark(function t(){var c;return n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return c=h.default.loading("\u6B63\u5728\u5BFC\u51FA"),r.prev=1,r.next=4,se();case 4:return c(),h.default.success("\u5BFC\u51FA\u6210\u529F"),r.abrupt("return",!0);case 9:return r.prev=9,r.t0=r.catch(1),c(),h.default.error("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),r.abrupt("return",!1);case 14:case"end":return r.stop()}},t,null,[[1,9]])}));return function(){return l.apply(this,arguments)}}(),he=function(){var t=(0,y.useRef)(),c=(0,y.useState)(!1),a=(0,w.Z)(c,2),r=a[0],o=a[1],u=(0,y.useRef)(),m=(0,y.useState)(),k=(0,w.Z)(m,2),G=k[0],I=k[1],P=(0,y.useState)([]),K=(0,w.Z)(P,2),T=K[0],U=K[1],je=(0,y.useState)([]),Q=(0,w.Z)(je,2),X=Q[0],be=Q[1],xe=(0,y.useState)([]),q=(0,w.Z)(xe,2),_=q[0],Ze=q[1],J=(0,i.md)(),ye=(0,i.YB)();(0,y.useEffect)(function(){(0,W.zP)("sys_job_status").then(function(j){if(j.code===200){var g={};j.data.forEach(function(p){g[p.dictValue]=p.dictLabel}),be(g)}}),(0,W.zP)("sys_job_group").then(function(j){if(j.code===200){var g={};j.data.forEach(function(p){g[p.dictValue]=p.dictLabel}),Ze(g)}})},[]);var Le=[{title:(0,e.jsx)(i._H,{"data-inspector-line":"143","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_log_id",defaultMessage:"\u4EFB\u52A1\u65E5\u5FD7ID"}),dataIndex:"jobLogId",valueType:"text",hideInSearch:!0},{title:(0,e.jsx)(i._H,{"data-inspector-line":"149","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_name",defaultMessage:"\u4EFB\u52A1\u540D\u79F0"}),dataIndex:"jobName",valueType:"text"},{title:(0,e.jsx)(i._H,{"data-inspector-line":"154","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_group",defaultMessage:"\u4EFB\u52A1\u7EC4\u540D"}),dataIndex:"jobGroup",valueType:"text",valueEnum:_},{title:(0,e.jsx)(i._H,{"data-inspector-line":"160","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.invoke_target",defaultMessage:"\u8C03\u7528\u76EE\u6807\u5B57\u7B26\u4E32"}),dataIndex:"invokeTarget",valueType:"textarea",hideInSearch:!0},{title:(0,e.jsx)(i._H,{"data-inspector-line":"166","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_message",defaultMessage:"\u65E5\u5FD7\u4FE1\u606F"}),dataIndex:"jobMessage",valueType:"textarea",hideInSearch:!0},{title:(0,e.jsx)(i._H,{"data-inspector-line":"172","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.status",defaultMessage:"\u6267\u884C\u72B6\u6001"}),dataIndex:"status",valueType:"select",valueEnum:X},{title:(0,e.jsx)(i._H,{"data-inspector-line":"178","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",width:"220px",valueType:"option",render:function(g,p){return[(0,e.jsx)(C.Z,{"data-inspector-line":"183","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"link",size:"small",hidden:!J.hasPerms("monitor:log:list"),onClick:function(){o(!0),I(p)},children:"\u8BE6\u7EC6"},"detail"),(0,e.jsx)(C.Z,{"data-inspector-line":"195","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"link",size:"small",danger:!0,hidden:!J.hasPerms("monitor:log:remove"),onClick:(0,v.Z)(n().mark(function d(){return n().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:O.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){var b=(0,v.Z)(n().mark(function Z(){var F;return n().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,ge(p);case 2:F=R.sent,F&&u.current&&u.current.reload();case 4:case"end":return R.stop()}},Z)}));function f(){return b.apply(this,arguments)}return f}()});case 1:case"end":return E.stop()}},d)})),children:"\u5220\u9664"},"batchRemove")]}}];return(0,e.jsxs)(de.Z,{"data-inspector-line":"225","data-inspector-column":"4","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",children:[(0,e.jsx)("div",{"data-inspector-line":"226","data-inspector-column":"6","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",style:{width:"100%",float:"right"},children:(0,e.jsx)(ne.ZP,{"data-inspector-line":"227","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",headerTitle:ye.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u4FE1\u606F"}),actionRef:u,formRef:t,rowKey:"jobLogId",search:{labelWidth:"auto"},toolBarRender:function(){return[(0,e.jsxs)(C.Z,{"data-inspector-line":"240","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"primary",hidden:(T==null?void 0:T.length)===0||!J.hasPerms("monitor:log:remove"),onClick:(0,v.Z)(n().mark(function g(){return n().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:O.Z.confirm({title:"\u662F\u5426\u786E\u8BA4\u5220\u9664\u6240\u9009\u6570\u636E\u9879?",icon:(0,e.jsx)(z.Z,{"data-inspector-line":"247","data-inspector-column":"24","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx"}),content:"\u8BF7\u8C28\u614E\u64CD\u4F5C",onOk:function(){return(0,v.Z)(n().mark(function E(){var b,f,Z;return n().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Y(T);case 2:b=x.sent,b&&(U([]),(f=u.current)===null||f===void 0||(Z=f.reloadAndRest)===null||Z===void 0||Z.call(f));case 4:case"end":return x.stop()}},E)}))()},onCancel:function(){}});case 1:case"end":return d.stop()}},g)})),children:[(0,e.jsx)(ae.Z,{"data-inspector-line":"260","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx"}),(0,e.jsx)(i._H,{"data-inspector-line":"261","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.delete",defaultMessage:"\u5220\u9664"})]},"remove"),(0,e.jsxs)(C.Z,{"data-inspector-line":"263","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"primary",hidden:!J.hasPerms("monitor:operlog:remove"),onClick:(0,v.Z)(n().mark(function g(){return n().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:O.Z.confirm({title:"\u662F\u5426\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u767B\u5F55\u65E5\u5FD7\u6570\u636E\u9879?",icon:(0,e.jsx)(z.Z,{"data-inspector-line":"270","data-inspector-column":"24","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx"}),content:"\u8BF7\u8C28\u614E\u64CD\u4F5C",onOk:function(){return(0,v.Z)(n().mark(function E(){var b,f;return n().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:me(),(b=u.current)===null||b===void 0||(f=b.reloadAndRest)===null||f===void 0||f.call(b);case 2:case"end":return F.stop()}},E)}))()},onCancel:function(){}});case 1:case"end":return d.stop()}},g)})),children:[(0,e.jsx)($.Z,{"data-inspector-line":"280","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx"}),(0,e.jsx)(i._H,{"data-inspector-line":"281","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.clear",defaultMessage:"\u6E05\u7A7A"})]},"clear"),(0,e.jsxs)(C.Z,{"data-inspector-line":"283","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"primary",hidden:!J.hasPerms("monitor:log:export"),onClick:(0,v.Z)(n().mark(function g(){return n().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:ve();case 1:case"end":return d.stop()}},g)})),children:[(0,e.jsx)($.Z,{"data-inspector-line":"291","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx"}),(0,e.jsx)(i._H,{"data-inspector-line":"292","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.export",defaultMessage:"\u5BFC\u51FA"})]},"export"),(0,e.jsxs)(C.Z,{"data-inspector-line":"294","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"primary",onClick:(0,v.Z)(n().mark(function g(){return n().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:i.m8.goBack();case 1:case"end":return d.stop()}},g)})),children:[(0,e.jsx)($.Z,{"data-inspector-line":"301","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx"}),(0,e.jsx)(i._H,{"data-inspector-line":"302","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.goback",defaultMessage:"\u8FD4\u56DE"})]},"goback")]},request:function(g){return oe((0,ee.Z)({},g)).then(function(p){var d={data:p.rows,total:p.total,success:!0};return d})},columns:Le,rowSelection:{onChange:function(g,p){U(p)}}},"jobLogList")}),(T==null?void 0:T.length)>0&&(0,e.jsx)(pe.Z,{"data-inspector-line":"324","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",extra:(0,e.jsxs)("div",{"data-inspector-line":"326","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",children:[(0,e.jsx)(i._H,{"data-inspector-line":"327","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.chosen",defaultMessage:"\u5DF2\u9009\u62E9"}),(0,e.jsx)("a",{"data-inspector-line":"328","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",style:{fontWeight:600},children:T.length}),(0,e.jsx)(i._H,{"data-inspector-line":"329","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,e.jsx)(C.Z,{"data-inspector-line":"333","data-inspector-column":"10","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",hidden:!J.hasPerms("monitor:log:remove"),onClick:(0,v.Z)(n().mark(function j(){return n().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:O.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){var d=(0,v.Z)(n().mark(function E(){var b,f,Z;return n().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Y(T);case 2:b=x.sent,b&&(U([]),(f=u.current)===null||f===void 0||(Z=f.reloadAndRest)===null||Z===void 0||Z.call(f));case 4:case"end":return x.stop()}},E)}));function M(){return d.apply(this,arguments)}return M}()});case 1:case"end":return p.stop()}},j)})),children:(0,e.jsx)(i._H,{"data-inspector-line":"352","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.batchDeletion",defaultMessage:"\u6279\u91CF\u5220\u9664"})},"remove")}),(0,e.jsx)(ue,{"data-inspector-line":"356","data-inspector-column":"6","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",onCancel:function(){o(!1),I(void 0)},visible:r,values:G||{},statusOptions:X,jobGroupOptions:_})]})},fe=he}}]);
