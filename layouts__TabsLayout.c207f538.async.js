(self.webpackChunkruoyi_react=self.webpackChunkruoyi_react||[]).push([[456],{23826:function(g){g.exports={tabItem:"tabItem___1vS9f",closeIcon:"closeIcon___2J7aW",active:"active___3rWkl"}},76125:function(g){g.exports={tabs:"tabs___2O5Eo",tabList:"tabList___Xo1dv",linkTabs:"linkTabs___2hVoG",tabLeftMenu:"tabLeftMenu___3bQ1n",tabMore:"tabMore___2ymdg",boxShadow:"boxShadow___2NrHz"}},99768:function(g,O,o){"use strict";o.r(O),o.d(O,{default:function(){return st}});var mt=o(48736),J=o(27049),ht=o(59250),F=o(13013),bt=o(30887),f=o(28682),L=o(11849),Z=o(67294),R=o(64140),w=o(92977),z=o(57254),h=o(43581),V=o(43061),P=o(19630),Q=o(23826),X=o.n(Q),t=o(85893),B="RV/m",U=function(p){var a=(0,P.k6)(),i=p.value,e=p.tabIndex,d=(0,h.tT)("system"),b=d.active,v=d.dispatch,C=d.tabWidth,S=d.tarnslateX,N=d.showTabs,G=d.tabsWidth,I=d.tabList,j=(0,h.j9)(),K=j.dropScope,H=I.length>1;return(0,t.jsxs)("div",{"data-inspector-line":"35","data-inspector-column":"4","data-inspector-relative-path":"src/components/KeepAliveTabs/components/SortableTab/index.tsx",className:"".concat(X().tabItem," link-tab ").concat(e===b?X().active:""),title:i.title,onClick:function(){var y=Math.floor(S/C),r=S-y*C;if(e-y<=0){v({type:"CHANGESTATE",payload:{active:e,tarnslateX:S-r}}),a.push((0,L.Z)({},i));return}if(e-y+1===N){var n=(e+1)*C-(G-100);v({type:"CHANGESTATE",payload:{active:e,tarnslateX:n}}),a.push((0,L.Z)({},i));return}v({type:"CHANGESTATE",payload:{active:e}}),a.push((0,L.Z)({},i))},_nk:"".concat(B,"11"),children:[i.title,H&&(0,t.jsx)("div",{"data-inspector-line":"65","data-inspector-column":"8","data-inspector-relative-path":"src/components/KeepAliveTabs/components/SortableTab/index.tsx",className:X().closeIcon,onClick:function(y){y.stopPropagation();var r=i.keepAliveName,n=JSON.parse(JSON.stringify(I));n.splice(e,1);var l=0;if(e<b)l=b-1,K(r);else if(e===b){if(b>0){l=b-1;var c=setTimeout(function(){clearTimeout(c),a.push(I[l])},10)}else{l=0;var m=setTimeout(function(){clearTimeout(m),a.push(n[l])},10)}var E=a.listen(function(){E();var k=setTimeout(function(){clearTimeout(k),K(r)},10)})}else l=b,K(r);v({type:"CHANGESTATE",payload:{tabList:n,active:l,tarnslateX:0}})},_nk:"".concat(B,"12"),children:(0,t.jsx)(V.Z,{"data-inspector-line":"111","data-inspector-column":"10","data-inspector-relative-path":"src/components/KeepAliveTabs/components/SortableTab/index.tsx",_nk:"".concat(B,"21")})})]})},Y=U,$=o(76125),A=o.n($),s="OxF8",q=(0,R.W8)(function(T){var p=T.index,a=T.value,i=T.tabIndex,e=T.key;return(0,t.jsx)(Y,{"data-inspector-line":"19","data-inspector-column":"2","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",index:p,value:a,tabIndex:i,_nk:"".concat(s,"11")},e)}),_=(0,R.JN)(function(){var T=(0,Z.useRef)(),p=(0,h.tT)("system"),a=p.tabList,i=p.tarnslateX;return(0,t.jsx)("div",{"data-inspector-line":"27","data-inspector-column":"4","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",className:"".concat(A().tabList),ref:T,_nk:"".concat(s,"21"),children:(0,t.jsxs)("div",{"data-inspector-line":"28","data-inspector-column":"6","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",className:A().linkTabs,style:{transform:"translateX(-".concat(i,"px)")},_nk:"".concat(s,"22"),children:[(0,t.jsx)("a",{"data-inspector-line":"29","data-inspector-column":"8","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",className:X().tabItem,href:"/",_nk:"".concat(s,"31"),children:"\u9996\u9875"}),a.map(function(e,d){return(0,t.jsx)(q,{"data-inspector-line":"34","data-inspector-column":"10","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",index:d,value:e,tabIndex:d,_nk:"iAr".concat(s,"41")},"item-".concat(d))})]})})}),tt=function(){var p=(0,h.tT)("system"),a=p.tabList,i=p.dispatch,e=p.active,d=p.showTabs,b=p.tabsWidth,v=p.tabWidth,C=p.tarnslateX,S=(0,h.j9)(),N=S.dropScope,G=S.clear,I=function(n){var l=n.oldIndex,c=n.newIndex,m=JSON.parse(JSON.stringify(a)),E=m[e];m.splice(c,0,m.splice(l,1)[0]);var k=m.findIndex(function(W){return W===E});i({type:"CHANGESTATE",payload:{tabList:m,active:k}})},j=[];if(a.length>d){var K=Math.floor(C/v),H=Math.floor(C/v)+d;a.forEach(function(r,n){n<K&&j.push(r),n>=H&&j.push(r)})}var M=(0,t.jsx)(f.Z,{"data-inspector-line":"74","data-inspector-column":"4","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",onClick:function(n){var l=d*v-b+100,c=a==null?void 0:a.findIndex(function(k){return k.pathname===n.key}),m=d-1;if(c>m){var E=(c-m)*v+l;i({type:"CHANGESTATE",payload:{tarnslateX:E,active:c}})}else i({type:"CHANGESTATE",payload:{tarnslateX:v*c,active:c}});h.m8.push((0,L.Z)({},a[c]))},_nk:"".concat(s,"51"),children:j.map(function(r){return(0,t.jsxs)(f.Z.Item,{"data-inspector-line":"99","data-inspector-column":"15","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",_nk:"iAr".concat(s,"61"),children:[" ",r.title]},r.pathname)})}),y=(0,t.jsxs)(f.Z,{"data-inspector-line":"104","data-inspector-column":"4","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",onClick:function(n){var l=0,c=JSON.parse(JSON.stringify(a));switch(n.key){case"closeCurrent":{var m=c[e].keepAliveName;if(e>0){l=e-1;var E=setTimeout(function(){clearTimeout(E),h.m8.push(a[l])},10)}else{l=0;var k=setTimeout(function(){clearTimeout(k),h.m8.push(c[l])},10)}var W=h.m8.listen(function(){W();var u=setTimeout(function(){clearTimeout(u),N(m)},10)});c.splice(e,1),i({type:"CHANGESTATE",payload:{tabList:c,active:l,tarnslateX:0}});break}case"closeOther":{var ot=c.filter(function(u,x){return x!==e}),ct=c.filter(function(u,x){return x===e});ot.forEach(function(u){return N(u.keepAliveName)}),i({type:"CHANGESTATE",payload:{tabList:ct,active:0,tarnslateX:0}});break}case"closeAll":{var rt=h.m8.listen(function(){rt();var u=setTimeout(function(){clearTimeout(u),G()},10)}),lt=setTimeout(function(){clearTimeout(lt),h.m8.push("/")},10);i({type:"CHANGESTATE",payload:{tabList:[],active:0,tarnslateX:0}});break}case"closeLeft":{var dt=c.filter(function(u,x){return x<e}),pt=c.filter(function(u,x){return x>=e});dt.forEach(function(u){return N(u.keepAliveName)}),i({type:"CHANGESTATE",payload:{tabList:pt,active:0,tarnslateX:0}});break}case"closeRight":{var ut=c.filter(function(u,x){return x>e}),vt=c.filter(function(u,x){return x<=e});ut.forEach(function(u){return N(u.keepAliveName)}),i({type:"CHANGESTATE",payload:{tabList:vt,tarnslateX:0}});break}}},_nk:"".concat(s,"52"),children:[(0,t.jsx)(f.Z.Item,{"data-inspector-line":"183","data-inspector-column":"6","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",_nk:"".concat(s,"62"),children:"\u5173\u95ED\u5F53\u524D\u6807\u7B7E"},"closeCurrent"),(0,t.jsx)(f.Z.Item,{"data-inspector-line":"184","data-inspector-column":"6","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",_nk:"".concat(s,"63"),children:"\u5173\u95ED\u5176\u4ED6\u6807\u7B7E"},"closeOther"),(0,t.jsx)(f.Z.Item,{"data-inspector-line":"185","data-inspector-column":"6","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",_nk:"".concat(s,"64"),children:"\u5173\u95ED\u5168\u90E8\u6807\u7B7E"},"closeAll"),(0,t.jsx)(f.Z.Item,{"data-inspector-line":"186","data-inspector-column":"6","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",disabled:e===0,_nk:"".concat(s,"65"),children:"\u5173\u95ED\u5F53\u524D\u5DE6\u8FB9\u6807\u7B7E"},"closeLeft"),(0,t.jsx)(f.Z.Item,{"data-inspector-line":"189","data-inspector-column":"6","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",disabled:e===a.length-1,_nk:"".concat(s,"66"),children:"\u5173\u95ED\u5F53\u524D\u53F3\u8FB9\u6807\u7B7E"},"closeRight")]});return(0,Z.useEffect)(function(){window.onresize=function(){var n=document.getElementById("contentContainer")?document.getElementById("contentContainer").getBoundingClientRect().width:0;i({type:"CHANGESTATE",payload:{tabsWidth:n,tarnslateX:0}})};var r=setTimeout(function(){var n=document.getElementById("contentContainer")?document.getElementById("contentContainer").getBoundingClientRect().width:0;i({type:"CHANGESTATE",payload:{tabsWidth:n}})},100);return function(){clearTimeout(r)}},[i]),(0,Z.useEffect)(function(){var r=setTimeout(function(){var n=document.getElementsByClassName("link-tab")[0]?document.getElementsByClassName("link-tab")[0].getBoundingClientRect().width:120,l=Math.ceil((b-100)/n);n>0&&v>0&&i({type:"CHANGESTATE",payload:{showTabs:l,tabWidth:n}})},100);return function(){clearTimeout(r)}},[i,v,b]),(0,t.jsxs)("div",{"data-inspector-line":"233","data-inspector-column":"4","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",className:A().tabs,id:"contentContainer",_nk:"".concat(s,"23"),children:[a.length>0&&(0,t.jsx)(_,{"data-inspector-line":"234","data-inspector-column":"29","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",onSortEnd:I,axis:"x",distance:1,_nk:"".concat(s,"71")}),(0,t.jsxs)("div",{"data-inspector-line":"235","data-inspector-column":"6","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",className:"".concat(A().tabLeftMenu,"  ").concat(a.length>=d&&A().boxShadow),_nk:"".concat(s,"24"),children:[a.length>d&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.Z,{"data-inspector-line":"238","data-inspector-column":"12","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",overlay:M,className:A().tabMore,_nk:"".concat(s,"81"),children:(0,t.jsx)("a",{"data-inspector-line":"239","data-inspector-column":"14","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",className:"ant-dropdown-link",onClick:function(n){return n.preventDefault()},_nk:"".concat(s,"32"),children:(0,t.jsx)(w.Z,{"data-inspector-line":"240","data-inspector-column":"16","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",_nk:"".concat(s,"91")})})}),(0,t.jsx)(J.Z,{"data-inspector-line":"243","data-inspector-column":"12","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",type:"vertical",_nk:"".concat(s,"a1")})]}),a.length>1&&(0,t.jsx)(F.Z,{"data-inspector-line":"247","data-inspector-column":"10","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",overlay:y,className:A().menuRight,_nk:"".concat(s,"82"),children:(0,t.jsxs)("a",{"data-inspector-line":"248","data-inspector-column":"12","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",className:"ant-dropdown-link",onClick:function(n){return n.preventDefault()},_nk:"".concat(s,"33"),children:["\u64CD\u4F5C ",(0,t.jsx)(z.Z,{"data-inspector-line":"249","data-inspector-column":"17","data-inspector-relative-path":"src/components/KeepAliveTabs/index.tsx",_nk:"".concat(s,"b1")})]})})]})]})},et=tt,at=o(60923),D="jD5g",nt=at.Z.tabsLayout,it=function(p){var a=function(){return nt?(0,t.jsx)(et,{"data-inspector-line":"15","data-inspector-column":"27","data-inspector-relative-path":"src/layouts/TabsLayout.tsx",_nk:"".concat(D,"11")}):null};return(0,t.jsxs)("div",{"data-inspector-line":"19","data-inspector-column":"4","data-inspector-relative-path":"src/layouts/TabsLayout.tsx",_nk:"".concat(D,"21"),children:[a(),(0,t.jsx)("div",{"data-inspector-line":"21","data-inspector-column":"6","data-inspector-relative-path":"src/layouts/TabsLayout.tsx",style:{margin:"64px 24px 24px 24px"},_nk:"".concat(D,"22"),children:p.children})]})},st=it}}]);
