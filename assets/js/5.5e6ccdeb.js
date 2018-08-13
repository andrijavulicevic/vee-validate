(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{221:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/y3504yr0l1?initialpath=%2F%23%2Finfer&module=%2Fsrc%2Fcomponents%2FInfer.vue",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}}),t._v(" "),a("p",[a("a",{attrs:{href:"https://codesandbox.io/s/y3504yr0l1?initialpath=%2F%23%2Finfer&module=%2Fsrc%2Fcomponents%2FInfer.vue",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit VeeValidate Examples"}}),a("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("This is a table of HTML attributes that is inferred as rules.")]),t._v(" "),t._m(7),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"inferred-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inferred-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Inferred Rules")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("While you can specify your rules in the "),e("code",[this._v("v-validate")]),this._v(" directive, vee-validate also deduces or infers additional rules based on the input type. For example if you have the following:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("required")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It would be redundant to specify "),e("code",[this._v("v-validate=\"'required|email'\"")]),this._v(". vee-validate will detect the input type and the required attribute and include those rules for you automatically, so you would only need to add "),e("code",[this._v("v-validate")]),this._v(" on the input.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("required")]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-validate")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"inferred-rules-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inferred-rules-reference","aria-hidden":"true"}},[this._v("#")]),this._v(" Inferred Rules Reference")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Attribute Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("th",[t._v("Rule")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"email"')]),t._v(" "),a("td",[a("code",[t._v("email")])])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"number"')]),t._v(" "),a("td",[a("code",[t._v("decimal")])])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"date"')]),t._v(" "),a("td",[a("code",[t._v("date_format:YYYY-MM-DD")])])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"datetime-local"')]),t._v(" "),a("td",[a("code",[t._v("date_format: YYYY-MM-DDThh:mm")])])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"time"')]),t._v(" "),a("td",[a("code",[t._v("date_format:hh:mm")]),t._v(" or "),a("code",[t._v("date_format:hh:mm:ss")]),t._v(" depending on the step value")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"week"')]),t._v(" "),a("td",[a("code",[t._v("date_format:YYYY-Www")])])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('"month')]),t._v(" "),a("td",[a("code",[t._v("date_format:YYYY-MM")])])]),t._v(" "),a("tr",[a("td",[t._v("min")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("val")]),t._v(" "),a("td",[t._v("min_value: val")])]),t._v(" "),a("tr",[a("td",[t._v("max")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("val")]),t._v(" "),a("td",[t._v("max_value: val")])]),t._v(" "),a("tr",[a("td",[t._v("pattern")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("rgx")]),t._v(" "),a("td",[t._v("regex: rgx")])]),t._v(" "),a("tr",[a("td",[t._v("required")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("em",[t._v("none")])]),t._v(" "),a("td",[t._v("required")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("This feature does not work on custom components, only HTML5 inputs can take advantage from this feature.")])])}],!1,null,null,null);e.default=n.exports}}]);