(this.webpackJsonpzenix=this.webpackJsonpzenix||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},29:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(17),s=c.n(a),i=(c(25),c(3)),r=(c(26),c(20)),o=(c(27),c(13));c(36),c(37);o.a.initializeApp({apiKey:"AIzaSyBG0T52ZNl-nyWFd9S3ARk6eNyFo0gVnkE",authDomain:"todo-60b13.firebaseapp.com",projectId:"todo-60b13",storageBucket:"todo-60b13.appspot.com",messagingSenderId:"637707986316",appId:"1:637707986316:web:062d b7326b2d39b39c22a9",measurementId:"G-DPZ3N9Z1PG"});var l=o.a.storage(),u=o.a.firestore(),j=o.a.firestore.FieldValue.serverTimestamp;function d(e,t){u.collection(e).doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))}c(29);var b=c(1);var m=function(e){var t=e.comment,c=e.user;return Object(b.jsx)("div",{className:"comment",children:Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("div",{className:"introduce",children:[Object(b.jsx)("h4",{className:"name",children:t.by.name}),Object(b.jsx)("img",{className:"icon",src:t.by.avatarURL})]}),Object(b.jsxs)("div",{className:"comment-content",children:[Object(b.jsx)("h5",{className:"comment-text",children:t.text}),Object(b.jsxs)("div",{className:"comment-bar",children:[Object(b.jsx)("h5",{children:"like"}),Object(b.jsx)("h5",{children:"reply"}),c.id===t.by.id&&Object(b.jsx)("h5",{onClick:function(){d("commentlist",t.id)},children:"delete"})]})]})]})})},h=c(15),f=c.n(h),O=c(8),x=c(18);function v(e,t,c){var n=l.ref(t[c]),a=u.collection(e);n.put(t).on("state_changed",(function(e){}),(function(e){}),Object(x.a)(f.a.mark((function e(){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=j(),e.next=3,a.add(Object(O.a)(Object(O.a)({},t),{},{createAt:c}));case 3:case"end":return e.stop()}}),e)}))))}function p(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){var t=u.collection(e).orderBy("createAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){e.data()&&t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),a}function g(e,t,c,n){u.collection(e).doc(t).update(c,n)}var N=function(e){var t=e.status,c=e.user,a=function(e,t){var c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1];return Object(n.useEffect)((function(){var c=u.collection(e).orderBy("createAt","asc").onSnapshot((function(e){var c=[];e.forEach((function(e){e.data()&&e.data().of.id===t&&c.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),r(c)}));return function(){return c()}}),[e]),s}("commentlist",t.id),s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],h=Object(n.useState)(!0),f=Object(i.a)(h,2),x=f[0],p=f[1],N=Object(n.useState)(!1),k=Object(i.a)(N,2),y=k[0],w=k[1];return Object(n.useEffect)((function(){for(var e=0;e<t.like.length;e++)if(t.like[e].id===c.id)return void w(!0);console.log("you not liked")}),[]),Object(b.jsxs)("div",{className:"status",children:[Object(b.jsxs)("div",{className:"introduce",children:[Object(b.jsx)("img",{alt:"avatar",className:"user-avatar",src:t.by.avatarURL}),Object(b.jsx)("h2",{className:"user-name",children:t.by.name}),t.by.id===c.id&&Object(b.jsx)("button",{onClick:function(){console.log("deleted"),d("statuslist",t.id)},className:"delete",children:"X"})]}),Object(b.jsx)("h3",{className:"status-text",children:t.text}),Object(b.jsxs)("div",{className:"status-bar",children:[Object(b.jsx)("div",{onClick:function(){if(w(!y),!y){for(var e=0;e<t.like.length;e++)if(t.like[e].id===c.id){var n=t.like.map((function(e){return e.id!==c.id}));return void g("statuslist",t.id,"like",n)}g("statuslist",t.id,"like",[].concat(Object(r.a)(t.like),[c]))}else{var a=t.like.map((function(e){return e.id!==c.id}));g("statuslist",t.id,"like",a)}},className:"like-icon "+(y?"liked":"like")}),Object(b.jsx)("h4",{onClick:function(){return p(!x)},className:"show-comment",children:x?"hide ".concat(a.length," comment"):"show ".concat(a.length," comment")})]}),x&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{className:"form-upload-comment",onSubmit:function(e){e.preventDefault(),v("commentlist",{text:l,of:t,by:c},"text"),j("")},children:[Object(b.jsx)("img",{className:"user-avatar",src:c.avatarURL}),Object(b.jsx)("input",{type:"text",placeholder:"your comment...",onChange:function(e){return j(e.target.value)},value:l,required:!0})]}),a.map((function(e){return Object(b.jsx)(m,{user:c,comment:e},e.id)}))]})]})},k=(c(32),c(19));function y(e,t){var c=Object.keys,n=typeof e;return e&&t&&"object"===n&&n===typeof t?c(e).length===c(t).length&&c(e).every((function(c){return y(e[c],t[c])})):e===t}var w={deleteCookie:function(e){document.cookie=e+" = ; expires = Thu, 01-Jan-1970 00:00:01 GMT ;"},getCookieObject:function(e){var t=function(e){for(var t=e+"=",c=decodeURIComponent(document.cookie).split(";"),n=0;n<c.length;n++){for(var a=c[n];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(t))return a.substring(t.length,a.length)}return""}(e);if(t){var c=JSON.parse(t);if(c)return c}return null},uploadCookie:function(e,t){var c=new Date;c.setMonth(c.getMonth()+1),document.cookie="".concat(e," = ")+JSON.stringify(t)+"; expires = "+c.toUTCString()+";"},includesObject:function(e,t){var c,n=Object(k.a)(e);try{for(n.s();!(c=n.n()).done;){if(y(c.value,t))return!0}}catch(a){n.e(a)}finally{n.f()}return!1},equalObject:y};c(33);var S=function(e){var t=e.person;return Object(b.jsxs)("div",{className:"friend",children:[Object(b.jsx)("img",{className:"icon",src:t.avatarURL}),Object(b.jsx)("h4",{className:"friend-name",children:t.name}),Object(b.jsx)("div",{className:"green-dot"})]})};c(34);function C(e){var t=e.result,c=t.type,n=t.value;return Object(b.jsxs)("div",{className:"result",children:[Object(b.jsx)("h2",{className:"type",children:t.type}),"user"===c&&Object(b.jsx)("img",{className:"avatar",src:n.avatarURL}),Object(b.jsx)("h3",{className:"value "+("user"===c?"background-white":""),children:"status"===c?t.value.text:t.value.name})]})}var E=function(e){var t=e.setUser,c=e.user,a=e.userList,s=e.statusList,r=Object(n.useState)(!0),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(n.useState)(!1),d=Object(i.a)(j,2),m=d[0],h=d[1],f=Object(n.useState)(!1),O=Object(i.a)(f,2),x=O[0],v=O[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),N=g[0],k=g[1],y=Object(n.useState)(["haha","hehe"]),E=Object(i.a)(y,2),L=E[0],I=E[1],U=function(){window.innerWidth<=690?u(!1):u(!0)};function D(){w.deleteCookie("user"),t(null)}window.addEventListener("resize",U),Object(n.useEffect)((function(){U()}),[]);var R="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png";return Object(b.jsxs)("div",{className:"navbar-container",children:[Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)("div",{className:"logo"}),l&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{className:"form-search",onSubmit:function(e){e.preventDefault(),k("")},children:[Object(b.jsx)("img",{className:"search-icon",src:"https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"}),Object(b.jsx)("input",{onChange:function(e){var t=e.target.value;k(e.target.value),console.log("searching: ".concat(e.target.value)),t&&function(e){for(var t=[],c=0;c<s.length;c++)s[c].text.toLowerCase().includes(e)&&t.push({type:"status",value:s[c]});for(var n=0;n<a.length;n++)a[n].name.toLowerCase().includes(e)&&t.push({type:"user",value:a[n]});I(t)}(t.trim().toLowerCase())},className:"input-search",type:"text",placeholder:"search",value:N}),N&&Object(b.jsx)("div",{className:"result-container",children:L.map((function(e){return Object(b.jsx)(C,{result:e})}))})]}),Object(b.jsxs)("div",{className:"navbar-introduce",children:[Object(b.jsx)("img",{className:"avatar",src:R}),Object(b.jsxs)("div",{className:"introduce-text",children:[Object(b.jsx)("h3",{className:"name",children:c.name}),Object(b.jsx)("h4",{className:"email",children:c.email})]})]}),Object(b.jsx)("button",{onClick:D,className:"button-log",children:"logout"})]}),!l&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"ZENIX"}),Object(b.jsx)("img",{onClick:function(){return h(!m)},className:"extend-icon",src:m?"https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/close.png":"https://image.flaticon.com/icons/png/512/56/56763.png"})]})]}),m&&!l&&Object(b.jsxs)("ul",{className:"navbar-mobile",children:[Object(b.jsxs)("li",{className:"item navbar-introduce",children:[Object(b.jsx)("img",{className:"avatar",src:R}),Object(b.jsxs)("div",{className:"introduce-text",children:[Object(b.jsx)("h3",{className:"name",children:c.name}),Object(b.jsx)("h4",{className:"email",children:c.email})]})]}),Object(b.jsx)("div",{className:"item-logout",onClick:D,children:Object(b.jsx)("img",{className:"icon-logout",src:"https://www.iconpacks.net/icons/2/free-exit-logout-icon-2857-thumb.png"})}),Object(b.jsx)("div",{onClick:function(){return v(!x)},className:"item",children:Object(b.jsx)("img",{className:"friend-icon",src:"https://img.icons8.com/ios/452/friends.png"})}),x&&a.map((function(e){return Object(b.jsx)(S,{person:e})}))]})]})};var L=function(){var e=p("userlist"),t=p("statuslist"),c=Object(n.useState)(null),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(!0),l=Object(i.a)(o,2),u=l[0],j=l[1],d=Object(n.useState)(!1),m=Object(i.a)(d,2),h=m[0],f=m[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),g=x[0],k=x[1],y=Object(n.useState)(""),C=Object(i.a)(y,2),L=C[0],I=C[1],U=Object(n.useState)(""),D=Object(i.a)(U,2),R=D[0],q=D[1],z=Object(n.useState)(""),A=Object(i.a)(z,2),F=A[0],T=A[1],Z=Object(n.useState)(""),B=Object(i.a)(Z,2),G=B[0],J=B[1],W=Object(n.useState)(""),X=Object(i.a)(W,2),M=X[0],P=X[1],V=Object(n.useState)(""),_=Object(i.a)(V,2),K=_[0],H=_[1],Q=function(){window.innerWidth<=1263?j(!1):j(!0)};return window.addEventListener("resize",Q),Object(n.useEffect)((function(){Q(),r(w.getCookieObject("user"))}),[]),Object(b.jsxs)("div",{className:"app",children:[s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{statusList:t,userList:e,setUser:r,user:s}),Object(b.jsxs)("form",{className:"form-upload-status",onSubmit:function(e){e.preventDefault(),v("statuslist",{text:K,by:s,like:[]},"text"),H("")},children:[Object(b.jsx)("input",{value:K,onChange:function(e){return H(e.target.value)},type:"text",required:!0,placeholder:"".concat(s.name,", write something...")}),Object(b.jsx)("button",{children:"upload"})]}),Object(b.jsxs)("div",{className:"main-section",children:[u&&Object(b.jsx)("div",{className:"friend-section",children:e.map((function(e){return Object(b.jsx)(S,{person:e})}))}),Object(b.jsx)("div",{className:"status-container",children:t.map((function(e){return Object(b.jsx)(N,{user:s,status:e},e.id)}))})]})]}),!h&&!s&&Object(b.jsxs)("form",{form:!0,className:"form-log",onSubmit:function(t){if(t.preventDefault(),e){for(var c=0;c<e.length;c++){var n=e[c],a=n.email,s=n.password;if(a===G&&s===M)return w.uploadCookie("user",e[c]),void r(e[c])}alert("email or password wrong")}},children:[Object(b.jsxs)("div",{className:"zenix-intro",children:[Object(b.jsx)("div",{className:"white-logo"}),Object(b.jsx)("h1",{children:"ZENIX"})]}),Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)("input",{onChange:function(e){return J(e.target.value)},required:!0,className:"input-log",placeholder:"email",type:"text"}),Object(b.jsx)("input",{onChange:function(e){return P(e.target.value)},required:!0,className:"input-log",placeholder:"password",type:"text"}),Object(b.jsx)("button",{className:"button-log",children:"login"}),Object(b.jsx)("button",{onClick:function(){return f(!0)},className:"button-log",children:"register"})]}),h&&!s&&Object(b.jsxs)("form",{className:"form-log",onSubmit:function(t){t.preventDefault();var c={name:g,avatarURL:R||"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",email:L,password:F};if(e){for(var n=0;n<e.length;n++){if(e[n].email===L)return void alert("email existed")}v("userlist",c,"name"),alert("create success")}},children:[Object(b.jsxs)("div",{className:"zenix-intro",children:[Object(b.jsx)("div",{className:"white-logo"}),Object(b.jsx)("h1",{children:"ZENIX"})]}),Object(b.jsx)("h1",{children:"CREATE NEW"}),Object(b.jsx)("input",{required:!0,onChange:function(e){return k(e.target.value)},className:"input-log",placeholder:"name",type:"text"}),Object(b.jsx)("input",{onChange:function(e){return q(e.target.value)},className:"input-log",placeholder:"avatar url",type:"text"}),Object(b.jsx)("input",{required:!0,onChange:function(e){return I(e.target.value)},className:"input-log",placeholder:"email",type:"text"}),Object(b.jsx)("input",{required:!0,onChange:function(e){return T(e.target.value)},className:"input-log",placeholder:"password",type:"text"}),Object(b.jsx)("button",{className:"button-log",children:"create"}),Object(b.jsx)("button",{onClick:function(){return f(!1)},className:"button-log",children:"back to login"})]})]})};s.a.render(Object(b.jsx)(L,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2d92f545.chunk.js.map