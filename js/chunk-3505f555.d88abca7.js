(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3505f555"],{"3b7b":function(t,i,s){},dc11:function(t,i,s){"use strict";s("3b7b")},e4bb:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"history-container"},[t._m(0),t.myHistory.length<1?s("h3",[t._v("No shopping history")]):t._e(),t._l(t.getHistory,(function(i,n){return s("ul",{key:n},[s("li",{on:{click:function(i){return t.getDetail(n)}}},[t._v(" "+t._s(i.date)+" "),s("span",[t._v("$"+t._s(i.total))])])])}))],2)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("h1",[t._v(" History "),s("span",{staticClass:"material-icons-outlined"},[t._v(" history ")])])}],r={data:function(){return{myHistory:[]}},computed:{getHistory:function(){return this.myHistory=JSON.parse(JSON.stringify(this.$store.state.historyData)),this.myHistory}},methods:{getDetail:function(t){this.$router.push("/history/detail/"+t)}}},o=r,a=(s("dc11"),s("2877")),c=Object(a["a"])(o,n,e,!1,null,"57608a00",null);i["default"]=c.exports}}]);
//# sourceMappingURL=chunk-3505f555.d88abca7.js.map