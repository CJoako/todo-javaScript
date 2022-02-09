(()=>{"use strict";var t={d:(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.d({},{L:()=>y});var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var r,o,n;return r=t,n=[{key:"fromJson",value:function(e){var r=e.id,o=e.tarea,n=e.completado,a=e.creado,i=new t(o);return i.id=r,i.completado=n,i.creado=a,i}}],(o=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&e(r.prototype,o),n&&e(r,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,i=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}function a(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cargarLocalStorage()}var e,n,i;return e=t,(n=[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,r=o(this.todos);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(console.log(t,n.id),n.id==t){n.completado=!n.completado,this.guardarLocalStorage();break}}}catch(t){r.e(t)}finally{r.f()}}},{key:"eliminarCompletado",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):this.todos=[],this.todos=this.todos.map(r.fromJson)}}])&&a(e.prototype,n),i&&a(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro"),v=function(t){var e='\n    <li class="'.concat(t.completado?"completed":"",' "data-id="').concat(t.id,'">\n    <div class="view">\n        <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n        <label>").concat(t.tarea,'</label>\n        <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n    </li>'),r=document.createElement("div");return r.innerHTML=e,u.append(r.firstElementChild),r.firstElementChild};s.addEventListener("keyup",(function(t){if(13===t.keyCode&&s.value.length>0){console.log(s.value);var e=new r(s.value);y.nuevoTodo(e),v(e),s.value=""}})),u.addEventListener("click",(function(t){var e=t.target.localName,r=t.target.parentElement.parentElement,o=r.getAttribute("data-id");e.includes("input")?(y.marcarCompletado(o),r.classList.toggle("completed")):e.includes("button")&&(y.eliminarTodo(o),u.removeChild(r))})),d.addEventListener("click",(function(){y.eliminarCompletado();for(var t=u.children.length-1;t>=0;t--){var e=u.children[t];e.classList.contains("completed")&&u.removeChild(e)}})),f.addEventListener("click",(function(t){console.log(t.target.text);var e=t.target.text;if(e){m.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var r,o=l(u.children);try{for(o.s();!(r=o.n()).done;){var n=r.value;n.classList.remove("hidden");var a=n.classList.contains("completed");switch(e){case"Pendientes":a&&n.classList.add("hidden");break;case"Completados":a||n.classList.add("hidden")}}}catch(t){o.e(t)}finally{o.f()}}}));var y=new i;y.todos.forEach((function(t){return v(t)})),console.log("todos",y.todos)})();