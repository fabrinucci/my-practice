(this["webpackJsonp03-react-rutas"]=this["webpackJsonp03-react-rutas"]||[]).push([[0],{30:function(e,c,t){},37:function(e,c,t){},39:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t.n(n),s=t(22),r=t.n(s),a=(t(30),t(3)),j=t(2),o=t(0),b=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Acerca"}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut eum facilis velit veniam harum molestias placeat illo, odio ea facere quod nihil veritatis nobis cupiditate, fuga eius maxime. Quis, similique."})]})},l=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Contacto"}),Object(o.jsx)("p",{children:"visita mi web jonmircha.com"})]})},d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Dashboard"})})},h=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Error 404"}),Object(o.jsx)("p",{children:"Not Found"})]})},x=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Home"}),Object(o.jsx)("p",{children:"Bienvenid@s al tema de las Rutas en React"})]})},O=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Login"})})},u=function(){var e=Object(j.h)().search,c=new URLSearchParams(e),t=20,n=parseInt(c.get("inicio"))||1,i=parseInt(c.get("fin"))||t,s=Object(j.g)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Productos"}),Object(o.jsxs)("p",{children:["Mostrando productos del ",Object(o.jsx)("b",{children:n})," al ",Object(o.jsx)("b",{children:i}),"."]}),n>t&&Object(o.jsx)("button",{onClick:function(e){s.push({search:"?inicio=".concat(n-t,"&fin=").concat(i-t)})},children:"Atr\xe1s"}),Object(o.jsx)("button",{onClick:function(e){s.push({search:"?inicio=".concat(n+t,"&fin=").concat(i+t)})},children:"Adelante"})]})},p=function(){var e=Object(j.i)().topic;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:e}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore similique culpa aspernatur recusandae dignissimos voluptatem ipsam fugiat explicabo quos architecto, iste beatae reiciendis doloremque illo distinctio accusantium nesciunt? Placeat, fugiat."})]})},m=function(){var e=Object(j.j)(),c=e.path,t=e.url;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Temas de React"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"".concat(t,"/jsx"),children:"JSX"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"".concat(t,"/props"),children:"Props"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"".concat(t,"/estado"),children:"Estado"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"".concat(t,"/componentes"),children:"Components"})})]}),Object(o.jsxs)(j.d,{children:[Object(o.jsxs)(j.b,{exact:!0,path:c,children:[Object(o.jsx)("h4",{children:"Elige un tema de React"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias excepturi eos assumenda doloribus aperiam aliquid minima maiores, aut labore. Enim, nulla. Amet incidunt fugiat, blanditiis fugit maxime ullam officia!"})]}),Object(o.jsx)(j.b,{path:"".concat(c,"/:topic"),component:p})]})]})},f=function(){var e=Object(j.i)().username;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Perfil del usuario"}),Object(o.jsxs)("p",{children:["Nombre de usuario ",Object(o.jsx)("b",{children:e})]})]})},v=function(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("ol",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Enlaces HTML (NO recomendado): "}),Object(o.jsx)("a",{href:"/",children:"Home"}),Object(o.jsx)("a",{href:"/acerca",children:"Acerca"}),Object(o.jsx)("a",{href:"/contacto",children:"Contacto"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Componente Link: "}),Object(o.jsx)(a.b,{to:"/",children:"Home"}),Object(o.jsx)(a.b,{to:"/acerca",children:"Acerca"}),Object(o.jsx)(a.b,{to:"/contacto",children:"Contacto"}),Object(o.jsx)(a.b,{to:"/no-existe",children:"Error 404"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Componente NavLink: "}),Object(o.jsx)(a.c,{exact:!0,to:"/",activeClassName:"active",children:"Home"}),Object(o.jsx)(a.c,{exact:!0,to:"/acerca",activeClassName:"active",children:"Acerca"}),Object(o.jsx)(a.c,{exact:!0,to:"/contacto",activeClassName:"active",children:"Contacto"}),Object(o.jsx)(a.c,{exact:!0,to:"/no-existe",activeClassName:"active",children:"Error 404"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Par\xe1metros: "}),Object(o.jsx)(a.b,{to:"/usuario/jonmircha",children:"jonmircha"}),Object(o.jsx)(a.b,{to:"/usuario/kenai",children:"kEnAi"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Par\xe1metros de consulta: "}),Object(o.jsx)(a.b,{to:"/productos",children:"Productos"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Redirecciones: "}),Object(o.jsx)(a.b,{to:"/about",children:"About"}),Object(o.jsx)(a.b,{to:"/contact",children:"Contact"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Rutas Anidadas: "}),Object(o.jsx)(a.b,{to:"/react",children:"React"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:"Rutas Privadas: "}),Object(o.jsx)(a.b,{to:"/login",children:"Login"}),Object(o.jsx)(a.b,{to:"/dashboard",children:"Dashboard"})]})]})})},g=t(8),C=t(25);var R=function(e){var c=e.component,t=Object(C.a)(e,["component"]);return Object(o.jsx)(j.b,Object(g.a)(Object(g.a)({},t),{},{children:Object(o.jsx)(c,{})}))},A=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Hash Router"}),Object(o.jsxs)(a.a,{children:[Object(o.jsx)(v,{}),Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{exact:!0,path:"/",component:x}),Object(o.jsx)(j.b,{exact:!0,path:"/acerca",component:b}),Object(o.jsx)(j.b,{exact:!0,path:"/contacto",component:l}),Object(o.jsx)(j.b,{exact:!0,path:"/usuario/:username",component:f}),Object(o.jsx)(j.b,{exact:!0,path:"/productos",component:u}),Object(o.jsx)(j.b,{exact:!0,path:"/about",children:Object(o.jsx)(j.a,{to:"/acerca"})}),Object(o.jsx)(j.b,{exact:!0,path:"/contact",children:Object(o.jsx)(j.a,{to:"/contacto"})}),Object(o.jsx)(j.b,{path:"/react",component:m}),Object(o.jsx)(j.b,{exact:!0,path:"/login",component:O}),Object(o.jsx)(R,{exact:!0,path:"/dashboard",component:d}),Object(o.jsx)(j.b,{path:"*",component:h})]})]})]})};t(15),t(5),t(11),t(37),t(20),t(24),JSON.parse(localStorage.getItem("mySongs"));var L=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"React Router"}),Object(o.jsx)("a",{href:"https://reactrouter.com/web/guides/quick-start",target:"_blank",rel:"noreferrer",children:"Documentaci\xf3n"}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("hr",{}),Object(o.jsx)(A,{})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(c){var t=c.getCLS,n=c.getFID,i=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root")),P()}},[[39,1,2]]]);
//# sourceMappingURL=main.53443d36.chunk.js.map