(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2qYH":function(t,a,s){"use strict";s.r(a);var e=s("A6W1"),i=s("BA+P"),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},n=s("KHd+"),r=null,c=Object(n.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("# "+this._s(this.$page.tag.title))]),a("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return a("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r&&r(c);a.default=c.exports},A6W1:function(t,a,s){"use strict";var e={props:[]},i=(s("ArLL"),s("KHd+")),o=s("Kw5r"),n=o.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Nathan Louie"}},c=function(t){var a=t.options;a.__staticData?a.__staticData.data=r:(a.__staticData=o.a.observable({data:r}),a.computed=n({$static:function(){return a.__staticData.data}},a.computed))},l=Object(i.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"author"},[a("h1",{staticClass:"author__site-title"},[this._v("\n    Nathan Louie\n  ")]),a("p",{staticClass:"author__intro"},[this._v("\n    I'm a high-school developer making projects I find fun!\n  ")]),a("p",{staticClass:"author__links"},[a("a",{attrs:{href:"mailto:nathanhlouie@gmail.com"}},[a("font-awesome",{attrs:{icon:"envelope",size:"lg"}})],1),a("a",{attrs:{href:"//github.com/nathan-louie"}},[a("font-awesome",{attrs:{icon:["fab","github"],size:"lg"}})],1),a("a",{attrs:{href:"//twitter.com/nathanhlouie"}},[a("font-awesome",{attrs:{icon:["fab","twitter"],size:"lg"}})],1)])])}),[],!1,null,null,null);"function"==typeof c&&c(l);a.a=l.exports},AO8t:function(t,a,s){},ArLL:function(t,a,s){"use strict";s("AO8t")},"BA+P":function(t,a,s){"use strict";var e={components:{},props:["post"]},i=(s("YDir"),s("KHd+")),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[s("div",{staticClass:"post-card__header"},[t.post.cover_image?s("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),s("div",{staticClass:"post-card__content"},[s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),s("g-link",{staticClass:"post-card__link",attrs:{to:{path:t.post.path}}},[t._v("Link")])],1)])}),[],!1,null,null,null);a.a=o.exports},NAO6:function(t,a,s){},YDir:function(t,a,s){"use strict";s("NAO6")}}]);