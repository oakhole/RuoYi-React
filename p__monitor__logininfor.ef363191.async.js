(self.webpackChunkruoyi_react=self.webpackChunkruoyi_react||[]).push([[1875],{85224:function(Q,x,e){"use strict";var b=e(22122),U=e(28991),y=e(84305),A=e(75901),O=e(81253),u=e(67294),T=e(94184),B=e.n(T),F=e(97435),j=e(56264),r=e.n(j),P=e(64335),a=["children","className","extra","style","renderContent"],c=function(n){var Z=n.children,t=n.className,i=n.extra,L=n.style,h=n.renderContent,R=(0,O.Z)(n,a),k=(0,u.useContext)(A.ZP.ConfigContext),$=k.getPrefixCls,o=n.prefixCls||$("pro"),w="".concat(o,"-footer-bar"),l=(0,u.useContext)(P.Z),X=(0,u.useMemo)(function(){var K=l.hasSiderMenu,ee=l.isMobile,G=l.siderWidth;if(!!K)return G?ee?"100%":"calc(100% - ".concat(G,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),N=u.createElement(u.Fragment,null,u.createElement("div",{className:"".concat(w,"-left")},i),u.createElement("div",{className:"".concat(w,"-right")},Z));return(0,u.useEffect)(function(){return!l||!(l==null?void 0:l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var K;l==null||(K=l.setHasFooterToolbar)===null||K===void 0||K.call(l,!1)})},[]),u.createElement("div",(0,b.Z)({className:B()(t,"".concat(w)),style:(0,U.Z)({width:X},L)},(0,F.Z)(R,["prefixCls"])),h?h((0,U.Z)((0,U.Z)((0,U.Z)({},n),l),{},{leftWidth:X}),N):N)};x.Z=c},56264:function(){},77885:function(Q,x,e){"use strict";e.r(x),e.d(x,{default:function(){return ce}});var b=e(11849),U=e(57663),y=e(71577),A=e(2824),O=e(34792),u=e(48086),T=e(3182),B=e(71194),F=e(50146),j=e(94043),r=e.n(j),P=e(57119),a=e(73171),c=e(49101),f=e(67294),n=e(43581),Z=e(19374),t=e(66548),i=e(11238),L=e(24480);function h(m,E){return R.apply(this,arguments)}function R(){return R=(0,T.Z)(r().mark(function m(E,v){return r().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,i.ZP)("/api/monitor/logininfor/list",{params:(0,L.f)(E,v),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return p.stop()}},m)})),R.apply(this,arguments)}function k(m){return request("/api/monitor/logininfor/".concat(m),{method:"GET"})}function $(m){return o.apply(this,arguments)}function o(){return o=_asyncToGenerator(_regeneratorRuntime.mark(function m(E){return _regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",request("/api/monitor/logininfor",{method:"POST",data:E}));case 1:case"end":return d.stop()}},m)})),o.apply(this,arguments)}function w(m){return l.apply(this,arguments)}function l(){return l=_asyncToGenerator(_regeneratorRuntime.mark(function m(E){return _regeneratorRuntime.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",request("/api/monitor/logininfor",{method:"PUT",data:E}));case 1:case"end":return d.stop()}},m)})),l.apply(this,arguments)}function X(m){return N.apply(this,arguments)}function N(){return N=(0,T.Z)(r().mark(function m(E){return r().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,i.ZP)("/api/monitor/logininfor/".concat(E),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return d.stop()}},m)})),N.apply(this,arguments)}function K(m){return(0,t.su)("/api/monitor/logininfor/export",{params:m},"login_infor_".concat(new Date().getTime(),".xlsx"))}function ee(){return G.apply(this,arguments)}function G(){return G=(0,T.Z)(r().mark(function m(){return r().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,i.ZP)("/api/monitor/logininfor/clean",{method:"DELETE"}));case 1:case"end":return v.stop()}},m)})),G.apply(this,arguments)}var ae=e(52346),ie=e(21349),se=e(85224),s=e(85893),oe=F.Z.confirm,te=function(){var m=(0,T.Z)(r().mark(function E(v){var d,p;return r().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(d=u.default.loading("\u6B63\u5728\u5220\u9664"),v){g.next=3;break}return g.abrupt("return",!0);case 3:return g.prev=3,g.next=6,X(v.map(function(H){return H.infoId}).join(","));case 6:return p=g.sent,d(),p.code===200?u.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):u.default.error(p.msg),g.abrupt("return",!0);case 12:return g.prev=12,g.t0=g.catch(3),d(),u.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),g.abrupt("return",!1);case 17:case"end":return g.stop()}},E,null,[[3,12]])}));return function(v){return m.apply(this,arguments)}}(),ue=function(){var m=(0,T.Z)(r().mark(function E(){return r().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:oe({title:"\u662F\u5426\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u767B\u5F55\u65E5\u5FD7\u6570\u636E\u9879?",icon:(0,s.jsx)(P.Z,{}),content:"\u8BF7\u8C28\u614E\u64CD\u4F5C",onOk:function(){return(0,T.Z)(r().mark(function I(){var g,H;return r().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return g=u.default.loading("\u6B63\u5728\u5220\u9664"),C.prev=1,C.next=4,ee();case 4:return H=C.sent,g(),H.code===200?u.default.success("\u5220\u9664\u6210\u529F\uFF0C\u5373\u5C06\u5237\u65B0"):u.default.error(H.msg),C.abrupt("return",!0);case 10:return C.prev=10,C.t0=C.catch(1),g(),u.default.error("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),C.abrupt("return",!1);case 15:case"end":return C.stop()}},I,null,[[1,10]])}))()},onCancel:function(){}});case 1:case"end":return d.stop()}},E)}));return function(){return m.apply(this,arguments)}}(),le=function(){var m=(0,T.Z)(r().mark(function E(){var v;return r().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return v=u.default.loading("\u6B63\u5728\u5BFC\u51FA"),p.prev=1,p.next=4,K();case 4:return u.default.success("\u5BFC\u51FA\u6210\u529F"),v(),p.abrupt("return",!0);case 9:return p.prev=9,p.t0=p.catch(1),v(),u.default.error("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"),p.abrupt("return",!1);case 14:case"end":return p.stop()}},E,null,[[1,9]])}));return function(){return m.apply(this,arguments)}}(),de=function(){var E=(0,f.useRef)(),v=(0,f.useRef)(),d=(0,f.useState)([]),p=(0,A.Z)(d,2),I=p[0],g=p[1],H=(0,f.useState)([]),ne=(0,A.Z)(H,2),C=ne[0],fe=ne[1],J=(0,n.md)(),me=(0,n.YB)();(0,f.useEffect)(function(){(0,ae.zP)("sys_yes_no").then(function(W){if(W.code===200){var D={};W.data.forEach(function(_){D[_.dictValue]=_.dictLabel}),fe(D)}})},[]);var pe=[{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.info_id",defaultMessage:"\u8BBF\u95EEID"}),dataIndex:"infoId",valueType:"text",hideInSearch:!0},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.user_name",defaultMessage:"\u7528\u6237\u8D26\u53F7"}),dataIndex:"userName",valueType:"text"},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.ipaddr",defaultMessage:"\u767B\u5F55IP\u5730\u5740"}),dataIndex:"ipaddr",valueType:"text"},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.login_location",defaultMessage:"\u767B\u5F55\u5730\u70B9"}),dataIndex:"loginLocation",valueType:"text",hideInSearch:!0},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.browser",defaultMessage:"\u6D4F\u89C8\u5668\u7C7B\u578B"}),dataIndex:"browser",valueType:"text",hideInSearch:!0},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.os",defaultMessage:"\u64CD\u4F5C\u7CFB\u7EDF"}),dataIndex:"os",valueType:"text",hideInSearch:!0},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.status",defaultMessage:"\u767B\u5F55\u72B6\u6001"}),dataIndex:"status",valueType:"select",valueEnum:C,hideInSearch:!0},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.msg",defaultMessage:"\u63D0\u793A\u6D88\u606F"}),dataIndex:"msg",valueType:"text",hideInSearch:!0},{title:(0,s.jsx)(n._H,{id:"monitor.Logininfor.login_time",defaultMessage:"\u8BBF\u95EE\u65F6\u95F4"}),dataIndex:"loginTime",valueType:"dateRange",render:function(D,_){return(0,s.jsx)("span",{children:_.loginTime})},search:{transform:function(D){return{"params[beginTime]":D[0],"params[endTime]":D[1]}}}}];return(0,s.jsxs)(ie.Z,{children:[(0,s.jsx)("div",{style:{width:"100%",float:"right"},children:(0,s.jsx)(Z.ZP,{headerTitle:me.formatMessage({id:"pages.searchTable.title",defaultMessage:"\u4FE1\u606F"}),actionRef:v,formRef:E,rowKey:"infoId",search:{labelWidth:"auto"},toolBarRender:function(){return[(0,s.jsxs)(y.Z,{type:"primary",hidden:(I==null?void 0:I.length)===0||!J.hasPerms("monitor:logininfor:remove"),onClick:(0,T.Z)(r().mark(function D(){var _,M,Y;return r().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,te(I);case 2:_=S.sent,_&&(g([]),(M=v.current)===null||M===void 0||(Y=M.reloadAndRest)===null||Y===void 0||Y.call(M));case 4:case"end":return S.stop()}},D)})),children:[(0,s.jsx)(a.Z,{}),(0,s.jsx)(n._H,{id:"pages.searchTable.delete",defaultMessage:"\u5220\u9664"})]},"remove"),(0,s.jsxs)(y.Z,{type:"primary",hidden:!J.hasPerms("monitor:logininfor:remove"),onClick:(0,T.Z)(r().mark(function D(){var _,M;return r().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:ue(),(_=v.current)===null||_===void 0||(M=_.reloadAndRest)===null||M===void 0||M.call(_);case 2:case"end":return z.stop()}},D)})),children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)(n._H,{id:"pages.searchTable.clear",defaultMessage:"\u6E05\u7A7A"})]},"clear"),(0,s.jsxs)(y.Z,{type:"primary",hidden:!J.hasPerms("monitor:logininfor:export"),onClick:(0,T.Z)(r().mark(function D(){return r().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:le();case 1:case"end":return M.stop()}},D)})),children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)(n._H,{id:"pages.searchTable.export",defaultMessage:"\u5BFC\u51FA"})]},"export")]},request:function(D,_){return h((0,b.Z)({},D),_)},columns:pe,rowSelection:{onChange:function(D,_){g(_)}}},"logininforList")}),(I==null?void 0:I.length)>0&&(0,s.jsx)(se.Z,{extra:(0,s.jsxs)("div",{children:[(0,s.jsx)(n._H,{id:"pages.searchTable.chosen",defaultMessage:"\u5DF2\u9009\u62E9"}),(0,s.jsx)("a",{style:{fontWeight:600},children:I.length}),(0,s.jsx)(n._H,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,s.jsx)(y.Z,{hidden:!J.hasPerms("monitor:logininfor:remove"),onClick:(0,T.Z)(r().mark(function W(){return r().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:F.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u8BE5\u9879\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk:function(){var M=(0,T.Z)(r().mark(function z(){var S,q,re;return r().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,te(I);case 2:S=V.sent,S&&(g([]),(q=v.current)===null||q===void 0||(re=q.reloadAndRest)===null||re===void 0||re.call(q));case 4:case"end":return V.stop()}},z)}));function Y(){return M.apply(this,arguments)}return Y}()});case 1:case"end":return _.stop()}},W)})),children:(0,s.jsx)(n._H,{id:"pages.searchTable.batchDeletion",defaultMessage:"\u6279\u91CF\u5220\u9664"})},"remove")})]})},ce=de},52346:function(Q,x,e){"use strict";e.d(x,{jK:function(){return T},Vd:function(){return F},zP:function(){return j},oH:function(){return r},a7:function(){return a},sF:function(){return f},n2:function(){return Z}});var b=e(3182),U=e(94043),y=e.n(U),A=e(66548),O=e(11238),u=e(24480);function T(t,i){return B.apply(this,arguments)}function B(){return B=(0,b.Z)(y().mark(function t(i,L){return y().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",(0,O.ZP)("/api/system/dict/type/list",{params:(0,u.f)(i,L),method:"GET",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return R.stop()}},t)})),B.apply(this,arguments)}function F(t){return(0,O.ZP)("/api/system/dict/type/".concat(t),{method:"GET"})}function j(t){return(0,O.ZP)("/api/system/dict/data/type/".concat(t),{method:"GET"})}function r(t){return P.apply(this,arguments)}function P(){return P=(0,b.Z)(y().mark(function t(i){return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,O.ZP)("/api/system/dict/type",{method:"POST",data:i}));case 1:case"end":return h.stop()}},t)})),P.apply(this,arguments)}function a(t){return c.apply(this,arguments)}function c(){return c=(0,b.Z)(y().mark(function t(i){return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,O.ZP)("/api/system/dict/type",{method:"PUT",data:i}));case 1:case"end":return h.stop()}},t)})),c.apply(this,arguments)}function f(t){return n.apply(this,arguments)}function n(){return n=(0,b.Z)(y().mark(function t(i){return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,O.ZP)("/api/system/dict/type/".concat(i),{method:"DELETE",headers:{"Content-Type":"application/json;charset=UTF-8"}}));case 1:case"end":return h.stop()}},t)})),n.apply(this,arguments)}function Z(t){return(0,A.su)("/api/system/dict/type/export",{params:t},"dict_type_".concat(new Date().getTime(),".xlsx"))}},66548:function(Q,x,e){"use strict";e.d(x,{su:function(){return F}});var b=e(11849),U=e(3182),y=e(94043),A=e.n(y),O=e(11238),u={xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",zip:"application/zip"};function T(r){request(r,{method:"GET",responseType:"blob",getResponse:!0}).then(function(P){B(P,u.zip)})}function B(r,P){var a=document.createElement("a"),c=new Blob([r.data],{type:P}),f=new RegExp("filename=([^;]+\\.[^\\.;]+);*"),n=decodeURI(r.response.headers.get("content-disposition")),Z=f.exec(n),t=Z?Z[1]:"file";t=t.replace(/"/g,""),a.style.display="none",a.href=URL.createObjectURL(c),a.setAttribute("download",t),document.body.appendChild(a),a.click(),URL.revokeObjectURL(a.href),document.body.removeChild(a)}function F(r,P,a){return j.apply(this,arguments)}function j(){return j=(0,U.Z)(A().mark(function r(P,a,c){return A().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.ZP)(P,(0,b.Z)((0,b.Z)({},a),{},{method:"POST",responseType:"blob"})).then(function(Z){var t=document.createElement("a"),i=Z;t.style.display="none",t.href=URL.createObjectURL(i),t.setAttribute("download",c),document.body.appendChild(t),t.click(),URL.revokeObjectURL(t.href),document.body.removeChild(t)}));case 1:case"end":return n.stop()}},r)})),j.apply(this,arguments)}},24480:function(Q,x,e){"use strict";e.d(x,{C2:function(){return B},wC:function(){return j},f:function(){return P}});var b=e(17673),U="/user/login",y=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,A=function(c){return y.test(c)},O=function(){return window.location.hostname==="preview.pro.ant.design"},u=function(){var c="production";return c==="development"?!0:O()};function T(a){return a.replace(/^\s+|\s+$/gm,"")}function B(a,c,f,n,Z,t){var i={id:c||"id",name:f||"name",parentId:n||"parentId",parentName:Z||"parentName",childrenList:t||"children"},L={},h={},R=[];a.forEach(function($){var o=$,w=o[i.parentId];L[w]==null&&(L[w]=[]),o.key=o[i.id],o.title=o[i.name],o.value=o[i.id],h[o[i.id]]=o,L[w].push(o)}),a.forEach(function($){var o=$,w=o[i.parentId];h[w]==null&&(o[i.parentName]="",R.push(o))}),R.forEach(function($){k($)});function k($){var o=$;L[o[i.id]]!==null&&(o[i.childrenList]=L[o[i.id]]),o[i.childrenList]&&o[i.childrenList].forEach(function(w){var l=w;l[i.parentName]=o[i.name],k(l)})}return R}var F=function(){return parse(window.location.href.split("?")[1])};function j(a){var c=a.map(function(f){var n={id:f.id,title:f.label,key:"".concat(f.id),value:f.id};return f.children&&(n.children=j(f.children)),n});return c}function r(a){window.location.href="/api/common/download?fileName=".concat(encodeURI(a),"&delete=",!0)}function P(a,c){for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(a.orderByColumn=f,a.isAsc=c[f]==="descend"?"descending":"ascending");return a}}}]);
