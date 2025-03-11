import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABg7M3UIlDJknSJ1dtV3gS2QIPj52PAP0",
  authDomain: "vue-site-c7000.firebaseapp.com",
  projectId: "vue-site-c7000",
  storageBucket: "vue-site-c7000.firebasestorage.app",
  messagingSenderId: "856085107279",
  appId: "1:856085107279:web:27f47f264b8b3d38fcd03a"
};

initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{ 
    path: '/cart', 
    component: ShoppingCartPage, 
  }, { 
    path: '/products', 
    component: ProductsPage, 
  }, { 
    path: '/products/:productId', 
    component: ProductDetailPage, 
  }, {
    path: '/',
    redirect: '/products',
  }, { 
    path: '/:pathMatch(.*)*', 
    component: NotFoundPage, 
  }]
}))
.mount('#app')
