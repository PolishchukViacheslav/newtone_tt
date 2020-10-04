(this.webpackJsonpnewtone_tt=this.webpackJsonpnewtone_tt||[]).push([[0],{30:function(e,t,a){e.exports=a(51)},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(16),l=a.n(s),i=a(8),o=a(13),u=(a(39),a(40),a(3)),m=(a(41),function(e){return e.reduce((function(e,t){if(Object.prototype.hasOwnProperty.call(t,"specialPrice")){var a=t.specialPrice,n=t.cartWeight,c=t.price;if(n/a.weight>=1){var r=Math.floor(n/a.weight),s=n%(r*a.weight);return e+(r*a.price+s*c)}return e+n*c}return e+t.cartWeight*t.price}),0)}),p=a(2),_=a(5),d=a(29),f=a(28),b=a(12),E=Object(b.c)({name:"cart",initialState:{purchases:{}},reducers:{setPurchases:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{purchases:Object(p.a)(Object(p.a)({},e.purchases),t.payload)})},delProduct:function(e,t){var a=e.purchases,n=t.payload,c=(a[n],Object(d.a)(a,[n].map(f.a)));return Object.keys(e.purchases)?Object(p.a)(Object(p.a)({},e),{},{purchases:c}):e}}}),h=E.actions,y=h.setPurchases,v=h.delProduct,N=function(e){return e.cart.purchases},g=E.reducer,j=a(11),O=a(20),w=a.n(O),k=a(26),x=Object(b.b)("products/getProducts",function(){var e=Object(k.a)(w.a.mark((function e(t){var a,n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,c=n.results,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(b.c)({name:"products",initialState:{list:[{name:"banana",img:"https://content.silpo.ua/sku/ecommerce/3/480x480wwm/32485_480x480wwm_96440ee6-d6f0-e532-2aa7-422557c42cfc.png",price:10,per:"kg"},{name:"apple",img:"https://content.silpo.ua/sku/ecommerce/15/480x480wwm/152947_480x480wwm_c7692e8f-ee6a-375d-f624-cbef6ba3f591.png",price:8,per:"kg"},{name:"papaya",img:"https://content.silpo.ua/sku/ecommerce/33/480x480wwm/339508_480x480wwm_74615496-1da2-f90a-f50a-a973f3b59875.png",price:10,specialPrice:{price:25,weight:3},per:"kg"}],isLoading:!1,error:""},reducers:{setProducts:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{list:t.payload})},setIsLoading:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{isLoading:t.payload})},setError:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{error:t.payload})}},extraReducers:(n={},Object(j.a)(n,x.fulfilled,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{list:t.payload,isLoading:!1,error:""})})),Object(j.a)(n,x.pending,(function(e){return Object(p.a)(Object(p.a)({},e),{},{isLoading:!0})})),Object(j.a)(n,x.rejected,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{isLoading:!1,error:t.payload})})),n)}),C=P.actions,$=(C.setProducts,C.setIsLoading,C.setError,function(e){return e.products.list}),q=P.reducer,L=Object(_.a)($,N,(function(e,t){var a=[];return Object.keys(t).forEach((function(n){var c=e.find((function(e){return e.name===n}));a.push(Object(p.a)(Object(p.a)({},c),{},{cartWeight:t[n]}))})),a})),W=(a(43),function(){var e=Object(i.c)(L),t=Object(i.b)();return r.a.createElement("ul",null,e.map((function(e){return r.a.createElement("li",{key:e.name,className:"cart__product details"},r.a.createElement("div",{className:"details__presentation"},r.a.createElement("img",{src:e.img,alt:"product",className:"details__img"}),r.a.createElement("span",{className:"details__weight"},"weight ".concat(e.cartWeight).concat(e.per)),r.a.createElement("span",{className:"details__price"},"price $".concat(e.price)),e.specialPrice&&r.a.createElement("span",{className:"details__price--special"},"special $".concat(e.specialPrice.price,"/").concat(e.specialPrice.weight).concat(e.per))),r.a.createElement("div",{className:"details__cost"},r.a.createElement("span",{className:"details__total"},"total $".concat(m([e])))),r.a.createElement("button",{type:"button",className:"details__remove_btn",onClick:function(){return t(v(e.name))}},"x"))})))}),S=function(){var e=Object(i.c)(L),t=Object(u.f)(),a=Object(c.useMemo)((function(){return m(e)}),[e]),n=e.reduce((function(e,t){return e+t.cartWeight*t.price}),0)-a||void 0;return r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"cart__products_area"},r.a.createElement(W,null)),r.a.createElement("div",{className:"cart__payments payments"},r.a.createElement("div",{className:"payments__item payment"},r.a.createElement("span",{className:"payment__title"},"Subtotal"),r.a.createElement("span",{className:"payment__value"},"$".concat(a))),n&&r.a.createElement("div",{className:"payments__item payment"},r.a.createElement("span",{className:"payment__title"},"You saved"),r.a.createElement("span",{className:"payment__value"},"$".concat(n))),r.a.createElement("div",{className:"payments__item payment"},r.a.createElement("span",{className:"payment__title"},"Delivery"),r.a.createElement("span",{className:"payment__value"},"Free")),r.a.createElement("div",{className:"payments__item payment"},r.a.createElement("span",{className:"payment__title"},"Taxes and fees"),r.a.createElement("span",{className:"payment__value"},"- -")),r.a.createElement("div",{className:"payments__item total_payment"},r.a.createElement("span",{className:"total_payment__title"},"Est.total"),r.a.createElement("span",{className:"total_payment__value"},"$".concat(a))),r.a.createElement("div",{className:"payments__buttons"},r.a.createElement("button",{type:"button",className:"payments__pay_button"},"Pay"),r.a.createElement("button",{type:"button",className:"payments__shop_button",onClick:function(){t.push("/products")}},"Go shopping"))))},B=(a(45),a(46),function(){var e=Object(u.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header__title"},"Horns&Hooves"),r.a.createElement("button",{type:"button",className:"header__button",onClick:function(){e.push("/cart")}},"Cart"))}),I=function(e){var t=e.children;return r.a.createElement("div",{className:"layout"},r.a.createElement("div",{className:"layout__header header"},r.a.createElement(B,null)),t)},M=function(){return r.a.createElement(I,null,r.a.createElement(S,null))},D=(a(47),a(27)),F=(a(48),function(e){var t=e.name,a=e.unit,n=Object(i.c)(N)[t]||0,s=Object(c.useState)(n),l=Object(D.a)(s,2),o=l[0],u=l[1],m=Object(i.b)();return r.a.createElement("div",{className:"product__button weight_quantity"},r.a.createElement("span",{className:"weight_quantity__minus",role:"presentation",onClick:function(){if(0!==o){var e=Number(o)-1;if(0===e)return m(v(t)),void u(e);u(e),m(y(Object(j.a)({},t,e)))}}},"-"),r.a.createElement("span",{className:"weight_quantity__quantity_field"},r.a.createElement("input",{type:"text",className:"weight_quantity__input",value:o,onChange:function(e){var a=e.target.value.replace(/^0+|\D$/,"");a.length>2||(u(Number(a)),m(y(Object(j.a)({},t,Number(a)))))},onBlur:function(){""===o&&(u(0),m(v(t)))},onClick:function(){o||u("")}}),r.a.createElement("span",{className:"weight_quantity__unit"},a)),r.a.createElement("span",{className:"weight_quantity__plus",role:"presentation",onClick:function(){var e=Number(o)+1;e>99||(u(e),m(y(Object(j.a)({},t,e))))}},"+"))}),G=function(e){var t=e.terms,a=e.unit;return r.a.createElement("span",{className:"product__special_price"},"special price ".concat(t.price,"$/").concat(t.weight).concat(a))},H=function(e){var t=e.data,a=t.name.replace(/^./,t.name[0].toUpperCase());return r.a.createElement("li",{className:"product"},r.a.createElement("img",{src:t.img,alt:"product foto",className:"product__foto"}),r.a.createElement("div",{className:"product__description"},r.a.createElement("div",{className:"product__title_area"},r.a.createElement("h2",{className:"product__title"},a),r.a.createElement("h5",{className:"product__weight_units"},t.per)),t.specialPrice&&r.a.createElement(G,{terms:t.specialPrice,unit:t.per}),r.a.createElement("div",{className:"product__footer"},r.a.createElement("div",{className:"product__price"},t.price),r.a.createElement(F,{unit:t.per,name:t.name}))))},J=(a(49),function(){var e=Object(i.c)($);return r.a.createElement("div",{className:"products"},r.a.createElement("ul",{className:"products__list"},e.map((function(e){return r.a.createElement(H,{key:e.name,data:e})}))))}),A=function(){return r.a.createElement(I,null,r.a.createElement(J,null))},R=(a(50),function(){var e=Object(u.f)();return r.a.createElement("button",{type:"button",className:"start_button",onClick:function(){e.push("/products")}},"GO!")}),T=function(){return r.a.createElement(I,null,r.a.createElement(R,null))},U=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:T}),r.a.createElement(u.a,{exact:!0,path:"/products",component:A}),r.a.createElement(u.a,{exact:!0,path:"/cart",component:M}),r.a.createElement(u.a,{component:T})))},Y=Object(b.a)({reducer:{products:q,cart:g}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:Y},r.a.createElement(o.a,null,r.a.createElement(U,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.48f5c2d3.chunk.js.map