import{o as e,c as d,r as f,d as s}from"./index.esm-DhwY4kHm.js";function _(o,r,u){var a=s(o)||r||u?{next:o,error:r,complete:u}:o;return a?e(function(v,n){var t;(t=a.subscribe)===null||t===void 0||t.call(a);var c=!0;v.subscribe(d(n,function(i){var l;(l=a.next)===null||l===void 0||l.call(a,i),n.next(i)},function(){var i;c=!1,(i=a.complete)===null||i===void 0||i.call(a),n.complete()},function(i){var l;c=!1,(l=a.error)===null||l===void 0||l.call(a,i),n.error(i)},function(){var i,l;c&&((i=a.unsubscribe)===null||i===void 0||i.call(a)),(l=a.finalize)===null||l===void 0||l.call(a)}))}):f}export{_ as t};
//# sourceMappingURL=tap-DGvjHJum.js.map
