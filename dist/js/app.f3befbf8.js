(function(t){function e(e){for(var i,a,o=e[0],l=e[1],c=e[2],h=0,f=[];h<o.length;h++)a=o[h],s[a]&&f.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("c21b"),s=n.n(i);s.a},"134a":function(t,e,n){},"239a":function(t,e,n){"use strict";var i=n("134a"),s=n.n(i);s.a},3455:function(t,e,n){"use strict";var i=n("7b48"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("PostList")],1)},r=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"spacer"}),n("div",{staticClass:"logo"},[n("div",{staticClass:"wrapper"},[n("h1",[t._v("ring  "),n("span",{staticClass:"serif-font"},[t._v("of")]),t._v("   truth")])])]),n("div",{staticClass:"spacer"})])}],l={},c=l,u=(n("8baf"),n("2877")),h=Object(u["a"])(c,a,o,!1,null,null,null);h.options.__file="Header.vue";var f=h.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postlist"},[n("div",{staticClass:"left"}),n("div",{staticClass:"center"},[n("div",{staticClass:"button-row"},[t._v("\n      a web of sound\n    ")]),t._l(t.articleList,function(t){return n("Posts",{key:t,attrs:{articleNumber:t}})})],2),n("div",{staticClass:"right"})])},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Foldable",{attrs:{articleIsHere:t.articleFetched}},[n("div",{staticClass:"postbg",domProps:{innerHTML:t._s(t.postInput)}})])},g=[],b=n("0e54"),m=n.n(b),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"folder"},[t._t("closebtn",[n("div",{staticClass:"sticky-button",style:{opacity:t.collapsed?0:t.isCollapseVisible?0:.7,cursor:t.collapsed?"default":"pointer"},on:{click:t.toggle}},[n("div",{staticClass:"cross"},[n("svg",{attrs:{viewbox:"0 0 30 30",width:"30",height:"30"}},[n("path",{attrs:{d:"M 10,10 L 20,20 M 20,10 L 10,20"}})])])])]),n("div",{ref:"container",staticClass:"folder-container",style:{maxHeight:t.currentMaxHeight+"px"}},[t._t("default")],2),t._t("readon",[t.reachThreshold?n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"folder-readon",class:{collapsed:t.collapsed},on:{click:t.toggle}},[n("span",{staticClass:"folder-text"},[t._v("\n        "+t._s(t.collapsed?"Read on":"Collapse")+"\n      ")])]):t._e()],{toggle:t.toggle,collapsed:t.collapsed})],2)},y=[],x=(n("a481"),n("c5f6"),120),C={props:{articleIsHere:{type:Boolean,default:!1},minHeight:{type:Number,default:x},height:{type:[Number,String],default:x},async:{type:Boolean,default:!0},timeout:{type:Number,default:5e3}},data:function(){var t=this.height;return"number"===typeof this.height&&this.height<this.minHeight&&(t=this.minHeight),{collapsed:!0,currentMaxHeight:t,threshold:t,reachThreshold:!0,percentageMode:"string"===typeof this.height&&-1!==this.height.indexOf("%"),percentage:null,isCollapseVisible:!1}},created:function(){this.percentageMode?this.percentage=parseInt(this.threshold.replace("%","").trim())/100:"string"===typeof this.height&&(this.currentMaxHeight=this.threshold=x)},mounted:function(){this.handleMount(),setTimeout(this.handleMount,50),this.async&&H({el:this.$refs.container,callback:this.handleMount,timeout:this.timeout})},methods:{visibilityChanged:function(t){this.isCollapseVisible=!!t},handleMount:function(){var t=this.$refs.container.scrollHeight;this.calculateThreshold(t),this.checkReachThresfold(t)},checkReachThresfold:function(t){this.reachThreshold=t>this.threshold},calculateThreshold:function(t){if(this.percentageMode){var e=t*this.percentage;e<this.minHeight&&(e=this.minHeight),this.currentMaxHeight=e,this.threshold=e}},toggle:function(t){"span"!==t.target.localName&&this.collapsed||(this.collapsed=!this.collapsed,this.collapsed?this.currentMaxHeight=this.threshold:this.currentMaxHeight=this.$refs.container.scrollHeight)}}};function H(t){var e,n,i=t.el,s=t.callback,r=t.timeout,a=i.scrollHeight,o=100,l=0,c=r/o;function u(){l++,e=i.scrollHeight,a!==e&&(s(e),n&&clearTimeout(n)),a=e,l<=c&&(n=setTimeout(u,o))}u()}var M=C,w=(n("3455"),Object(u["a"])(M,_,y,!1,null,null,null));w.options.__file="Foldable.vue";var O=w.exports;m.a.setOptions({gfm:!0,breaks:!0});var k={data:function(){return{postInput:"Loading...",baseUrl:"https://raw.githubusercontent.com/lemniscarte/ring-of-truth/master/src/assets/",articleFetched:!1}},components:{Foldable:O},props:["articleNumber","articleIsHere"],mounted:function(){this.fetchMarkdown()},methods:{fetchMarkdown:function(){var t=this;fetch(this.baseUrl+this.articleNumber+".md").then(this.handleErrors).then(function(t){return t.text()}).then(function(t){return m()(t)}).then(function(e){t.postInput=e,t.articleFetched=!0}).catch(function(e){return t.postInput=""+e}).then()},handleErrors:function(t){if(!t.ok)throw Error(t.statusText);return t}}},T=k,j=(n("eebb"),Object(u["a"])(T,v,g,!1,null,null,null));j.options.__file="Posts.vue";var P=j.exports,$={data:function(){return{articleList:[1,2]}},components:{Posts:P}},E=$,L=(n("239a"),Object(u["a"])(E,d,p,!1,null,null,null));L.options.__file="PostList.vue";var I=L.exports,N={name:"app",components:{Header:f,PostList:I}},F=N,S=(n("034f"),Object(u["a"])(F,s,r,!1,null,null,null));S.options.__file="App.vue";var R=S.exports,V=n("85fe");i["a"].use(V["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(R)}}).$mount("#app")},7772:function(t,e,n){},"7b48":function(t,e,n){},"8baf":function(t,e,n){"use strict";var i=n("7772"),s=n.n(i);s.a},a133:function(t,e,n){},c21b:function(t,e,n){},eebb:function(t,e,n){"use strict";var i=n("a133"),s=n.n(i);s.a}});