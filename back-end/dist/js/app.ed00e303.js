(function(){"use strict";var t={6747:function(t,r,n){var e=n(5130),o=n(6768);const a={class:"page-wrap"};function s(t,r,n,e,s,u){const c=(0,o.g2)("NavBar"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c,{user:s.user},null,8,["user"]),(0,o.Lk)("div",a,[(0,o.bF)(i,{user:s.user},null,8,["user"])])],64)}var u=n(6409);const c={class:"nav-bar"},i={class:"logo-wrap"},d=["src"],l={class:"nav-buttons-wrap"};function p(t,r,n,e,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",c,[(0,o.bF)(u,{to:"/products",class:"products-link"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",i,[(0,o.Lk)("img",{src:a.logo},null,8,d)])])),_:1})]),(0,o.Lk)("div",l,[n.user?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out")):(0,o.Q3)("",!0),(0,o.bF)(u,{to:"/cart"},{default:(0,o.k6)((()=>r[1]||(r[1]=[(0,o.Lk)("button",null,"Shopping Cart",-1)]))),_:1})])],64)}var m=n.p+"img/logo-hexagon.d2768201.svg",g={name:"NavBar",props:["user"],data(){return{logo:m}},methods:{signOut(){const t=(0,u.xI)();(0,u.CI)(t)}}},f=n(1241);const h=(0,f.A)(g,[["render",p]]);var v=h,k={name:"App",components:{NavBar:v},data(){return{user:null}},created(){const t=(0,u.xI)();(0,u.hg)(t,(t=>{this.user=t}))}};const C=(0,f.A)(k,[["render",s]]);var I=C,b=n(1387);const y={key:0},w={key:1};function L(t,r,n,e,a,s){const u=(0,o.g2)("ShoppingCartList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[r[2]||(r[2]=(0,o.Lk)("h1",null,"Shopping Cart",-1)),a.cartItems.length>0?((0,o.uX)(),(0,o.CE)("div",y,[(0,o.bF)(u,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),cartItems:a.cartItems},null,8,["cartItems"]),r[1]||(r[1]=(0,o.Lk)("button",{class:"checkout-button"},"Proceed to Checkout",-1))])):((0,o.uX)(),(0,o.CE)("div",w," Your cart is empty "))],64)}var F=n(4232);const S=["src","alt"],A={class:"details-wrap"},P=["onClick"];function E(t,r,n,e,a,s){return(0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.cartItems,(r=>((0,o.uX)(),(0,o.CE)("div",{class:"product-container",key:r.id},[(0,o.Lk)("img",{src:r.imageURL,alt:r.name,class:"product-image"},null,8,S),(0,o.Lk)("div",A,[(0,o.Lk)("h3",null,(0,F.v_)(r.name),1),(0,o.Lk)("p",null,(0,F.v_)(r.price),1)]),(0,o.Lk)("button",{onClick:n=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove from Cart",8,P)])))),128)}var O={name:"ShoppingCartList",props:["cartItems"],emits:["remove-from-cart"]};const X=(0,f.A)(O,[["render",E]]);var _=X,x=n(4373),j={name:"ShoppingCartPage",props:["user"],data(){return{cartItems:[]}},watch:{async user(){this.updateCart()}},components:{ShoppingCartList:_},async created(){this.updateCart()},methods:{async updateCart(){if(this.user?.uid){const t=await x.A.get(`/api/users/${this.user.uid}/cart`);this.cartItems=t.data}},async removeFromCart(t){const r=await x.A.delete(`/api/users/${this.user.uid}/cart/${t}`);this.cartItems=r.data}}};const $=(0,f.A)(j,[["render",L]]);var T=$;function K(t,r,n,e,a,s){const u=(0,o.g2)("ProductsList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[r[0]||(r[0]=(0,o.Lk)("h1",null,"Products",-1)),(0,o.bF)(u,{products:a.products},null,8,["products"])],64)}const N={class:"grid-wrap"},M=["src"],B={class:"product-name"},R={class:"product-price"};function D(t,r,n,e,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",N,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.products,(t=>((0,o.uX)(),(0,o.CE)("div",{class:"product-item",key:t.id},[(0,o.Lk)("img",{src:t.imageURL},null,8,M),(0,o.Lk)("h3",B,(0,F.v_)(t.name),1),(0,o.Lk)("p",R,(0,F.v_)(t.price),1),(0,o.bF)(u,{to:"products/"+t.id},{default:(0,o.k6)((()=>r[0]||(r[0]=[(0,o.Lk)("button",null,"View Details",-1)]))),_:2},1032,["to"])])))),128))])}var U={name:"ProductsList",props:["products"]};const J=(0,f.A)(U,[["render",D]]);var Q=J,V={name:"ProductsPage",components:{ProductsList:Q},data(){return{products:[]}},async created(){const t=await x.A.get("/api/products");this.products=t.data}};const z=(0,f.A)(V,[["render",K]]);var W=z;const Y={key:0},q={class:"img-wrap"},G=["src"],H={class:"product-details"},Z={class:"price"},tt=["disabled","textContent"],rt={key:1};function nt(t,r,n,e,a,s){const u=(0,o.g2)("NotFoundPage");return a.product?((0,o.uX)(),(0,o.CE)("div",Y,[(0,o.Lk)("div",q,[(0,o.Lk)("img",{src:a.product.imageURL},null,8,G)]),(0,o.Lk)("div",H,[(0,o.Lk)("h1",null,(0,F.v_)(a.product.name),1),(0,o.Lk)("h3",Z,(0,F.v_)(a.product.price),1),n.user?((0,o.uX)(),(0,o.CE)("button",{key:0,disabled:a.isInCart,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart",textContent:(0,F.v_)(s.buttonText)},null,8,tt)):((0,o.uX)(),(0,o.CE)("button",{key:1,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))}," Sign in to add to cart "))])])):((0,o.uX)(),(0,o.CE)("div",rt,[(0,o.bF)(u)]))}function et(t,r,n,e,a,s){return(0,o.uX)(),(0,o.CE)("h1",null,"404 Page Not Found")}var ot={name:"NotFoundPage"};const at=(0,f.A)(ot,[["render",et]]);var st=at,ut={name:"ProductDetailPage",props:["user"],components:{NotFoundPage:st},data(){return{productId:this.$route.params.productId,product:{},isInCart:!1}},computed:{buttonText(){return this.isInCart?"Already in cart":"Add to cart"}},watch:{async user(){this.updateIsInCart()}},methods:{async addToCart(){await x.A.post(`/api/users/${this.user.uid}/cart`,{id:this.productId}),alert(`${this.product.name??"Product"} added to cart`),this.updateIsInCart()},async updateIsInCart(){if(this.user?.uid){const t=await x.A.get(`/api/users/${this.user.uid}/cart/${this.productId}`);this.isInCart=t.data}},async signIn(){const t=prompt("Enter your email to sign in:"),r=(0,u.xI)(),n={url:`https://full-stack-vue-deployment-dm.onrender.com/products/${this.productId}`,handleCodeInApp:!0};await(0,u.MN)(r,t,n),alert("A log in link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)}},async created(){const t=(0,u.xI)();if((0,u.Pj)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,u.hK)(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const r=await x.A.get(`/api/products/${this.productId}`);this.product=r.data,this.updateIsInCart()}};const ct=(0,f.A)(ut,[["render",nt]]);var it=ct,dt=n(6400);const lt={apiKey:"AIzaSyABg7M3UIlDJknSJ1dtV3gS2QIPj52PAP0",authDomain:"vue-site-c7000.firebaseapp.com",projectId:"vue-site-c7000",storageBucket:"vue-site-c7000.firebasestorage.app",messagingSenderId:"856085107279",appId:"1:856085107279:web:27f47f264b8b3d38fcd03a"};(0,dt.Wp)(lt),(0,e.Ef)(I).use(b.aE({history:b.LA("/"),routes:[{path:"/cart",component:T},{path:"/products",component:W},{path:"/products/:productId",component:it},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:st}]})).mount("#app")}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(r,e,o,a){if(!e){var s=1/0;for(d=0;d<t.length;d++){e=t[d][0],o=t[d][1],a=t[d][2];for(var u=!0,c=0;c<e.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](e[c])}))?e.splice(c--,1):(u=!1,a<s&&(s=a));if(u){t.splice(d--,1);var i=o();void 0!==i&&(r=i)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[e,o,a]}}(),function(){n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,{a:r}),r}}(),function(){n.d=function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={524:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var o,a,s=e[0],u=e[1],c=e[2],i=0;if(s.some((function(r){return 0!==t[r]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var d=c(n)}for(r&&r(e);i<s.length;i++)a=s[i],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},e=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=n.O(void 0,[504],(function(){return n(6747)}));e=n.O(e)})();
//# sourceMappingURL=app.ed00e303.js.map