(self.webpackChunkruoyi_react=self.webpackChunkruoyi_react||[]).push([[1875],{77885:function(z,I,e){"use strict";e.r(I),e.d(I,{default:function(){return me}});var O=e(11849),S=e(57663),T=e(71577),B=e(54029),P=e(79166),A=e(2824),G=e(34792),E=e(48086),y=e(3182),H=e(71194),w=e(50146),D=e(94043),n=e.n(D),r=e(57119),f=e(72850),x=e(48176),m=e(67294),c=e(86353),t=e(43686),o=e(66548),R=e(11238),g=e(24480),C="VV+s";function N(u,v){return j.apply(this,arguments)}function j(){return j=(0,y.Z)(n().mark(function u(v,p){return n().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,R.ZP)("/api/monitor/logininfor/list",{params:(0,g.f)(v,p),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return l.stop()}},u)})),j.apply(this,arguments)}function d(u){return request("/api/monitor/logininfor/".concat(u),{method:"GET"})}function U(u){return F.apply(this,arguments)}function F(){return F=_asyncToGenerator(_regeneratorRuntime.mark(function u(v){return _regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/monitor/logininfor",{method:"POST",data:v}));case 1:case"end":return s.stop()}},u)})),F.apply(this,arguments)}function _e(u){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime.mark(function u(v){return _regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/monitor/logininfor",{method:"PUT",data:v}));case 1:case"end":return s.stop()}},u)})),V.apply(this,arguments)}function re(u){return J.apply(this,arguments)}function J(){return J=(0,y.Z)(n().mark(function u(v){return n().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,R.ZP)("/api/monitor/logininfor/".concat(v),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return s.stop()}},u)})),J.apply(this,arguments)}function ae(u){return(0,o.su)("/api/monitor/logininfor/export",{params:u},"login_infor_".concat(new Date().getTime(),".xlsx"))}function ie(){return Q.apply(this,arguments)}function Q(){return Q=(0,y.Z)(n().mark(function u(){return n().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,R.ZP)("/api/monitor/logininfor/clean",{method:"DELETE"}));case 1:case"end":return p.stop()}},u)})),Q.apply(this,arguments)}var oe=e(52346),se=e(21349),ce=e(85224),a=e(85893),i="aVwr",ue=w.Z.confirm,le=function(){var u=(0,y.Z)(n().mark(function v(p){var s,l;return n().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(s=E.default.loading("\u6B63\u5728\u5220\u9664"),p){_.next=3;break}return _.abrupt("return",!0);case 3:return _.prev=3,_.next=6,re(p.map(function($){return $.infoId}).join(","));case 6:return l=_.sent,s(),l.code===200?E.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):E.default.error(l.msg),_.abrupt("return",!0);case 12:return _.prev=12,_.t0=_.catch(3),s(),E.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),_.abrupt("return",!1);case 17:case"end":return _.stop()}},v,null,[[3,12]])}));return function(p){return u.apply(this,arguments)}}(),de=function(){var u=(0,y.Z)(n().mark(function v(){return n().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:ue({title:"\u662F\u5426\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u767B\u5F55\u65E5\u5FD7\u6570\u636E\u9879?",icon:(0,a.jsx)(r.Z,{"data-inspector-line":"44","data-inspector-column":"10","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",_nk:"".concat(i,"11")}),content:"\u8BF7\u8C28\u614E\u64CD\u4F5C",onOk:function(){return(0,y.Z)(n().mark(function k(){var _,$;return n().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return _=E.default.loading("\u6B63\u5728\u5220\u9664"),b.prev=1,b.next=4,ie();case 4:return $=b.sent,_(),$.code===200?E.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):E.default.error($.msg),b.abrupt("return",!0);case 10:return b.prev=10,b.t0=b.catch(1),_(),E.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),b.abrupt("return",!1);case 15:case"end":return b.stop()}},k,null,[[1,10]])}))()},onCancel:function(){}});case 1:case"end":return s.stop()}},v)}));return function(){return u.apply(this,arguments)}}(),pe=function(){var u=(0,y.Z)(n().mark(function v(){var p;return n().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=E.default.loading("\u6B63\u5728\u5BFC\u51FA"),l.prev=1,l.next=4,ae();case 4:return E.default.success("\u5BFC\u51FA\u6210\u529F"),p(),l.abrupt("return",!0);case 9:return l.prev=9,l.t0=l.catch(1),p(),E.default.error("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),l.abrupt("return",!1);case 14:case"end":return l.stop()}},v,null,[[1,9]])}));return function(){return u.apply(this,arguments)}}(),fe=function(){var v=(0,m.useRef)(),p=(0,m.useRef)(),s=(0,m.useState)([]),l=(0,A.Z)(s,2),k=l[0],_=l[1],$=(0,m.useState)([]),X=(0,A.Z)($,2),b=X[0],he=X[1],q=(0,c.md)(),ge=(0,c.YB)();(0,m.useEffect)(function(){(0,oe.zP)("sys_common_status").then(function(Z){if(Z.code===200){var L={};Z.data.forEach(function(h){L[h.dictValue]=h.dictLabel}),he(L)}})},[]);var ve=[{title:(0,a.jsx)(c._H,{"data-inspector-line":"113","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.info_id",defaultMessage:"\u8BBF\u95EEID",_nk:"".concat(i,"21")}),dataIndex:"infoId",valueType:"text",hideInSearch:!0},{title:(0,a.jsx)(c._H,{"data-inspector-line":"119","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.user_name",defaultMessage:"\u7528\u6237\u8D26\u53F7",_nk:"".concat(i,"22")}),dataIndex:"userName",valueType:"text"},{title:(0,a.jsx)(c._H,{"data-inspector-line":"124","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.ipaddr",defaultMessage:"\u767B\u5F55IP\u5730\u5740",_nk:"".concat(i,"23")}),dataIndex:"ipaddr",valueType:"text",copyable:!0},{title:(0,a.jsx)(c._H,{"data-inspector-line":"130","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.login_location",defaultMessage:"\u767B\u5F55\u5730\u70B9",_nk:"".concat(i,"24")}),dataIndex:"loginLocation",valueType:"text",hideInSearch:!0},{title:(0,a.jsx)(c._H,{"data-inspector-line":"136","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.browser",defaultMessage:"\u6D4F\u89C8\u5668\u7C7B\u578B",_nk:"".concat(i,"25")}),dataIndex:"browser",valueType:"text",hideInSearch:!0},{title:(0,a.jsx)(c._H,{"data-inspector-line":"142","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.os",defaultMessage:"\u64CD\u4F5C\u7CFB\u7EDF",_nk:"".concat(i,"26")}),dataIndex:"os",valueType:"text",hideInSearch:!0},{title:(0,a.jsx)(c._H,{"data-inspector-line":"148","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.status",defaultMessage:"\u767B\u5F55\u72B6\u6001",_nk:"".concat(i,"27")}),dataIndex:"status",valueType:"select",valueEnum:b,render:function(L,h){return(0,a.jsx)(P.Z,{"data-inspector-line":"153","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",status:h.status==="0"?"success":"error",text:b[h.status],_nk:"".concat(i,"31")})}},{title:(0,a.jsx)(c._H,{"data-inspector-line":"160","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.msg",defaultMessage:"\u63D0\u793A\u6D88\u606F",_nk:"".concat(i,"28")}),dataIndex:"msg",valueType:"text",hideInSearch:!0},{title:(0,a.jsx)(c._H,{"data-inspector-line":"166","data-inspector-column":"13","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"monitor.Logininfor.login_time",defaultMessage:"\u8BBF\u95EE\u65F6\u95F4",_nk:"".concat(i,"29")}),dataIndex:"loginTime",valueType:"dateRange",sorter:!0,defaultSortOrder:"descend",render:function(L,h){return(0,a.jsx)("span",{"data-inspector-line":"171","data-inspector-column":"29","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",_nk:"".concat(i,"41"),children:h.loginTime})},search:{transform:function(L){return{"params[beginTime]":L[0],"params[endTime]":L[1]}}}}];return(0,a.jsxs)(se.Z,{"data-inspector-line":"184","data-inspector-column":"4","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",_nk:"".concat(i,"51"),children:[(0,a.jsx)("div",{"data-inspector-line":"185","data-inspector-column":"6","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",style:{width:"100%",float:"right"},_nk:"".concat(i,"61"),children:(0,a.jsx)(t.ZP,{"data-inspector-line":"186","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",headerTitle:ge.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u4FE1\u606F"}),actionRef:p,formRef:v,rowKey:"infoId",search:{labelWidth:"auto"},toolBarRender:function(){return[(0,a.jsxs)(T.Z,{"data-inspector-line":"199","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",type:"text",danger:!0,hidden:!q.hasPerms("monitor:logininfor:remove"),onClick:(0,y.Z)(n().mark(function L(){var h,M;return n().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:de(),(h=p.current)===null||h===void 0||(M=h.reloadAndRest)===null||M===void 0||M.call(h);case 2:case"end":return K.stop()}},L)})),_nk:"".concat(i,"81"),children:[(0,a.jsx)(f.Z,{"data-inspector-line":"209","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",_nk:"".concat(i,"91")})," ",(0,a.jsx)(c._H,{"data-inspector-line":"210","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"pages.searchTable.clear",defaultMessage:"\u6E05\u7A7A",_nk:"".concat(i,"2a")})]},"clear"),(0,a.jsxs)(T.Z,{"data-inspector-line":"212","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",type:"text",hidden:!q.hasPerms("monitor:logininfor:export"),onClick:(0,y.Z)(n().mark(function L(){return n().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:pe();case 1:case"end":return M.stop()}},L)})),_nk:"".concat(i,"82"),children:[(0,a.jsx)(x.Z,{"data-inspector-line":"220","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",_nk:"".concat(i,"a1")})," ",(0,a.jsx)(c._H,{"data-inspector-line":"221","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"pages.searchTable.export",defaultMessage:"\u5BFC\u51FA",_nk:"".concat(i,"2b")})]},"export")]},request:function(L,h){return N((0,O.Z)({},L),h)},columns:ve,rowSelection:{onChange:function(L,h){_(h)}},_nk:"".concat(i,"71")},"logininforList")}),(k==null?void 0:k.length)>0&&(0,a.jsx)(ce.Z,{"data-inspector-line":"234","data-inspector-column":"8","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",extra:(0,a.jsxs)("div",{"data-inspector-line":"236","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",_nk:"".concat(i,"62"),children:[(0,a.jsx)(c._H,{"data-inspector-line":"237","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"pages.searchTable.chosen",defaultMessage:"\u5DF2\u9009\u62E9",_nk:"".concat(i,"2c")}),(0,a.jsx)("a",{"data-inspector-line":"238","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",style:{fontWeight:600},_nk:"".concat(i,"c1"),children:k.length}),(0,a.jsx)(c._H,{"data-inspector-line":"239","data-inspector-column":"14","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"pages.searchTable.item",defaultMessage:"\u9879",_nk:"".concat(i,"2d")})]}),_nk:"".concat(i,"b1"),children:(0,a.jsx)(T.Z,{"data-inspector-line":"243","data-inspector-column":"10","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",danger:!0,hidden:!q.hasPerms("monitor:logininfor:remove"),onClick:(0,y.Z)(n().mark(function Z(){return n().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:w.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){var M=(0,y.Z)(n().mark(function K(){var te,Y,ee;return n().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,le(k);case 2:te=W.sent,te&&(_([]),(Y=p.current)===null||Y===void 0||(ee=Y.reloadAndRest)===null||ee===void 0||ee.call(Y));case 4:case"end":return W.stop()}},K)}));function ne(){return M.apply(this,arguments)}return ne}()});case 1:case"end":return h.stop()}},Z)})),_nk:"".concat(i,"83"),children:(0,a.jsx)(c._H,{"data-inspector-line":"263","data-inspector-column":"12","data-inspector-relative-path":"src/pages/monitor/logininfor/index.tsx",id:"pages.searchTable.batchDeletion",defaultMessage:"\u6279\u91CF\u5220\u9664",_nk:"".concat(i,"2e")})},"batchRemove")})]})},me=fe},52346:function(z,I,e){"use strict";e.d(I,{jK:function(){return E},Vd:function(){return H},zP:function(){return w},oH:function(){return D},a7:function(){return r},sF:function(){return x},n2:function(){return c}});var O=e(3182),S=e(94043),T=e.n(S),B=e(66548),P=e(11238),A=e(24480),G="epHD";function E(t,o){return y.apply(this,arguments)}function y(){return y=(0,O.Z)(T().mark(function t(o,R){return T().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",(0,P.ZP)("/api/system/dict/type/list",{params:(0,A.f)(o,R),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return C.stop()}},t)})),y.apply(this,arguments)}function H(t){return(0,P.ZP)("/api/system/dict/type/".concat(t),{method:"GET"})}function w(t){return(0,P.ZP)("/api/system/dict/data/type/".concat(t),{method:"GET"})}function D(t){return n.apply(this,arguments)}function n(){return n=(0,O.Z)(T().mark(function t(o){return T().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,P.ZP)("/api/system/dict/type",{method:"POST",data:o}));case 1:case"end":return g.stop()}},t)})),n.apply(this,arguments)}function r(t){return f.apply(this,arguments)}function f(){return f=(0,O.Z)(T().mark(function t(o){return T().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,P.ZP)("/api/system/dict/type",{method:"PUT",data:o}));case 1:case"end":return g.stop()}},t)})),f.apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return m=(0,O.Z)(T().mark(function t(o){return T().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,P.ZP)("/api/system/dict/type/".concat(o),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return g.stop()}},t)})),m.apply(this,arguments)}function c(t){return(0,B.su)("/api/system/dict/type/export",{params:t},"dict_type_".concat(new Date().getTime(),".xlsx"))}},66548:function(z,I,e){"use strict";e.d(I,{su:function(){return H}});var O=e(11849),S=e(3182),T=e(94043),B=e.n(T),P=e(11238),A="iJKO",G={xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",zip:"application/zip"};function E(D){request(D,{method:"GET",responseType:"blob",getResponse:!0}).then(function(n){y(n,G.zip)})}function y(D,n){var r=document.createElement("a"),f=new Blob([D.data],{type:n}),x=new RegExp("filename=([^;]+\\.[^\\.;]+);*"),m=decodeURI(D.response.headers.get("content-disposition")),c=x.exec(m),t=c?c[1]:"file";t=t.replace(/"/g,""),r.style.display="none",r.href=URL.createObjectURL(f),r.setAttribute("download",t),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href),document.body.removeChild(r)}function H(D,n,r){return w.apply(this,arguments)}function w(){return w=(0,S.Z)(B().mark(function D(n,r,f){return B().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,P.ZP)(n,(0,O.Z)((0,O.Z)({},r),{},{method:"POST",responseType:"blob"})).then(function(c){var t=document.createElement("a"),o=c;t.style.display="none",t.href=URL.createObjectURL(o),t.setAttribute("download",f),document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}));case 1:case"end":return m.stop()}},D)})),w.apply(this,arguments)}},24480:function(z,I,e){"use strict";e.d(I,{C2:function(){return y},wC:function(){return w},f:function(){return n}});var O=e(17673),S="JlWx",T="/user/login",B=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,P=function(f){return B.test(f)},A=function(){return window.location.hostname==="preview.pro.ant.design"},G=function(){var f="production";return f==="development"?!0:A()};function E(r){return r.replace(/^\s+|\s+$/gm,"")}function y(r,f,x,m,c,t){var o={id:f||"id",name:x||"name",parentId:m||"parentId",parentName:c||"parentName",childrenList:t||"children"},R={},g={},C=[];r.forEach(function(j){var d=j,U=d[o.parentId];R[U]==null&&(R[U]=[]),d.key=d[o.id],d.title=d[o.name],d.value=d[o.id],g[d[o.id]]=d,R[U].push(d)}),r.forEach(function(j){var d=j,U=d[o.parentId];g[U]==null&&(d[o.parentName]="",C.push(d))}),C.forEach(function(j){N(j)});function N(j){var d=j;R[d[o.id]]!==null&&(d[o.childrenList]=R[d[o.id]]),d[o.childrenList]&&d[o.childrenList].forEach(function(U){var F=U;F[o.parentName]=d[o.name],N(F)})}return C}var H=function(){return parse(window.location.href.split("?")[1])};function w(r){var f=r.map(function(x){var m={id:x.id,title:x.label,key:"".concat(x.id),value:x.id};return x.children&&(m.children=w(x.children)),m});return f}function D(r){window.location.href="/api/common/download?fileName=".concat(encodeURI(r),"&delete=",!0)}function n(r,f){for(var x in f)Object.prototype.hasOwnProperty.call(f,x)&&(r.orderByColumn=x,r.isAsc=f[x]==="descend"?"descending":"ascending");return r}}}]);