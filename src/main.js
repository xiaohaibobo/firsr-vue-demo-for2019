// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './components/App'
import axios from 'axios'
import './css/style.css'
import router from './router'
import store from './store'

Vue.prototype.axios = axios;

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

var iW = document.documentElement.clientWidth;
iW = iW > 1080 ? 1080 : iW;
document.querySelector('html').style.fontSize = iW / 8 + 'px';