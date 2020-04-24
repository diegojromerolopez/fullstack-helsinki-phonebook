(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{16:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(14),c=t.n(l),o=(t(5),t(15)),u=t(2),i=function(e){var n=e.nameFilter,t=e.onInputChangeHandler,a=e.onClearClickHandler;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}),r.a.createElement("button",{type:"button",onClick:a},"clear"))},m=function(e){var n=e.onSubmit,t=e.nameValue,a=e.onNameChange,l=e.numberValue,c=e.onNumberChange,o=e.onClearClick;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:l,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:o},"clear"),r.a.createElement("button",{type:"submit"},"add"))))},s=function(e){var n=e.person,t=e.deletePersonHandler;return r.a.createElement("div",null,r.a.createElement("span",null,n.name)," ",r.a.createElement("span",null,n.number),r.a.createElement("button",{onClick:function(){return t(n.id)}},"delete"))},d=function(e){var n=e.persons,t=e.nameFilter,a=e.deletePersonHandler,l=t?"Filtering by names that start with ".concat(t):"No filters applied";return n.length>0?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("em",null,l)),r.a.createElement("div",null,r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(s,{key:e.name,person:e,deletePersonHandler:a})}))))):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("em",null,l)),r.a.createElement("div",null,r.a.createElement("strong",null," No persons found")))},f=t(3),h=t.n(f),b="/api/persons",E=function(){return h.a.get(b).then((function(e){return e.data}))},v=function(e){return h.a.post(b,e).then((function(e){return e.data}))},p=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},C=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),f=s[0],h=s[1],b=Object(a.useState)(""),C=Object(u.a)(b,2),w=C[0],k=C[1],y=Object(a.useState)(""),j=Object(u.a)(y,2),O=j[0],S=j[1],N=Object(a.useState)(null),H=Object(u.a)(N,2),F=H[0],P=H[1],V=Object(a.useState)(null),x=Object(u.a)(V,2),D=x[0],I=x[1],U=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},B=function(e,n,t){P(e),I(n),setTimeout((function(){P(null),I(null)}),t)};Object(a.useEffect)((function(){E().then((function(e){l(e)})).catch((function(e){B("Unable to get persons because of an error in the server","error",5e3)}))}),[]);var J=function(){h(""),k("")},W=t;if(""!==O){var A=RegExp("^".concat(O));W=t.filter((function(e){return e.name.match(A)}))}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(U,{message:F,type:D}),r.a.createElement(i,{nameFilter:O,onInputChangeHandler:function(e){S(e.target.value)},onClearClickHandler:function(){S("")}})),r.a.createElement("div",null,r.a.createElement("h3",null,"Add a new person"),r.a.createElement(m,{onSubmit:function(e){if(e.preventDefault(),""===f||""===w)return alert("Name and/or number must not be empty"),!1;if(t.filter((function(e){return e.name===f})).length>0){if(!window.confirm("".concat(f," is already added to phonebook. Do you want to replace the old number with the new one")))return!1;var n=t.filter((function(e){return e.name===f}))[0];p(n.id,Object(o.a)({},n,{number:w})).then((function(e){l(t.map((function(t){return t.id!==n.id?t:e}))),J(),B("".concat(e.name," has been successfully updated"),"success",5e3)})).catch((function(e){B("".concat(n.name," has not been found in the server"),"error",5e3),l(t.filter((function(e){return e.id!==n.id})))}))}else{var a={id:t.length+1,name:f,number:w};v(a).then((function(e){l(t.concat(e)),J(),B("".concat(e.name," has been successfully created"),"success",5e3)})).catch((function(e){B("Unable to create ".concat(a.name," because of an error in the server"),"error",5e3)}))}},nameValue:f,onNameChange:function(e){h(e.target.value)},numberValue:w,onNumberChange:function(e){k(e.target.value)},onClearClick:J})),r.a.createElement("div",null,r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{persons:W,nameFilter:O,deletePersonHandler:function(e){var n=t.find((function(n){return n.id===e}));if(!window.confirm("Delete ".concat(n.name,"?")))return!1;g(e).then((function(){l(t.filter((function(n){return n.id!==e}))),B("".concat(n.name," has been successfully deleted"),"success",5e3)})).catch((function(a){l(t.filter((function(n){return n.id!==e}))),B("Unable to destroy ".concat(n.name," because it doesn't exist"),"error",5e3)}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,n,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.877d5b3e.chunk.js.map