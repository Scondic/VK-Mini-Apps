(this["webpackJsonpVK-Mini-Apps"]=this["webpackJsonpVK-Mini-Apps"]||[]).push([[0],{167:function(e,t,c){},168:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(59),s=c.n(n),i=c(35),r=c.n(i),o=c(70),d=c.n(o),j=c(74),b=c(65),l=c(31),h=c(52),p=c(71),u=(c(161),c(36)),O=c(32),x=c(44),f=c(50),m=c(43),g=c(53),k=c(49),v=c(48),y=c(12),w=function(e){var t=e.id,c=e.go,a=e.fetchedUser;return Object(y.jsxs)(u.a,{id:t,children:[Object(y.jsx)(O.a,{children:"Example"}),a&&Object(y.jsx)(m.a,{header:Object(y.jsx)(x.a,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(y.jsx)(g.a,{before:a.photo_200?Object(y.jsx)(v.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:"",children:"".concat(a.first_name," ").concat(a.last_name)})}),Object(y.jsx)(m.a,{header:Object(y.jsx)(x.a,{mode:"secondary",children:"Navigation Example"}),children:Object(y.jsx)(k.a,{children:Object(y.jsx)(f.a,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persik, please"})})})]})},A=c(55),K=c.p+"static/media/persik.ae9f0072.png",V=(c(167),function(e){return Object(y.jsxs)(u.a,{id:e.id,children:[Object(y.jsx)(O.a,{left:Object(y.jsx)(A.a,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(y.jsx)("img",{className:"Persik",src:K,alt:"Persik The Cat"})]})}),P=function(){var e=Object(a.useState)("home"),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),i=Object(b.a)(s,2),o=i[0],u=i[1],O=Object(a.useState)(Object(y.jsx)(h.a,{size:"large"})),x=Object(b.a)(O,2),f=x[0],m=x[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),m(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,c=t.type,a=t.data;if("VKWebAppUpdateConfig"===c){var n=document.createAttribute("scheme");n.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(n)}})),function(){e.apply(this,arguments)}()}),[]);var g=function(e){n(e.currentTarget.dataset.to)};return Object(y.jsx)(p.a,{children:Object(y.jsx)(p.b,{children:Object(y.jsxs)(l.a,{activePanel:c,popout:f,children:[Object(y.jsx)(w,{id:"home",fetchedUser:o,go:g}),Object(y.jsx)(V,{id:"persik",go:g})]})})})};r.a.send("VKWebAppInit"),s.a.render(Object(y.jsx)(P,{}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.0d655a10.chunk.js.map