(self.webpackChunk=self.webpackChunk||[]).push([[204],{8498:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=8498,t.exports=e},272:function(t,e,n){var o={"./aos.js":2453,"./async-intervals.js":1774,"./autoscroll.js":3480,"./button-groups.js":3116,"./copy.js":2583,"./data-disable-with-spinner.js":5546,"./drag-n-drop.js":4514,"./html-tooltips.js":5125,"./misc.js":7037,"./plans.js":4226,"./posthog.js":1966,"./prefill_phone_number.js":9568,"./routes.js.erb":1105,"./scroll-to.js":7131,"./theme.js":9440,"./time-distance.js":1942,"./timeago.js":7277,"./tooltips.js":7289,"./turbo.js":5990,"./turbo_betterstack.js":3676,"./useragent.js":7102,"common/aos.js":2453,"common/async-intervals.js":1774,"common/autoscroll.js":3480,"common/button-groups.js":3116,"common/copy.js":2583,"common/data-disable-with-spinner.js":5546,"common/drag-n-drop.js":4514,"common/html-tooltips.js":5125,"common/misc.js":7037,"common/plans.js":4226,"common/posthog.js":1966,"common/prefill_phone_number.js":9568,"common/routes.js.erb":1105,"common/scroll-to.js":7131,"common/theme.js":9440,"common/time-distance.js":1942,"common/timeago.js":7277,"common/tooltips.js":7289,"common/turbo.js":5990,"common/turbo_betterstack.js":3676,"common/useragent.js":7102};function r(t){var e=i(t);return n(e)}function i(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=272},4113:function(t,e,n){var o=n(8498);o.keys().forEach(o)},2453:function(t,e,n){"use strict";n.r(e);var o=n(3513),r=n.n(o);function i(){r().init({duration:400,once:!0})}i();var s=!0;document.addEventListener("turbo:load",(function(){s?s=!1:(document.querySelectorAll(".aos-init, .aos-animate").forEach((function(t){t.classList.remove("aos-init","aos-animate")})),i())}))},1774:function(){window.asyncIntervals=[],window.clearAsyncIntervals=function(){window.asyncIntervals.forEach((function(t){clearInterval(t)}))},document.addEventListener("turbo:before-visit",window.clearAsyncIntervals)},3480:function(){function t(t,n){var o="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(o)return(o=o.call(t)).next.bind(o);if(Array.isArray(t)||(o=function(t,n){if(!t)return;if("string"===typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(t,n)}(t))||n&&t&&"number"===typeof t.length){o&&(t=o);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}document.addEventListener("turbo:load",(function(){for(var e,n=t(document.getElementsByClassName("js-autoscroll-horizontal"));!(e=n()).done;){var o=e.value,r=o.offsetLeft,i=this.getElementsByClassName("js-active");if(i.length>0){var s=i[0].offsetLeft;o.scrollLeft=s-r}}}))},3116:function(){window.initButtonGroups=function(){document.querySelectorAll('[data-toggle="buttons"] .btn').forEach((function(t){var e=t.querySelector('input:not([type="hidden"])');t.classList.toggle("active",e.checked||e.hasAttribute("checked"))})),document.querySelectorAll('[data-toggle="button"]').forEach((function(t){t.classList.toggle("active","true"===t.getAttribute("aria-pressed"))}))},document.addEventListener("turbo:load",(function(){return window.initButtonGroups()}))},4514:function(){window.DragNDrop={init:function(t,e){this.container=t,this.callback=e,this.bind_listeners()},isSupported:function(){var t=document.createElement("div");return(void 0!==t.draggable||void 0!==t.ondragstart&&void 0!==t.ondrop)&&void 0!==window.FormData&&void 0!==window.FileReader},bind_listeners:function(){var t=this;this.container.on("drag dragstart dragend dragover dragenter dragleave drop",(function(t){t.preventDefault(),t.stopPropagation()})).on("dragover dragenter",(function(e){t.container.addClass("is-dragover")})).on("dragleave dragend drop",(function(e){t.container.removeClass("is-dragover")})).on("drop",(function(e){var n=e.originalEvent.dataTransfer.files;"function"===typeof t.callback&&t.callback(n)}))}}},5125:function(t,e,n){var o=n(8291);window.initHtmlTooltips=function(){o("[data-html-tooltip-id]").each((function(){var t=o(this);t.tooltip({html:!0,title:o("#"+this.dataset.htmlTooltipId).html(),sanitizeFn:function(t){return t},trigger:"click hover focus",boundary:"body",placement:this.dataset.placement||"bottom"}),t.on("inserted.bs.tooltip",(function(){this.dataset.tooltipClass&&o("#"+t.attr("aria-describedby")).addClass(this.dataset.tooltipClass)})),t.on("shown.bs.tooltip",(function(){this.classList.add("hover");var e=null,n=o("#"+t.attr("aria-describedby"));function r(){t.tooltip("hide")}n.on("mouseenter",(function(){clearTimeout(e)})),n.on("mouseleave",(function(){e=setTimeout(r,20)})),t.on("mouseenter",(function(){clearTimeout(e)})),t.on("mouseleave",(function(){e=setTimeout(r,20)})),t.on("hide.bs.tooltip",(function(e){(t.is(":hover")||n.is(":hover"))&&e.preventDefault()})),o(document).on("touchstart",r)}))}))},document.addEventListener("turbo:load",(function(){window.initHtmlTooltips()}))},7037:function(t,e,n){var o=n(8291);document.addEventListener("turbo:load",(function(){return o(".js-prevent").on("click",(function(t){return t.preventDefault()}))}))},1942:function(t,e,n){"use strict";n.r(e);var o=n(9034),r=n.n(o);n(6348);window.diffHighestMeasures=function(t,e){return void 0===e&&(e=3),(t=t.split(" ")).slice(0,+(2*e-1)+1||void 0).join(" ").replace("minutes","mins")},window.initTimeDistance=function(){document.querySelectorAll(".time-distance").length&&document.querySelectorAll(".time-distance").forEach((function(t){var e,n=t.dataset,o=n.dateFrom,i=n.dateTo,s=n.measures;i?(e=window.diffHighestMeasures(r().preciseDiff(r()(o),r()(i)),s),t.innerText=e):setInterval((function(){e=window.diffHighestMeasures(r().preciseDiff(r()(o),r()()),s),t.innerText=e}),1e3)}))},document.addEventListener("turbo:load",(function(){return window.initTimeDistance()}))},3676:function(t,e,n){"use strict";n.r(e);var o=n(2841),r=n.n(o),i=n(8298),s=n(7579);function a(t,e,n,o,r,i,s){try{var a=t[i](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(o,r)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t){var e="function"===typeof Map?new Map:void 0;return u=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!==typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return l(t,arguments,f(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),d(o,t)},u(t)}function l(t,e,n){return l=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&d(r,n.prototype),r},l.apply(null,arguments)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}var m=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,d(e,n);var u,l,f,m=o.prototype;return m.connectedCallback=function(){var t,e=(t=r().mark((function t(){var e,n,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,i.connectStreamSource)(this),e=new URL(window.cfg.better_stack_url),n=(0,s.createConsumer)("wss://"+e.host+"/cable"),o=n.subscriptions,t.abrupt("return",o.create(this.channel,{received:this.dispatchMessageEvent.bind(this)}));case 4:case"end":return t.stop()}}),t,this)})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){a(i,o,r,s,c,"next",t)}function c(t){a(i,o,r,s,c,"throw",t)}s(void 0)}))});return function(){return e.apply(this,arguments)}}(),m.disconnectedCallback=function(){(0,i.disconnectStreamSource)(this),this.subscription&&this.subscription.unsubscribe()},m.dispatchMessageEvent=function(t){var e=new MessageEvent("message",{data:t});return this.dispatchEvent(e)},u=o,(l=[{key:"channel",get:function(){return{channel:this.getAttribute("channel"),signed_stream_name:this.getAttribute("signed-stream-name")}}}])&&c(u.prototype,l),f&&c(u,f),Object.defineProperty(u,"prototype",{writable:!1}),o}(u(HTMLElement));customElements.define("turbo-cable-stream-betterstack-source",m)},4841:function(t,e,n){"use strict";n.d(e,{s:function(){return s}});var o=n(4290),r=n.n(o),i=(n(9908),n(8291));r().start(),n(4113);var s=function(t){return t.keys().forEach(t)};window.$=i,window.Rails=r(),s(n(272))},9515:function(t,e,n){"use strict";n(4841),n(1966),n(5546),n(5902),n(1767),n(7362)}},function(t){t.O(0,[750,101,561,392],(function(){return e=9515,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=status_page_v2-0fb1d7925e76fc9c1c14.js.map