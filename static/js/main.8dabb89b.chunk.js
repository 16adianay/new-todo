(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{21:function(e,t,c){e.exports={header:"Header_header__33tva",logo:"Header_logo__30vqQ",button:"Header_button__3bIsl",header__select:"Header_header__select__3MHT6",header__select__item:"Header_header__select__item__3zGtu"}},28:function(e,t,c){e.exports={form:"AddListForm_form__b8w8H",label:"AddListForm_label__SrkKx"}},32:function(e,t,c){e.exports={cards:"List_cards__1letP",card:"List_card__V1HgY"}},39:function(e,t,c){e.exports={main:"Main_main__1CJNP",btn:"Main_btn__1qqiQ"}},44:function(e,t,c){e.exports={footer:"Footer_footer__3AHQo"}},47:function(e,t,c){e.exports={app:"App_app__1QV5g"}},62:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(41),r=c.n(s),o=c(6),i=c(44),d=c.n(i),l=c(1),j=function(){return Object(l.jsx)("footer",{className:d.a.footer,children:Object(l.jsxs)("p",{children:["Contact us: ",Object(l.jsx)("a",{href:"mailto:16adianay@gmail.com",children:"16adianay@gmail.com"})]})})},u=c(23),m=c(14),b=c(39),h=c.n(b),O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Welcome to ToDo App!"}),Object(l.jsx)("p",{children:"This app is used for creating to-do lists."}),Object(l.jsxs)("p",{children:["You need to ",Object(l.jsx)("a",{href:"/",children:"create an account"})," to use this app"]})]})},p=c(32),_=c.n(p),x=c(77),f=function(e){var t=e.item,c=Object(n.useState)(t.completed),a=Object(o.a)(c,2),s=a[0],r=a[1];return Object(l.jsxs)("li",{children:[Object(l.jsx)(x.a,{color:"success",checked:s,onChange:function(){r(!s)}}),s?Object(l.jsx)("del",{children:t.content}):Object(l.jsx)("span",{children:t.content})]})},v=function(e){var t=e.todos;return Object(l.jsx)("div",{className:_.a.cards,children:t.map((function(e){return Object(l.jsxs)("div",{className:_.a.card,children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsx)("ul",{className:_.a.list,children:e.items.map((function(e){return Object(l.jsx)(f,{item:e})}))})]})}))})},g=c(79),N=c(28),C=c.n(N),U=c(46),I=c.n(U),k=function(e){var t=e.addCard,c=Object(n.useRef)(),a=Object(n.useRef)();return Object(l.jsxs)("form",{className:C.a.form,onSubmit:function(e){if(e.preventDefault(),""!==c.current.value&&""!==a.current.value){var n=a.current.value.split(",").map((function(e){return{id:I()(),content:e.trim(),completed:!1}}));t({title:c.current.value,items:n})}},children:[Object(l.jsx)("label",{className:C.a.label,htmlFor:"cardsTitle",children:"Card Title"}),Object(l.jsx)("input",{ref:c,type:"text",id:"cardsTitle",placeholder:"Enter card title...",required:!0}),Object(l.jsx)("label",{className:C.a.label,htmlFor:"cards",children:"Enter list items separated by comma"}),Object(l.jsx)("textarea",{ref:a,id:"cards",required:!0}),Object(l.jsx)(g.a,{className:C.a.btn,type:"submit",children:"Add"})]})},L=function(e){var t=e.loggedUser,c=e.todos,a=e.isLogged,s=Object(n.useState)(c),r=Object(o.a)(s,2),i=r[0],d=r[1],j=Object(n.useState)(!1),b=Object(o.a)(j,2),p=b[0],_=b[1],x=[];return a&&(x=i.filter((function(e){return e.userId===t.id}))),Object(l.jsx)("main",{className:h.a.main,children:t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h2",{children:["Welcome, ",t.name,"!"]}),Object(l.jsx)(g.a,{onClick:function(){return _(!p)},className:h.a.btn,variant:"outlined",children:p?"Close":"Add List"}),p&&Object(l.jsx)(k,{addCard:function(e){d([].concat(Object(m.a)(i),[Object(u.a)(Object(u.a)({},e),{},{userId:t.id})])),_(!1)}}),Object(l.jsx)(v,{todos:x})]}):Object(l.jsx)(O,{})})},S=c(47),A=c.n(S),H=c(21),T=c.n(H),D=c.p+"static/media/GNOME_Todo_icon_2019.76261878.svg",F=function(e){var t=e.user,c=e.setUser,n=e.value,a=e.name;return Object(l.jsx)("div",{className:T.a.header__select__item,onClick:function(){var e=Object(u.a)(Object(u.a)({},t),{},{activeUserId:n});c(e)},children:a})},J=function(e){var t=e.isLogged,c=e.setUser,a=e.user,s=Object(n.useState)(!1),r=Object(o.a)(s,2),i=r[0],d=r[1];return Object(l.jsxs)("header",{className:T.a.header,children:[Object(l.jsxs)("div",{className:T.a.logo,children:[Object(l.jsx)("img",{src:D,alt:"logo"}),Object(l.jsx)("h1",{children:"ToDo App"})]}),Object(l.jsxs)("div",{className:T.a.button,onClick:function(){d(!i)},children:[t?"Change user":"Log In",i?Object(l.jsxs)("div",{className:T.a.header__select,children:[Object(l.jsx)(F,{user:a,setUser:c,value:1,name:"Joe Doe"}),Object(l.jsx)(F,{user:a,setUser:c,value:2,name:"Diana Gromova"}),Object(l.jsx)(F,{user:a,setUser:c,value:null,name:"Unregistered user"})]}):null]})]})},y={activeUserId:null,users:[{id:1,name:"John Doe"},{id:2,name:"Diana Gromova"}],todos:[{userId:1,title:"April 17th",items:[{id:"123",content:"Wash dishes",completed:!1},{id:"124",content:"Call grandmom",completed:!1},{id:"125",content:"Do a homework",completed:!0}]},{userId:2,title:"JS learning",items:[{id:"235",content:"Watch learning video on Youtube",completed:!0},{id:"236",content:"Read 'The Clean Coder' book",completed:!1},{id:"237",content:"Find a mentor",completed:!1},{id:"238",content:"Create a simple JS app",completed:!1}]},{userId:2,title:"Weekend routine",items:[{id:"333",content:"Clean the room",completed:!0},{id:"334",content:"Wash the car",completed:!0},{id:"335",content:"Order pizza for dinner",completed:!1},{id:"336",content:"Choose a film to watch",completed:!1}]}]};var W=function(){var e=Object(n.useState)(y),t=Object(o.a)(e,2),c=t[0],a=t[1],s=c.activeUserId,r=c.users,i=c.todos,d=null!==s,u=r.find((function(e){return e.id===s}));return Object(l.jsxs)("div",{className:A.a.app,children:[Object(l.jsx)(J,{activeUserId:s,user:c,setUser:a,isLogged:d}),Object(l.jsx)(L,{loggedUser:u,isLogged:d,todos:i}),Object(l.jsx)(j,{})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8dabb89b.chunk.js.map