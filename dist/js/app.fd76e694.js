(function(t){function e(e){for(var n,a,o=e[0],l=e[1],c=e[2],h=0,f=[];h<o.length;h++)a=o[h],s[a]&&f.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("c21b"),s=i.n(n);s.a},"134a":function(t,e,i){},"239a":function(t,e,i){"use strict";var n=i("134a"),s=i.n(n);s.a},3455:function(t,e,i){"use strict";var n=i("7b48"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("PostList")],1)},r=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("div",{staticClass:"spacer"}),i("div",{staticClass:"logo"},[i("div",{staticClass:"wrapper"},[i("h1",[t._v("ring  "),i("span",{staticClass:"serif-font"},[t._v("of")]),t._v("   truth")])])]),i("div",{staticClass:"spacer"})])}],l={},c=l,u=(i("8baf"),i("2877")),h=Object(u["a"])(c,a,o,!1,null,null,null);h.options.__file="Header.vue";var f=h.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"postlist"},[i("div",{staticClass:"left"}),i("div",{staticClass:"center"},[i("div",{staticClass:"button-row"},[t._v("\n      a web of sound\n    ")]),t._l(t.articleList,function(t){return i("Posts",{key:t,attrs:{articleNumber:t}})})],2),i("div",{staticClass:"right"})])},p=[],v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Foldable",{attrs:{isArticleHere:t.articleFetched}},[i("div",{staticClass:"postbg",domProps:{innerHTML:t._s(t.postInput)}})])},g=[],b=i("0e54"),m=i.n(b),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"folder"},[t._t("closebtn",[i("div",{staticClass:"sticky-button",style:{opacity:t.collapsed?0:t.isCollapseVisible?0:.7,cursor:t.collapsed?"default":"pointer"},on:{click:t.toggle}},[i("div",{staticClass:"cross"},[i("svg",{attrs:{viewbox:"0 0 30 30",width:"30",height:"30"}},[i("path",{attrs:{d:"M 10,10 L 20,20 M 20,10 L 10,20"}})])])])]),i("div",{ref:"container",staticClass:"folder-container",style:{maxHeight:t.currentMaxHeight+"px"}},[t._t("default")],2),t._t("readon",[t.reachThreshold?i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"folder-readon",class:{collapsed:t.collapsed},on:{click:t.toggle}},[i("span",{staticClass:"folder-text"},[t._v("\n        "+t._s(t.collapsed?"Read on":"Collapse")+"\n      ")])]):t._e()],{toggle:t.toggle,collapsed:t.collapsed})],2)},y=[],x=(i("a481"),i("c5f6"),120),C={props:{articleIsHere:{type:Boolean,default:!1},minHeight:{type:Number,default:x},height:{type:[Number,String],default:x},async:{type:Boolean,default:!0},timeout:{type:Number,default:5e3}},data:function(){var t=this.height;return"number"===typeof this.height&&this.height<this.minHeight&&(t=this.minHeight),{collapsed:!0,currentMaxHeight:t,threshold:t,reachThreshold:!0,percentageMode:"string"===typeof this.height&&-1!==this.height.indexOf("%"),percentage:null,isCollapseVisible:!1}},created:function(){this.percentageMode?this.percentage=parseInt(this.threshold.replace("%","").trim())/100:"string"===typeof this.height&&(this.currentMaxHeight=this.threshold=x)},mounted:function(){this.handleMount(),setTimeout(this.handleMount,50),this.async&&H({el:this.$refs.container,callback:this.handleMount,timeout:this.timeout})},methods:{visibilityChanged:function(t){this.isCollapseVisible=!!t},handleMount:function(){var t=this.$refs.container.scrollHeight;this.calculateThreshold(t),this.checkReachThresfold(t)},checkReachThresfold:function(t){this.reachThreshold=t>this.threshold},calculateThreshold:function(t){if(this.percentageMode){var e=t*this.percentage;e<this.minHeight&&(e=this.minHeight),this.currentMaxHeight=e,this.threshold=e}},toggle:function(t){"span"!==t.target.localName&&this.collapsed||(this.collapsed=!this.collapsed,this.collapsed?this.currentMaxHeight=this.threshold:this.currentMaxHeight=this.$refs.container.scrollHeight)}}};function H(t){var e,i,n=t.el,s=t.callback,r=t.timeout,a=n.scrollHeight,o=100,l=0,c=r/o;function u(){l++,e=n.scrollHeight,a!==e&&(s(e),i&&clearTimeout(i)),a=e,l<=c&&(i=setTimeout(u,o))}u()}var M=C,w=(i("3455"),Object(u["a"])(M,_,y,!1,null,null,null));w.options.__file="Foldable.vue";var O=w.exports;m.a.setOptions({gfm:!0,breaks:!0,highlight:function(t){return i("1487").highlight("javascript",t).value}});var k={data:function(){return{postInput:"Fetching article...",baseUrl:"https://raw.githubusercontent.com/lemniscarte/ring-of-truth/master/src/assets/",articleFetched:!1}},components:{Foldable:O},props:["articleNumber","isArticleHere"],mounted:function(){this.fetchMarkdown()},methods:{fetchMarkdown:function(){var t=this;fetch(this.baseUrl+this.articleNumber+".md").then(this.handleErrors).then(function(t){return t.text()}).then(function(t){return m()(t)}).then(function(e){t.postInput=e,t.articleFetched=!0}).catch(function(e){return t.postInput=""+e}).then()},handleErrors:function(t){if(!t.ok)throw Error(t.statusText);return t}}},T=k,j=(i("eebb"),Object(u["a"])(T,v,g,!1,null,null,null));j.options.__file="Posts.vue";var P=j.exports,$={data:function(){return{articleList:[1,2,3]}},components:{Posts:P}},E=$,L=(i("239a"),Object(u["a"])(E,d,p,!1,null,null,null));L.options.__file="PostList.vue";var N=L.exports,F={name:"app",components:{Header:f,PostList:N}},I=F,S=(i("034f"),Object(u["a"])(I,s,r,!1,null,null,null));S.options.__file="App.vue";var A=S.exports,R=i("85fe");n["a"].use(R["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(A)}}).$mount("#app")},7772:function(t,e,i){},"7b48":function(t,e,i){},"8baf":function(t,e,i){"use strict";var n=i("7772"),s=i.n(n);s.a},a133:function(t,e,i){},c21b:function(t,e,i){},eebb:function(t,e,i){"use strict";var n=i("a133"),s=i.n(n);s.a}});