(self.webpackChunkruoyi_react=self.webpackChunkruoyi_react||[]).push([[4070],{82920:function(ye,z,n){"use strict";n.r(z),n.d(z,{default:function(){return xe}});var _=n(11849),Ce=n(71194),R=n(50146),Ie=n(57663),I=n(71577),Je=n(54029),ee=n(79166),L=n(2824),i=n(39428),Me=n(34792),f=n(48086),b=n(3182),te=n(57119),ae=n(72850),ne=n(48176),Z=n(67294),c=n(43581),oe=n(16894),re=n(66548),se=n(24480),B=n(11238),Oe="Ca+I";function ie(l,t){return H.apply(this,arguments)}function H(){return H=(0,b.Z)((0,i.Z)().mark(function l(t,u){return(0,i.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,B.ZP)("/api/monitor/jobLog/list",{params:(0,se.f)(t,u),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return o.stop()}},l)})),H.apply(this,arguments)}function Re(l){return request("/api/monitor/jobLog/".concat(l),{method:"GET"})}function we(l){return A.apply(this,arguments)}function A(){return A=_asyncToGenerator(_regeneratorRuntime().mark(function l(t){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/monitor/jobLog",{method:"POST",data:t}));case 1:case"end":return a.stop()}},l)})),A.apply(this,arguments)}function Se(l){return D.apply(this,arguments)}function D(){return D=_asyncToGenerator(_regeneratorRuntime().mark(function l(t){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/monitor/jobLog",{method:"PUT",data:t}));case 1:case"end":return a.stop()}},l)})),D.apply(this,arguments)}function N(l){return G.apply(this,arguments)}function G(){return G=(0,b.Z)((0,i.Z)().mark(function l(t){return(0,i.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,B.ZP)("/api/monitor/jobLog/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return a.stop()}},l)})),G.apply(this,arguments)}function ce(l){return(0,re.su)("/api/monitor/jobLog/export",{params:l},"job_log_".concat(new Date().getTime(),".xlsx"))}function le(){return(0,B.ZP)("/api/monitor/jobLog/clean",{method:"DELETE"})}var $e=n(98858),k=n(4914),Be=n(9715),ue=n(71257),e=n(85893),v="53I9",de=function(t){var u=ue.Z.useForm(),a=(0,L.Z)(u,1),o=a[0],r=t.values,p=t.statusOptions,m=t.jobGroupOptions;(0,Z.useEffect)(function(){o.resetFields(),o.setFieldsValue({jobLogId:t.values.jobLogId,jobName:t.values.jobName,jobGroup:t.values.jobGroup,invokeTarget:t.values.invokeTarget,jobMessage:t.values.jobMessage,status:t.values.status,exceptionInfo:t.values.exceptionInfo,createTime:t.values.createTime})},[o,t]);var w=(0,c.YB)(),P=function(){o.submit()},S=function(){t.onCancel(),o.resetFields()};return(0,e.jsx)(R.Z,{"data-inspector-line":"45","data-inspector-column":"4","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",width:640,title:w.formatMessage({id:"monitor.JobLog.title",defaultMessage:"\u5B9A\u65F6\u4EFB\u52A1\u8C03\u5EA6\u65E5\u5FD7"}),visible:t.visible,destroyOnClose:!0,onOk:P,onCancel:S,_nk:"".concat(v,"11"),children:(0,e.jsxs)(k.Z,{"data-inspector-line":"56","data-inspector-column":"6","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",column:24,_nk:"".concat(v,"21"),children:[(0,e.jsx)(k.Z.Item,{"data-inspector-line":"57","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(c._H,{"data-inspector-line":"59","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_id",defaultMessage:"\u4EFB\u52A1\u7F16\u53F7",_nk:"".concat(v,"41")}),_nk:"".concat(v,"31"),children:r.jobLogId}),(0,e.jsx)(k.Z.Item,{"data-inspector-line":"63","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(c._H,{"data-inspector-line":"65","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.create_time",defaultMessage:"\u6267\u884C\u65F6\u95F4",_nk:"".concat(v,"42")}),_nk:"".concat(v,"32"),children:r.createTime}),(0,e.jsx)(k.Z.Item,{"data-inspector-line":"69","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(c._H,{"data-inspector-line":"71","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_name",defaultMessage:"\u4EFB\u52A1\u540D\u79F0",_nk:"".concat(v,"43")}),_nk:"".concat(v,"33"),children:r.jobName}),(0,e.jsx)(k.Z.Item,{"data-inspector-line":"75","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(c._H,{"data-inspector-line":"77","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_group",defaultMessage:"\u4EFB\u52A1\u7EC4\u540D",_nk:"".concat(v,"44")}),_nk:"".concat(v,"34"),children:m[r.jobGroup?r.jobGroup:"DEFAULT"]}),(0,e.jsx)(k.Z.Item,{"data-inspector-line":"81","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:24,label:(0,e.jsx)(c._H,{"data-inspector-line":"83","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.invoke_target",defaultMessage:"\u8C03\u7528\u76EE\u6807",_nk:"".concat(v,"45")}),_nk:"".concat(v,"35"),children:r.invokeTarget}),(0,e.jsx)(k.Z.Item,{"data-inspector-line":"87","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:24,label:(0,e.jsx)(c._H,{"data-inspector-line":"89","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.job_message",defaultMessage:"\u65E5\u5FD7\u4FE1\u606F",_nk:"".concat(v,"46")}),_nk:"".concat(v,"36"),children:r.jobMessage}),(0,e.jsx)(k.Z.Item,{"data-inspector-line":"93","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:24,label:(0,e.jsx)(c._H,{"data-inspector-line":"95","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.exception_info",defaultMessage:"\u5F02\u5E38\u4FE1\u606F",_nk:"".concat(v,"47")}),_nk:"".concat(v,"37"),children:r.exceptionInfo}),(0,e.jsx)(k.Z.Item,{"data-inspector-line":"99","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",span:12,label:(0,e.jsx)(c._H,{"data-inspector-line":"101","data-inspector-column":"17","data-inspector-relative-path":"src/pages/monitor/joblog/components/detail.tsx",id:"monitor.Job.status",defaultMessage:"\u6267\u884C\u72B6\u6001",_nk:"".concat(v,"48")}),_nk:"".concat(v,"38"),children:p[r.status?r.status:0]})]})})},pe=de,W=n(52346),me=n(78009),ge=n(85224),s="Dofl",ve=function(){var l=(0,b.Z)((0,i.Z)().mark(function t(u){var a,o;return(0,i.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(a=f.default.loading("\u6B63\u5728\u5220\u9664"),u){p.next=3;break}return p.abrupt("return",!0);case 3:return p.prev=3,p.next=6,N(u.map(function(m){return m.jobLogId}).join(","));case 6:return o=p.sent,a(),o.code===200?f.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):f.default.error(o.msg),p.abrupt("return",!0);case 12:return p.prev=12,p.t0=p.catch(3),a(),f.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),p.abrupt("return",!1);case 17:case"end":return p.stop()}},t,null,[[3,12]])}));return function(u){return l.apply(this,arguments)}}(),he=function(){var l=(0,b.Z)((0,i.Z)().mark(function t(){var u,a;return(0,i.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=f.default.loading("\u6B63\u5728\u5220\u9664"),r.prev=1,r.next=4,le();case 4:return a=r.sent,u(),a.code===200?f.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):f.default.error(a.msg),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(1),u(),f.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),r.abrupt("return",!1);case 15:case"end":return r.stop()}},t,null,[[1,10]])}));return function(){return l.apply(this,arguments)}}(),fe=function(){var l=(0,b.Z)((0,i.Z)().mark(function t(u){var a,o,r;return(0,i.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(a=f.default.loading("\u6B63\u5728\u5220\u9664"),u){m.next=3;break}return m.abrupt("return",!0);case 3:return m.prev=3,o=[u.jobLogId],m.next=7,N(o.join(","));case 7:return r=m.sent,a(),r.code===200?f.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):f.default.error(r.msg),m.abrupt("return",!0);case 13:return m.prev=13,m.t0=m.catch(3),a(),f.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),m.abrupt("return",!1);case 18:case"end":return m.stop()}},t,null,[[3,13]])}));return function(u){return l.apply(this,arguments)}}(),be=function(){var l=(0,b.Z)((0,i.Z)().mark(function t(){var u;return(0,i.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=f.default.loading("\u6B63\u5728\u5BFC\u51FA"),o.prev=1,o.next=4,ce();case 4:return u(),f.default.success("\u5BFC\u51FA\u6210\u529F"),o.abrupt("return",!0);case 9:return o.prev=9,o.t0=o.catch(1),u(),f.default.error("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),o.abrupt("return",!1);case 14:case"end":return o.stop()}},t,null,[[1,9]])}));return function(){return l.apply(this,arguments)}}(),je=function(){var t=(0,Z.useRef)(),u=(0,Z.useState)(!1),a=(0,L.Z)(u,2),o=a[0],r=a[1],p=(0,Z.useRef)(),m=(0,Z.useState)(),w=(0,L.Z)(m,2),P=w[0],S=w[1],U=(0,Z.useState)([]),Y=(0,L.Z)(U,2),J=Y[0],K=Y[1],Ze=(0,Z.useState)([]),Q=(0,L.Z)(Ze,2),V=Q[0],ke=Q[1],Te=(0,Z.useState)([]),X=(0,L.Z)(Te,2),q=X[0],Fe=X[1],M=(0,c.md)(),Ee=(0,c.YB)();(0,Z.useEffect)(function(){(0,W.zP)("sys_job_status").then(function(h){if(h.code===200){var g={};h.data.forEach(function(d){g[d.dictValue]=d.dictLabel}),ke(g)}}),(0,W.zP)("sys_job_group").then(function(h){if(h.code===200){var g={};h.data.forEach(function(d){g[d.dictValue]=d.dictLabel}),Fe(g)}})},[]);var Le=[{title:(0,e.jsx)(c._H,{"data-inspector-line":"137","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_log_id",defaultMessage:"\u4EFB\u52A1\u65E5\u5FD7ID",_nk:"".concat(s,"11")}),dataIndex:"jobLogId",valueType:"text",hideInSearch:!0},{title:(0,e.jsx)(c._H,{"data-inspector-line":"143","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_name",defaultMessage:"\u4EFB\u52A1\u540D\u79F0",_nk:"".concat(s,"12")}),dataIndex:"jobName",valueType:"text"},{title:(0,e.jsx)(c._H,{"data-inspector-line":"148","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_group",defaultMessage:"\u4EFB\u52A1\u7EC4\u540D",_nk:"".concat(s,"13")}),dataIndex:"jobGroup",valueType:"text",valueEnum:q},{title:(0,e.jsx)(c._H,{"data-inspector-line":"154","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.invoke_target",defaultMessage:"\u8C03\u7528\u76EE\u6807\u5B57\u7B26\u4E32",_nk:"".concat(s,"14")}),dataIndex:"invokeTarget",valueType:"textarea",hideInSearch:!0,ellipsis:!0},{title:(0,e.jsx)(c._H,{"data-inspector-line":"161","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.job_message",defaultMessage:"\u65E5\u5FD7\u4FE1\u606F",_nk:"".concat(s,"15")}),dataIndex:"jobMessage",valueType:"textarea",hideInSearch:!0},{title:(0,e.jsx)(c._H,{"data-inspector-line":"167","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"monitor.JobLog.status",defaultMessage:"\u6267\u884C\u72B6\u6001",_nk:"".concat(s,"16")}),dataIndex:"status",valueType:"select",valueEnum:V,render:function(g,d){return(0,e.jsx)(ee.Z,{"data-inspector-line":"172","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",status:d.status==="0"?"success":"error",text:V[d.status],_nk:"".concat(s,"21")})}},{title:(0,e.jsx)(c._H,{"data-inspector-line":"179","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"system.User.createTime",defaultMessage:"\u6267\u884C\u65F6\u95F4",_nk:"".concat(s,"17")}),dataIndex:"createTime",valueType:"dateRange",sorter:!0,defaultSortOrder:"descend",render:function(g,d){return(0,e.jsx)("span",{"data-inspector-line":"184","data-inspector-column":"29","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",_nk:"".concat(s,"31"),children:d.createTime})},search:{transform:function(g){return{"params[beginTime]":g[0],"params[endTime]":g[1]}}}},{title:(0,e.jsx)(c._H,{"data-inspector-line":"195","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C",_nk:"".concat(s,"18")}),dataIndex:"option",width:"220px",valueType:"option",render:function(g,d){return[(0,e.jsx)(I.Z,{"data-inspector-line":"200","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"link",size:"small",hidden:!M.hasPerms("monitor:log:list"),onClick:function(){r(!0),S(d)},_nk:"".concat(s,"41"),children:"\u8BE6\u7EC6"},"detail"),(0,e.jsx)(I.Z,{"data-inspector-line":"212","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"link",size:"small",danger:!0,hidden:!M.hasPerms("monitor:log:remove"),onClick:(0,b.Z)((0,i.Z)().mark(function j(){return(0,i.Z)().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:R.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){var T=(0,b.Z)((0,i.Z)().mark(function y(){var E;return(0,i.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,fe(d);case 2:E=O.sent,E&&p.current&&p.current.reload();case 4:case"end":return O.stop()}},y)}));function x(){return T.apply(this,arguments)}return x}()});case 1:case"end":return F.stop()}},j)})),_nk:"".concat(s,"42"),children:"\u5220\u9664"},"batchRemove")]}}];return(0,e.jsxs)(me.ZP,{"data-inspector-line":"242","data-inspector-column":"4","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",breadcrumb:void 0,onBack:function(){return c.m8.goBack()},title:"\u5B9A\u65F6\u4EFB\u52A1",subTitle:"\u8C03\u5EA6\u65E5\u5FD7",_nk:"".concat(s,"51"),children:[(0,e.jsx)(oe.ZP,{"data-inspector-line":"248","data-inspector-column":"6","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",headerTitle:Ee.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u4FE1\u606F"}),actionRef:p,formRef:t,rowKey:"jobLogId",search:{labelWidth:"auto"},toolBarRender:function(){return[(0,e.jsxs)(I.Z,{"data-inspector-line":"261","data-inspector-column":"10","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"text",danger:!0,hidden:!M.hasPerms("monitor:operlog:remove"),onClick:(0,b.Z)((0,i.Z)().mark(function g(){return(0,i.Z)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:R.Z.confirm({title:"\u662F\u5426\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u767B\u5F55\u65E5\u5FD7\u6570\u636E\u9879?",icon:(0,e.jsx)(te.Z,{"data-inspector-line":"269","data-inspector-column":"22","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",_nk:"".concat(s,"71")}),content:"\u8BF7\u8C28\u614E\u64CD\u4F5C",onOk:function(){return(0,b.Z)((0,i.Z)().mark(function F(){var T,x;return(0,i.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:he(),(T=p.current)===null||T===void 0||(x=T.reloadAndRest)===null||x===void 0||x.call(T);case 2:case"end":return E.stop()}},F)}))()},onCancel:function(){}});case 1:case"end":return j.stop()}},g)})),_nk:"".concat(s,"43"),children:[(0,e.jsx)(ae.Z,{"data-inspector-line":"279","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",_nk:"".concat(s,"81")})," ",(0,e.jsx)(c._H,{"data-inspector-line":"280","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.clear",defaultMessage:"\u6E05\u7A7A",_nk:"".concat(s,"19")})]},"clear"),(0,e.jsxs)(I.Z,{"data-inspector-line":"282","data-inspector-column":"10","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",type:"text",hidden:!M.hasPerms("monitor:log:export"),onClick:(0,b.Z)((0,i.Z)().mark(function g(){return(0,i.Z)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:be();case 1:case"end":return j.stop()}},g)})),_nk:"".concat(s,"44"),children:[(0,e.jsx)(ne.Z,{"data-inspector-line":"290","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",_nk:"".concat(s,"91")})," ",(0,e.jsx)(c._H,{"data-inspector-line":"291","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.export",defaultMessage:"\u5BFC\u51FA",_nk:"".concat(s,"1a")})]},"export")]},request:function(g,d){return ie((0,_.Z)({},g),d)},columns:Le,rowSelection:{onChange:function(g,d){K(d)}},_nk:"".concat(s,"61")},"jobLogList"),(J==null?void 0:J.length)>0&&(0,e.jsx)(ge.Z,{"data-inspector-line":"303","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",extra:(0,e.jsxs)("div",{"data-inspector-line":"305","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",_nk:"".concat(s,"b1"),children:[(0,e.jsx)(c._H,{"data-inspector-line":"306","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.chosen",defaultMessage:"\u5DF2\u9009\u62E9",_nk:"".concat(s,"1b")}),(0,e.jsx)("a",{"data-inspector-line":"307","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",style:{fontWeight:600},_nk:"".concat(s,"c1"),children:J.length}),(0,e.jsx)(c._H,{"data-inspector-line":"308","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.item",defaultMessage:"\u9879",_nk:"".concat(s,"1c")})]}),_nk:"".concat(s,"a1"),children:(0,e.jsx)(I.Z,{"data-inspector-line":"312","data-inspector-column":"10","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",danger:!0,hidden:!M.hasPerms("monitor:log:remove"),onClick:(0,b.Z)((0,i.Z)().mark(function h(){return(0,i.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:R.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){var j=(0,b.Z)((0,i.Z)().mark(function F(){var T,x,y;return(0,i.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,ve(J);case 2:T=C.sent,T&&(K([]),(x=p.current)===null||x===void 0||(y=x.reloadAndRest)===null||y===void 0||y.call(x));case 4:case"end":return C.stop()}},F)}));function $(){return j.apply(this,arguments)}return $}()});case 1:case"end":return d.stop()}},h)})),_nk:"".concat(s,"45"),children:(0,e.jsx)(c._H,{"data-inspector-line":"332","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",id:"pages.searchTable.batchDeletion",defaultMessage:"\u6279\u91CF\u5220\u9664",_nk:"".concat(s,"1d")})},"batchRemove")}),(0,e.jsx)(pe,{"data-inspector-line":"336","data-inspector-column":"6","data-inspector-relative-path":"src/pages/monitor/joblog/index.tsx",onCancel:function(){r(!1),S(void 0)},visible:o,values:P||{},statusOptions:V,jobGroupOptions:q,_nk:"".concat(s,"d1")})]})},xe=je}}]);