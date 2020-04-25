(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(14),c=t.n(l),o=(t(5),t(2)),u=function(e){var n=e.nameFilter,t=e.onInputChangeHandler,a=e.onClearClickHandler;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}),r.a.createElement("button",{type:"button",onClick:a},"clear"))},i=function(e){var n=e.onSubmit,t=e.nameValue,a=e.onNameChange,l=e.numberValue,c=e.onNumberChange,o=e.onClearClick;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:l,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:o},"clear"),r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.person,t=e.deletePersonHandler;return r.a.createElement("div",null,r.a.createElement("span",null,n.name)," ",r.a.createElement("span",null,n.number),r.a.createElement("button",{onClick:function(){return t(n.id)}},"delete"))},s=function(e){var n=e.persons,t=e.nameFilter,a=e.deletePersonHandler,l=t?"Filtering by names that start with ".concat(t):"No filters applied";return n.length>0?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("em",null,l)),r.a.createElement("div",null,r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(m,{key:e.name,person:e,deletePersonHandler:a})}))))):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("em",null,l)),r.a.createElement("div",null,r.a.createElement("strong",null," No persons found")))},d=t(3),f=t.n(d),b="/api/persons",h=function(){return f.a.get(b).then((function(e){return e.data}))},E=function(e){return f.a.post(b,e).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},p=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),d=m[0],f=m[1],b=Object(a.useState)(""),p=Object(o.a)(b,2),g=p[0],C=p[1],k=Object(a.useState)(""),w=Object(o.a)(k,2),j=w[0],y=w[1],O=Object(a.useState)(null),S=Object(o.a)(O,2),N=S[0],H=S[1],F=Object(a.useState)(null),P=Object(o.a)(F,2),V=P[0],x=P[1],I=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},U=function(e,n,t){H(e),x(n),setTimeout((function(){H(null),x(null)}),t)};Object(a.useEffect)((function(){h().then((function(e){l(e)})).catch((function(e){U("Unable to get persons because of an error in the server","error",5e3)}))}),[]);var B=function(){f(""),C("")},D=t;if(""!==j){var J=RegExp("^".concat(j));D=t.filter((function(e){return e.name.match(J)}))}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(I,{message:N,type:V}),r.a.createElement(u,{nameFilter:j,onInputChangeHandler:function(e){y(e.target.value)},onClearClickHandler:function(){y("")}})),r.a.createElement("div",null,r.a.createElement("h3",null,"Add a new person"),r.a.createElement(i,{onSubmit:function(e){if(e.preventDefault(),""===d||""===g)return alert("Name and/or number must not be empty"),!1;var n={name:d,number:g};E(n).then((function(e){l(t.concat(e)),B(),U("".concat(e.name," has been successfully created"),"success",5e3)})).catch((function(e){var t=e.response.data.error;U("Unable to create ".concat(n.name," because of an error in the server; ").concat(t),"error",5e3)}))},nameValue:d,onNameChange:function(e){f(e.target.value)},numberValue:g,onNumberChange:function(e){C(e.target.value)},onClearClick:B})),r.a.createElement("div",null,r.a.createElement("h3",null,"Numbers"),r.a.createElement(s,{persons:D,nameFilter:j,deletePersonHandler:function(e){var n=t.find((function(n){return n.id===e}));if(!window.confirm("Delete ".concat(n.name,"?")))return!1;v(e).then((function(){l(t.filter((function(n){return n.id!==e}))),U("".concat(n.name," has been successfully deleted"),"success",5e3)})).catch((function(a){l(t.filter((function(n){return n.id!==e}))),U("Unable to destroy ".concat(n.name," because it doesn't exist"),"error",5e3)}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.1629fc11.chunk.js.map