(this["webpackJsonpsocial-media-dashboard"]=this["webpackJsonpsocial-media-dashboard"]||[]).push([[0],[,,,,,,,,,,function(e,c,s){},function(e,c,s){},function(e,c,s){},,function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){},function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),r=s(4),n=s.n(r),i=(s(10),s(3)),o=(s(11),s(12),s(0));var l=function(e){var c=e.children;return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"header-grid",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Social Media Dashboard"}),Object(o.jsx)("p",{className:"header-total",children:"Total Followers: 23, 004"})]}),c]})})})};s(14);var d=function(e){var c=e.growth,s=e.pageViews,a=e.icon;return Object(o.jsxs)("div",{className:"card-small",children:[Object(o.jsx)("p",{className:"card-small-view",children:"Page Views"}),Object(o.jsx)("p",{className:"card-small-icon",children:Object(o.jsx)("img",{src:a,alt:""})}),Object(o.jsx)("p",{className:"card-small-number",children:s}),Object(o.jsx)("p",{className:"card-small-percentage",children:Object(o.jsxs)("span",{children:[Object(o.jsx)("img",{src:"images/icon-up.svg",alt:""}),c,"%"]})})]})},j=(s(15),[{icon:"images/icon-facebook.svg",pageViews:"87",growth:2,key:1},{icon:"images/icon-twitter.svg",pageViews:"52",growth:2257,key:2},{icon:"images/icon-instragram.svg",pageViews:"52k",growth:1375,key:3},{icon:"images/icon-youtube.svg",pageViews:"107",growth:19,key:4}]);var m=function(){return Object(o.jsx)("section",{className:"overview",children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Overview - Today"}),Object(o.jsx)("div",{className:"grid",children:j.map((function(e){var c=e.icon,s=e.pageViews,a=e.growth,t=e.key;return Object(o.jsx)(d,{icon:c,pageViews:s,growth:a},t)}))})]})})},h=s(5);s(16);var b=function(e){var c=e.username,s=(e.id,e.followers),a=e.todayFollower,t=e.icon,r=e.name,n="card ".concat(r);return Object(o.jsxs)("article",{className:n,children:[Object(o.jsxs)("p",{className:"card-title",children:[Object(o.jsx)("img",{src:t,alt:""}),c]}),Object(o.jsxs)("p",{className:"card-followers",children:[Object(o.jsx)("span",{className:"card-followers-number",children:s}),Object(o.jsx)("span",{className:"card-followers-title",children:"Followers"})]}),Object(o.jsxs)("p",{className:"card-today",children:[Object(o.jsx)("img",{src:"images/icon-up.svg",alt:""}),a," Today"]})]})},u=(s(17),[{username:"@peblo_code",id:1,followers:1483,todayFollower:12,icon:"images/icon-facebook.svg",name:"facebook"},{username:"@peblo_code",id:2,followers:"28k",todayFollower:20,icon:"images/icon-twitter.svg",name:"twitter"},{username:"@peblo_code",id:3,followers:"6k",todayFollower:30,icon:"images/icon-instagram.svg",name:"instagram"},{username:"@peblo_code",id:4,followers:"12k",todayFollower:-50,icon:"images/icon-youtube.svg",name:"youtube"}]);var g=function(){return Object(o.jsx)("section",{className:"top-cards",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"grid",children:u.map((function(e){return Object(o.jsx)(b,Object(h.a)({},e),e.id)}))})})})};s(18);var O=function(e){var c=e.setDarkMode,s=e.checked,t=e.setChecked,r=Object(a.useRef)(null);return Object(o.jsxs)("div",{className:"dark-mode",children:[Object(o.jsx)("p",{className:"dark-mode-title",children:"Dark Mode"}),Object(o.jsx)("input",{ref:r,onChange:function(){t(r.current.checked),c(r.current.checked)},type:"checkbox",checked:s,className:"checkbox",id:"checkbox"}),Object(o.jsx)("label",{className:"switch",htmlFor:"checkbox"})]})};var x=function(){var e=Object(a.useState)(!1),c=Object(i.a)(e,2),s=c[0],t=c[1],r=Object(a.useState)(!1),n=Object(i.a)(r,2),d=n[0],j=n[1],h=s?"is-dark-mode":"is-light-mode";function b(e){t(e.matches),j(e.matches)}return Object(a.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");e.addEventListener("change",b),t(e.matches),j(e.matches)}),[]),Object(o.jsxs)("main",{className:h,children:[Object(o.jsx)(l,{children:Object(o.jsx)(O,{setDarkMode:t,checked:d,setChecked:j})}),Object(o.jsx)(g,{}),Object(o.jsx)(m,{})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(c){var s=c.getCLS,a=c.getFID,t=c.getFCP,r=c.getLCP,n=c.getTTFB;s(e),a(e),t(e),r(e),n(e)}))};n.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),w()}],[[19,1,2]]]);
//# sourceMappingURL=main.af9159fd.chunk.js.map