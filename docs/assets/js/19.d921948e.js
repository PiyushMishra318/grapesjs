(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{253:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("With this module is possible to manage components inside the canvas. You can customize the initial state of the module from the editor initialization, by passing the following "),a("a",{attrs:{href:"https://github.com/artf/grapesjs/blob/master/src/dom_components/config/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Object"),a("OutboundLink")],1)]),t._m(1),a("p",[t._v("Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._m(2),t._m(3),t._m(4),a("p",[t._v("Load components from the passed object, if the object is empty will try to fetch them\nautonomously from the selected storage\nThe fetched data will be added to the collection")]),t._m(5),a("ul",[a("li",[a("code",[t._v("data")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Object of data to load (optional, default "),a("code",[t._v("''")]),t._v(")")])]),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Loaded data")]),t._m(6),a("p",[t._v("Store components on the selected storage")]),t._m(7),a("ul",[a("li",[a("code",[t._v("noStore")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),a("OutboundLink")],1)]),t._v(" If true, won't store")])]),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Data to store")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),a("p",[t._v("Returns wrapper's children collection. Once you have the collection you can\nadd other Components(Models) inside. Each component can have several nested\ncomponents inside and you can nest them as more as you wish.")]),t._m(14),t._m(15),t._m(16),t._m(17),a("p",[t._v("Add new components to the wrapper's children. It's the same\nas 'domComponents.getComponents().add(...)'")]),t._m(18),a("ul",[a("li",[a("code",[t._v("component")]),a("strong",[t._v("("),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1),t._v(" | Component | "),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),a("OutboundLink")],1),t._v("<"),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1),t._v(">)")]),t._v(" Component/s to add\n"),a("ul",[a("li",[a("code",[t._v("component.tagName")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" Tag name (optional, default "),a("code",[t._v("'div'")]),t._v(")")]),a("li",[a("code",[t._v("component.type")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" Type of the component. Available: ''(default), 'text', 'image' (optional, default "),a("code",[t._v("''")]),t._v(")")]),a("li",[a("code",[t._v("component.removable")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" If component is removable (optional, default "),a("code",[t._v("true")]),t._v(")")]),a("li",[a("code",[t._v("component.draggable")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" If is possible to move the component around the structure (optional, default "),a("code",[t._v("true")]),t._v(")")]),a("li",[a("code",[t._v("component.droppable")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" If is possible to drop inside other components (optional, default "),a("code",[t._v("true")]),t._v(")")]),a("li",[a("code",[t._v("component.badgable")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" If the badge is visible when the component is selected (optional, default "),a("code",[t._v("true")]),t._v(")")]),a("li",[a("code",[t._v("component.stylable")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" If is possible to style component (optional, default "),a("code",[t._v("true")]),t._v(")")]),a("li",[a("code",[t._v("component.copyable")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("boolean"),a("OutboundLink")],1)]),t._v(" If is possible to copy&paste the component (optional, default "),a("code",[t._v("true")]),t._v(")")]),a("li",[a("code",[t._v("component.content")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),a("OutboundLink")],1)]),t._v(" String inside component (optional, default "),a("code",[t._v("''")]),t._v(")")]),a("li",[a("code",[t._v("component.style")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Style object (optional, default "),a("code",[t._v("{}")]),t._v(")")]),a("li",[a("code",[t._v("component.attributes")]),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),a("OutboundLink")],1)]),t._v(" Attribute object (optional, default "),a("code",[t._v("{}")]),t._v(")")])])])]),t._m(19),t._m(20),a("p",[t._v("Returns "),a("strong",[t._v("(Component | "),a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),a("OutboundLink")],1),t._v("<Component>)")]),t._v(" Component/s added")]),t._m(21),a("p",[t._v("Render and returns wrapper element with all components inside.\nOnce the wrapper is rendered, and it's what happens when you init the editor,\nthe all new components will be added automatically and property changes are all\nupdated immediately")]),a("p",[t._v("Returns "),a("strong",[a("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),a("OutboundLink")],1)])]),t._m(22),a("p",[t._v("Remove all components")]),t._m(23)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"domcomponents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#domcomponents","aria-hidden":"true"}},[this._v("#")]),this._v(" DomComponents")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n domComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{attrs:{class:"token comment"}},[t._v("// options")]),t._v("\n "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" domComponents "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DomComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"#getwrapper"}},[this._v("getWrapper")])]),e("li",[e("a",{attrs:{href:"#getcomponents"}},[this._v("getComponents")])]),e("li",[e("a",{attrs:{href:"#addcomponent"}},[this._v("addComponent")])]),e("li",[e("a",{attrs:{href:"#clear"}},[this._v("clear")])]),e("li",[e("a",{attrs:{href:"#load"}},[this._v("load")])]),e("li",[e("a",{attrs:{href:"#store"}},[this._v("store")])]),e("li",[e("a",{attrs:{href:"#render"}},[this._v("render")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#load","aria-hidden":"true"}},[this._v("#")]),this._v(" load")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Parameters")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store","aria-hidden":"true"}},[this._v("#")]),this._v(" store")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Parameters")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getwrapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getwrapper","aria-hidden":"true"}},[this._v("#")]),this._v(" getWrapper")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Returns root component inside the canvas. Something like "),e("code",[this._v("<body>")]),this._v(" inside HTML page\nThe wrapper doesn't differ from the original Component Model")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Change background of the wrapper and set some attribute")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wrapper "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" domComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getWrapper")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwrapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'style'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'background-color'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwrapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'attributes'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Returns "),e("strong",[this._v("Component")]),this._v(" Root Component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getcomponents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcomponents","aria-hidden":"true"}},[this._v("#")]),this._v(" getComponents")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Let's add some component")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wrapperChildren "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" domComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getComponents")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" comp1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" wrapperChildren"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  style"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'background-color'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" comp2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" wrapperChildren"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tagName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'span'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attributes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello!'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Now let's add an other one inside first component")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// First we have to get the collection inside. Each")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// component has 'components' property")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" comp1Children "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" comp1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'components'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Procede as before. You could also add multiple objects")]),t._v("\ncomp1Children"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" style"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'background-color'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" style"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" height"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'100px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'100px'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// Remove comp2")]),t._v("\nwrapperChildren"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("remove")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comp2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Returns "),e("strong",[this._v("Components")]),this._v(" Collection of components")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"addcomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addcomponent","aria-hidden":"true"}},[this._v("#")]),this._v(" addComponent")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Parameters")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// Example of a new component with some extra property")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" comp1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" domComponents"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addComponent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tagName"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'div'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  removable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Can't remove it")]),t._v("\n  draggable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Can't move it")]),t._v("\n  copyable"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Disable copy/past")]),t._v("\n  content"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Content text'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Text inside component")]),t._v("\n  style"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'red'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attributes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'here'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[this._v("#")]),this._v(" render")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"clear"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clear","aria-hidden":"true"}},[this._v("#")]),this._v(" clear")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Returns "),e("strong",[this._v("this")])])}],!1,null,null,null);s.options.__file="components.md";e.default=s.exports}}]);