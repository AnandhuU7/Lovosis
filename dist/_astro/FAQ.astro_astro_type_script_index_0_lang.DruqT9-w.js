var y={exports:{}},w;function T(){return w||(w=1,function(C,b){(function(m,g){C.exports=g()})(self,()=>(()=>{var m={740:function(v,o,h){/*
 * HSAccordion
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */var d,f=this&&this.__extends||(d=function(c,i){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])},d(c,i)},function(c,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function t(){this.constructor=c}d(c,i),c.prototype=i===null?Object.create(i):(t.prototype=i.prototype,new t)}),n=this&&this.__assign||function(){return n=Object.assign||function(c){for(var i,t=1,e=arguments.length;t<e;t++)for(var l in i=arguments[t])Object.prototype.hasOwnProperty.call(i,l)&&(c[l]=i[l]);return c},n.apply(this,arguments)},s=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(o,"__esModule",{value:!0});var r=h(292),a=function(c){function i(t,e,l){var u=c.call(this,t,e,l)||this;return u.toggle=u.el.querySelector(".hs-accordion-toggle")||null,u.content=u.el.querySelector(".hs-accordion-content")||null,u.update(),u.isToggleStopPropagated=(0,r.stringToBoolean)((0,r.getClassProperty)(u.toggle,"--stop-propagation","false")||"false"),u.toggle&&u.content&&u.init(),u}return f(i,c),i.prototype.init=function(){var t=this;this.createCollection(window.$hsAccordionCollection,this),this.onToggleClickListener=function(e){return t.toggleClick(e)},this.toggle.addEventListener("click",this.onToggleClickListener)},i.prototype.toggleClick=function(t){this.isToggleStopPropagated&&t.stopPropagation(),this.el.classList.contains("active")?this.hide():this.show()},i.prototype.show=function(){var t,e=this;if(this.group&&!this.isAlwaysOpened&&this.group.querySelector(":scope > .hs-accordion.active")&&this.group.querySelector(":scope > .hs-accordion.active")!==this.el&&window.$hsAccordionCollection.find(function(l){return l.element.el===e.group.querySelector(":scope > .hs-accordion.active")}).element.hide(),this.el.classList.contains("active"))return!1;this.el.classList.add("active"),!((t=this==null?void 0:this.toggle)===null||t===void 0)&&t.ariaExpanded&&(this.toggle.ariaExpanded="true"),this.content.style.display="block",this.content.style.height="0",setTimeout(function(){e.content.style.height="".concat(e.content.scrollHeight,"px"),(0,r.afterTransition)(e.content,function(){e.content.style.display="block",e.content.style.height="",e.fireEvent("open",e.el),(0,r.dispatch)("open.hs.accordion",e.el,e.el)})})},i.prototype.hide=function(){var t,e=this;if(!this.el.classList.contains("active"))return!1;this.el.classList.remove("active"),!((t=this==null?void 0:this.toggle)===null||t===void 0)&&t.ariaExpanded&&(this.toggle.ariaExpanded="false"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout(function(){e.content.style.height="0"}),(0,r.afterTransition)(this.content,function(){e.content.style.display="none",e.content.style.height="",e.fireEvent("close",e.el),(0,r.dispatch)("close.hs.accordion",e.el,e.el)})},i.prototype.update=function(){var t=this;if(this.group=this.el.closest(".hs-accordion-group")||null,!this.group)return!1;this.isAlwaysOpened=this.group.hasAttribute("data-hs-accordion-always-open")||!1,window.$hsAccordionCollection.map(function(e){return e.id===t.el.id&&(e.element.group=t.group,e.element.isAlwaysOpened=t.isAlwaysOpened),e})},i.prototype.destroy=function(){var t,e=this;!((t=i?.selectable)===null||t===void 0)&&t.length&&i.selectable.forEach(function(l){l.listeners.forEach(function(u){var p=u.el,S=u.listener;p.removeEventListener("click",S)})}),this.onToggleClickListener&&this.toggle.removeEventListener("click",this.onToggleClickListener),this.toggle=null,this.content=null,this.group=null,this.onToggleClickListener=null,window.$hsAccordionCollection=window.$hsAccordionCollection.filter(function(l){return l.element.el!==e.el})},i.findInCollection=function(t){return window.$hsAccordionCollection.find(function(e){return t instanceof i?e.element.el===t.el:typeof t=="string"?e.element.el===document.querySelector(t):e.element.el===t})||null},i.autoInit=function(){window.$hsAccordionCollection||(window.$hsAccordionCollection=[]),window.$hsAccordionCollection&&(window.$hsAccordionCollection=window.$hsAccordionCollection.filter(function(t){var e=t.element;return document.contains(e.el)})),document.querySelectorAll(".hs-accordion:not(.--prevent-on-load-init)").forEach(function(t){window.$hsAccordionCollection.find(function(e){var l;return((l=e?.element)===null||l===void 0?void 0:l.el)===t})||new i(t)})},i.getInstance=function(t,e){var l=window.$hsAccordionCollection.find(function(u){return u.element.el===(typeof t=="string"?document.querySelector(t):t)});return l?e?l:l.element.el:null},i.show=function(t){var e=i.findInCollection(t);e&&e.element.content.style.display!=="block"&&e.element.show()},i.hide=function(t){var e=i.findInCollection(t),l=e?window.getComputedStyle(e.element.content):null;e&&l.display!=="none"&&e.element.hide()},i.treeView=function(){var t=this;if(!document.querySelectorAll(".hs-accordion-treeview-root").length)return!1;this.selectable=[],document.querySelectorAll(".hs-accordion-treeview-root").forEach(function(e){var l=e?.getAttribute("data-hs-accordion-options"),u=l?JSON.parse(l):{};t.selectable.push({el:e,options:n({},u),listeners:[]})}),this.selectable.length&&this.selectable.forEach(function(e){e.el.querySelectorAll(".hs-accordion-selectable").forEach(function(l){var u=function(p){return t.onSelectableClick(p,e,l)};l.addEventListener("click",u),e.listeners.push({el:l,listener:u})})})},i.toggleSelected=function(t,e){e.classList.contains("selected")?e.classList.remove("selected"):(t.el.querySelectorAll(".hs-accordion-selectable").forEach(function(l){return l.classList.remove("selected")}),e.classList.add("selected"))},i.on=function(t,e,l){var u=i.findInCollection(e);u&&(u.element.events[t]=l)},i.onSelectableClick=function(t,e,l){t.stopPropagation(),i.toggleSelected(e,l)},i}(s(h(961)).default);window.addEventListener("load",function(){a.autoInit(),document.querySelectorAll(".hs-accordion-treeview-root").length&&a.treeView()}),typeof window<"u"&&(window.HSAccordion=a),o.default=a},961:(v,o)=>{Object.defineProperty(o,"__esModule",{value:!0});var h=function(){function d(f,n,s){this.el=f,this.options=n,this.events=s,this.el=f,this.options=n,this.events={}}return d.prototype.createCollection=function(f,n){var s;f.push({id:((s=n?.el)===null||s===void 0?void 0:s.id)||f.length+1,element:n})},d.prototype.fireEvent=function(f,n){if(n===void 0&&(n=null),this.events.hasOwnProperty(f))return this.events[f](n)},d.prototype.on=function(f,n){this.events[f]=n},d}();o.default=h},292:function(v,o){/*
 * @version: 2.7.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */var h=this;Object.defineProperty(o,"__esModule",{value:!0}),o.menuSearchHistory=o.classToClassList=o.htmlToElement=o.afterTransition=o.dispatch=o.debounce=o.isJson=o.isDirectChild=o.isFormElement=o.isParentOrElementHidden=o.isEnoughSpace=o.isIpadOS=o.isIOS=o.getZIndex=o.getClassPropertyAlt=o.getClassProperty=o.stringToBoolean=void 0,o.getHighestZIndex=function(n){var s=Number.NEGATIVE_INFINITY;return n.forEach(function(r){var a=d(r);a!=="auto"&&(a=parseInt(a,10))>s&&(s=a)}),s},o.stringToBoolean=function(n){return n==="true"},o.getClassProperty=function(n,s,r){return r===void 0&&(r=""),(window.getComputedStyle(n).getPropertyValue(s)||r).replace(" ","")},o.getClassPropertyAlt=function(n,s,r){r===void 0&&(r="");var a="";return n.classList.forEach(function(c){c.includes(s)&&(a=c)}),a.match(/:(.*)]/)?a.match(/:(.*)]/)[1]:r};var d=function(n){return window.getComputedStyle(n).getPropertyValue("z-index")};o.getZIndex=d,o.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},o.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},o.isDirectChild=function(n,s){for(var r=n.children,a=0;a<r.length;a++)if(r[a]===s)return!0;return!1},o.isEnoughSpace=function(n,s,r,a,c){r===void 0&&(r="auto"),a===void 0&&(a=10),c===void 0&&(c=null);var i=s.getBoundingClientRect(),t=c?c.getBoundingClientRect():null,e=window.innerHeight,l=t?i.top-t.top:i.top,u=(c?t.bottom:e)-i.bottom,p=n.clientHeight+a;return r==="bottom"?u>=p:r==="top"?l>=p:l>=p||u>=p},o.isFormElement=function(n){return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement};var f=function(n){return!!n&&(window.getComputedStyle(n).display==="none"||f(n.parentElement))};o.isParentOrElementHidden=f,o.isJson=function(n){if(typeof n!="string")return!1;var s=n.trim()[0],r=n.trim().slice(-1);if(s==="{"&&r==="}"||s==="["&&r==="]")try{return JSON.parse(n),!0}catch{return!1}return!1},o.debounce=function(n,s){var r;return s===void 0&&(s=200),function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];clearTimeout(r),r=setTimeout(function(){n.apply(h,a)},s)}},o.dispatch=function(n,s,r){r===void 0&&(r=null);var a=new CustomEvent(n,{detail:{payload:r},bubbles:!0,cancelable:!0,composed:!1});s.dispatchEvent(a)},o.afterTransition=function(n,s){var r=function(){s(),n.removeEventListener("transitionend",r,!0)},a=window.getComputedStyle(n),c=a.getPropertyValue("transition-duration");a.getPropertyValue("transition-property")!=="none"&&parseFloat(c)>0?n.addEventListener("transitionend",r,!0):s()},o.htmlToElement=function(n){var s=document.createElement("template");return n=n.trim(),s.innerHTML=n,s.content.firstChild},o.classToClassList=function(n,s,r,a){r===void 0&&(r=" "),a===void 0&&(a="add"),n.split(r).forEach(function(c){return a==="add"?s.classList.add(c):s.classList.remove(c)})},o.menuSearchHistory={historyIndex:-1,addHistory:function(n){this.historyIndex=n},existsInHistory:function(n){return n>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},g={},E=function v(o){var h=g[o];if(h!==void 0)return h.exports;var d=g[o]={exports:{}};return m[o].call(d.exports,d,d.exports,v),d.exports}(740);return E})())}(y)),y.exports}T();
