import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/profiles', component: Landing },
  { path: '/', component: Landing },
  // { path: '*', component}
  // {path: '/user-*'}
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
