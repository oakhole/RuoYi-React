(self.webpackChunkruoyi_react=self.webpackChunkruoyi_react||[]).push([[9531],{5966:function(q,$,a){"use strict";var _=a(22122),W=a(81253),ee=a(67294),D=a(63990),le=["fieldProps","proFieldProps"],B=["fieldProps","proFieldProps"],K="text",R=function(y){var O=y.fieldProps,b=y.proFieldProps,o=(0,W.Z)(y,le);return ee.createElement(D.Z,(0,_.Z)({mode:"edit",valueType:K,fieldProps:O,filedConfig:{valueType:K},proFieldProps:b},o))},P=function(y){var O=y.fieldProps,b=y.proFieldProps,o=(0,W.Z)(y,B);return ee.createElement(D.Z,(0,_.Z)({mode:"edit",valueType:"password",fieldProps:O,proFieldProps:b,filedConfig:{valueType:K}},o))},f=R;f.Password=P,f.displayName="ProFormComponent",$.Z=f},34687:function(q){q.exports={container:"antd-pro-pages-user-login-index-container",content:"antd-pro-pages-user-login-index-content",leftSide:"antd-pro-pages-user-login-index-leftSide",mask:"antd-pro-pages-user-login-index-mask",circles:"antd-pro-pages-user-login-index-circles",animate:"antd-pro-pages-user-login-index-animate",slogan:"antd-pro-pages-user-login-index-slogan",title:"antd-pro-pages-user-login-index-title",desc:"antd-pro-pages-user-login-index-desc",rightSide:"antd-pro-pages-user-login-index-rightSide",form:"antd-pro-pages-user-login-index-form",top:"antd-pro-pages-user-login-index-top",header:"antd-pro-pages-user-login-index-header",logo:"antd-pro-pages-user-login-index-logo",main:"antd-pro-pages-user-login-index-main",icon:"antd-pro-pages-user-login-index-icon",other:"antd-pro-pages-user-login-index-other",register:"antd-pro-pages-user-login-index-register",prefixIcon:"antd-pro-pages-user-login-index-prefixIcon"}},59252:function(q,$,a){"use strict";a.r($),a.d($,{default:function(){return Je}});var _=a(49111),W=a(19650),ee=a(47673),D=a(4107),le=a(18106),B=a(51752),K=a(34792),R=a(48086),P=a(11849),f=a(3182),C=a(2824),y=a(17462),O=a(76772),b=a(94043),o=a.n(b),fe=a(89366),ce=a(2603),Le=a(80821),Pe=a(80521),Ze=a(36108),je=a(48107),ye=a(39464),i=a(67294),Qe=a(9715),Ce=a(86835),Xe=a(57663),Fe=a(71577),z=a(22122),ae=a(28991),Se=a(87757),V=a.n(Se),de=a(92137),pe=a(81253),te=a(28481),ue=a(64893),Ee=["rules","name","phoneName","fieldProps","captchaTextRender","captchaProps"],Te=i.forwardRef(function(r,u){var m=(0,i.useState)(r.countDown||60),g=(0,te.Z)(m,2),L=g[0],A=g[1],T=(0,i.useState)(!1),F=(0,te.Z)(T,2),I=F[0],M=F[1],H=(0,i.useState)(),Z=(0,te.Z)(H,2),ne=Z[0],N=Z[1],U=r.rules,ve=r.name,G=r.phoneName,S=r.fieldProps,J=r.captchaTextRender,ie=J===void 0?function(x,h){return x?"".concat(h," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:J,oe=r.captchaProps,Q=(0,pe.Z)(r,Ee),X=function(){var x=(0,de.Z)(V().mark(function h(j){return V().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,N(!0),s.next=4,Q.onGetCaptcha(j);case 4:N(!1),M(!0),s.next=13;break;case 8:s.prev=8,s.t0=s.catch(0),M(!1),N(!1),console.log(s.t0);case 13:case"end":return s.stop()}},h,null,[[0,8]])}));return function(j){return x.apply(this,arguments)}}();return(0,i.useEffect)(function(){var x=0,h=r.countDown;return I&&(x=window.setInterval(function(){A(function(j){return j<=1?(M(!1),clearInterval(x),h||60):j-1})},1e3)),function(){return clearInterval(x)}},[I]),i.createElement(Ce.Z.Item,{noStyle:!0,shouldUpdate:!0},function(x){var h=x.getFieldValue,j=x.validateFields;return i.createElement("div",{style:(0,ae.Z)((0,ae.Z)({},S==null?void 0:S.style),{},{display:"flex",alignItems:"center"}),ref:u},i.createElement(D.Z,(0,z.Z)({},S,{style:{flex:1,transition:"width .3s",marginRight:8}})),i.createElement(Fe.Z,(0,z.Z)({style:{display:"block"},disabled:I,loading:ne},oe,{onClick:(0,de.Z)(V().mark(function w(){var s;return V().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!G){t.next=9;break}return t.next=4,j([G].flat(1));case 4:return s=h([G].flat(1)),t.next=7,X(s);case 7:t.next=11;break;case 9:return t.next=11,X("");case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}},w,null,[[0,13]])}))}),ie(I,L)))})}),Ie=(0,ue.G)(Te),Ne=Ie,we=a(63185),De=a(9676),Be=a(63990),Re=a(22270),Oe=["options","fieldProps","proFieldProps","valueEnum"],be=i.forwardRef(function(r,u){var m=r.options,g=r.fieldProps,L=r.proFieldProps,A=r.valueEnum,T=(0,pe.Z)(r,Oe);return i.createElement(Be.Z,(0,z.Z)({ref:u,valueType:"checkbox",mode:"edit",valueEnum:(0,Re.h)(A,void 0),fieldProps:(0,ae.Z)({options:m},g),proFieldProps:L},T))}),Ae=i.forwardRef(function(r,u){var m=r.fieldProps,g=r.children;return i.createElement(De.Z,(0,z.Z)({ref:u},m),g)}),Me=(0,ue.G)(Ae,{valuePropName:"checked"}),ge=Me;ge.Group=be;var Ue=ge,Ge=a(952),Y=a(5966),E=a(43581),$e=a(73727),We=a(29791),Ke=a(36571);function ze(r,u){return re.apply(this,arguments)}function re(){return re=(0,f.Z)(o().mark(function r(u,m){return o().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",(0,E.WY)("/api/login/captcha",(0,P.Z)({method:"GET",params:(0,P.Z)({},u)},m||{})));case 1:case"end":return L.stop()}},r)})),re.apply(this,arguments)}function Ve(r){return se.apply(this,arguments)}function se(){return se=(0,f.Z)(o().mark(function r(u){return o().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",(0,E.WY)("/api/captchaImage",(0,P.Z)({method:"GET"},u||{})));case 1:case"end":return g.stop()}},r)})),se.apply(this,arguments)}var Ye=a(34687),n=a.n(Ye),e=a(85893),me=function(u){var m=u.content;return(0,e.jsx)(O.Z,{"data-inspector-line":"22","data-inspector-column":"2","data-inspector-relative-path":"src/pages/user/Login/index.tsx",closable:!0,style:{marginBottom:24},message:m,type:"error",showIcon:!0})},He=function(){var u=(0,i.useState)(!1),m=(0,C.Z)(u,2),g=m[0],L=m[1],A=(0,i.useState)({}),T=(0,C.Z)(A,2),F=T[0],I=T[1],M=(0,i.useState)("account"),H=(0,C.Z)(M,2),Z=H[0],ne=H[1],N=(0,E.tT)("@@initialState"),U=N.initialState,ve=N.setInitialState,G=(0,i.useState)(""),S=(0,C.Z)(G,2),J=S[0],ie=S[1],oe=(0,i.useState)(""),Q=(0,C.Z)(oe,2),X=Q[0],x=Q[1],h=function(){var s=(0,f.Z)(o().mark(function l(){return o().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:Ve().then(function(v){v&&(ie(v.uuid),x(v.img))});case 1:case"end":return d.stop()}},l)}));return function(){return s.apply(this,arguments)}}();(0,i.useEffect)(function(){h()},[]);var j=function(){var s=(0,f.Z)(o().mark(function l(){var t,d;return o().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,U==null||(t=U.fetchUserInfo)===null||t===void 0?void 0:t.call(U);case 2:if(d=c.sent,!d){c.next=6;break}return c.next=6,ve(function(k){return(0,P.Z)((0,P.Z)({},k),{},{currentUser:d})});case 6:case"end":return c.stop()}},l)}));return function(){return s.apply(this,arguments)}}(),w=function(){var s=(0,f.Z)(o().mark(function l(t){var d,v,c,k,xe,he;return o().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return L(!0),p.prev=1,t.uuid=J,p.next=5,(0,Ke.x4)((0,P.Z)((0,P.Z)({},t),{},{type:Z}));case 5:if(d=p.sent,d.code!==200){p.next=18;break}return localStorage.setItem("token",d.token||""),v="\u767B\u5F55\u6210\u529F\uFF01",R.default.success(v),p.next=12,j();case 12:if(E.m8){p.next=14;break}return p.abrupt("return");case 14:return c=E.m8.location.query,k=c,xe=k.redirect,E.m8.push(xe||"/"),p.abrupt("return");case 18:I(d),h(),p.next=26;break;case 22:p.prev=22,p.t0=p.catch(1),he="\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01",R.default.error(he);case 26:L(!1);case 27:case"end":return p.stop()}},l,null,[[1,22]])}));return function(t){return s.apply(this,arguments)}}();return(0,e.jsx)("div",{"data-inspector-line":"101","data-inspector-column":"4","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().container,children:(0,e.jsxs)("div",{"data-inspector-line":"102","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().content,children:[(0,e.jsxs)("div",{"data-inspector-line":"103","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().leftSide,children:[(0,e.jsx)("div",{"data-inspector-line":"104","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().mask}),(0,e.jsxs)("ul",{"data-inspector-line":"105","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().circles,children:[(0,e.jsx)("li",{"data-inspector-line":"106","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"107","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"108","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"109","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"110","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"111","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"112","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"113","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"114","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"}),(0,e.jsx)("li",{"data-inspector-line":"115","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"})]}),(0,e.jsxs)("div",{"data-inspector-line":"117","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().slogan,children:[(0,e.jsx)("div",{"data-inspector-line":"118","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().title,children:"\u6B22\u8FCE\u5149\u4E34"}),(0,e.jsx)("div",{"data-inspector-line":"119","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().desc,children:"\u6B22\u8FCE\u6765\u5230\u597D\u73A9\u4FF1\u4E50\u90E8\uFF0C\u5728\u8FD9\u91CC\u548C\u5FD7\u540C\u9053\u5408\u7684\u670B\u53CB\u4E00\u8D77\u5206\u4EAB\u6709\u8DA3\u7684\u6545\u4E8B\uFF0C\u4E00\u8D77\u7EC4\u7EC7\u6709\u8DA3\u7684\u6D3B\u52A8..."})]})]}),(0,e.jsx)("div",{"data-inspector-line":"124","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().rightSide,children:(0,e.jsxs)("div",{"data-inspector-line":"125","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().form,children:[(0,e.jsxs)("div",{"data-inspector-line":"126","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().top,children:[(0,e.jsx)("div",{"data-inspector-line":"127","data-inspector-column":"14","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().header,children:(0,e.jsx)($e.rU,{"data-inspector-line":"128","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",to:"/",children:(0,e.jsx)("span",{"data-inspector-line":"129","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().title,children:"RuoYi-React"})})}),(0,e.jsx)("div",{"data-inspector-line":"132","data-inspector-column":"14","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().desc,children:"\u57FA\u4E8E RuoYi-Vue \u63D0\u4F9B\u670D\u52A1\u5B9E\u73B0 React \u524D\u7AEF UI"})]}),(0,e.jsxs)("div",{"data-inspector-line":"135","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().main,children:[(0,e.jsxs)(Ge.ZP,{"data-inspector-line":"136","data-inspector-column":"14","data-inspector-relative-path":"src/pages/user/Login/index.tsx",initialValues:{autoLogin:!0,username:"admin",password:"admin123"},submitter:{searchConfig:{submitText:"\u767B\u5F55"},render:function(l,t){return t.pop()},submitButtonProps:{loading:g,size:"large",style:{width:"100%",fontWeight:600,backgroundImage:"linear-gradient(to right, #6366f1, #2563eb)",borderRadius:"9999px",justifyContent:"center",backgroundColor:"transparent"}}},onFinish:function(){var s=(0,f.Z)(o().mark(function l(t){return o().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,w(t);case 2:case"end":return v.stop()}},l)}));return function(l){return s.apply(this,arguments)}}(),isKeyPressSubmit:!0,children:[(0,e.jsxs)(B.Z,{"data-inspector-line":"165","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",activeKey:Z,onChange:ne,children:[(0,e.jsx)(B.Z.TabPane,{"data-inspector-line":"166","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",tab:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"},"account"),(0,e.jsx)(B.Z.TabPane,{"data-inspector-line":"167","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",tab:"\u624B\u673A\u53F7\u767B\u5F55",style:{color:"white"}},"mobile")]}),F.code===500&&Z==="account"&&(0,e.jsx)(me,{"data-inspector-line":"171","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",content:F.msg||"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),Z==="account"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Y.Z,{"data-inspector-line":"175","data-inspector-column":"20","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"username",fieldProps:{size:"middle",prefix:(0,e.jsx)(fe.Z,{"data-inspector-line":"179","data-inspector-column":"32","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().prefixIcon})},placeholder:"\u8D26\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8D26\u53F7"}]}),(0,e.jsx)(Y.Z.Password,{"data-inspector-line":"189","data-inspector-column":"20","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"password",fieldProps:{size:"middle",prefix:(0,e.jsx)(ce.Z,{"data-inspector-line":"193","data-inspector-column":"32","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().prefixIcon})},placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801"}]}),(0,e.jsxs)(D.Z.Group,{"data-inspector-line":"203","data-inspector-column":"20","data-inspector-relative-path":"src/pages/user/Login/index.tsx",compact:!0,children:[(0,e.jsx)(Y.Z,{"data-inspector-line":"204","data-inspector-column":"22","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"code",fieldProps:{size:"middle",prefix:(0,e.jsx)(Le.Z,{"data-inspector-line":"208","data-inspector-column":"34","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().prefixIcon})},placeholder:"\u9A8C\u8BC1\u7801",style:{verticalAlign:"middle"},rules:[{pattern:/^\d+$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u9A8C\u8BC1\u7801"}]}),(0,e.jsx)("img",{"data-inspector-line":"221","data-inspector-column":"22","data-inspector-relative-path":"src/pages/user/Login/index.tsx",style:{height:"32px",verticalAlign:"middle",cursor:"pointer",float:"right"},src:"data:image/gif;base64,"+X,onClick:h})]})]}),F.code===500&&Z==="mobile"&&(0,e.jsx)(me,{"data-inspector-line":"236","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",content:F.msg||"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),Z==="mobile"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Y.Z,{"data-inspector-line":"240","data-inspector-column":"20","data-inspector-relative-path":"src/pages/user/Login/index.tsx",fieldProps:{size:"middle",prefix:(0,e.jsx)(Pe.Z,{"data-inspector-line":"243","data-inspector-column":"32","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().prefixIcon})},name:"mobile",placeholder:"\u624B\u673A\u53F7\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7\u7801"},{pattern:/^1\d{10}$/,message:"\u4E0D\u5408\u6CD5\u7684\u624B\u673A\u53F7\uFF01"}]}),(0,e.jsx)(Ne,{"data-inspector-line":"258","data-inspector-column":"20","data-inspector-relative-path":"src/pages/user/Login/index.tsx",fieldProps:{size:"large",prefix:(0,e.jsx)(ce.Z,{"data-inspector-line":"261","data-inspector-column":"32","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().prefixIcon})},captchaProps:{size:"middle"},placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",captchaTextRender:function(l,t){return l?"".concat(t," ","\u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"},name:"captcha",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u9A8C\u8BC1\u7801"}],onGetCaptcha:function(){var s=(0,f.Z)(o().mark(function l(t){var d;return o().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ze({phone:t});case 2:if(d=c.sent,d!==!1){c.next=5;break}return c.abrupt("return");case 5:R.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return c.stop()}},l)}));return function(l){return s.apply(this,arguments)}}()})]}),(0,e.jsx)("div",{"data-inspector-line":"295","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",style:{marginBottom:24},children:(0,e.jsx)(Ue,{"data-inspector-line":"300","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",noStyle:!0,name:"autoLogin",children:"\u8BB0\u4F4F\u5BC6\u7801"})})]}),(0,e.jsxs)(W.Z,{"data-inspector-line":"305","data-inspector-column":"14","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().other,children:["\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F :",(0,e.jsx)(Ze.Z,{"data-inspector-line":"307","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().icon}),(0,e.jsx)(je.Z,{"data-inspector-line":"308","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().icon}),(0,e.jsx)(ye.Z,{"data-inspector-line":"309","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:n().icon})]}),(0,e.jsx)(We.Z,{"data-inspector-line":"311","data-inspector-column":"14","data-inspector-relative-path":"src/pages/user/Login/index.tsx"})]})]})})]})})},Je=He}}]);
