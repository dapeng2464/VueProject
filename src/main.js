// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
//import mail from './assets/mail.js'
//require('../src/assets/mail.js')
//import mail from './assets/a.js'

Vue.config.productionTip = false

Vue.use(router);
Vue.use(VueResource);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//Vue.use(mail);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
