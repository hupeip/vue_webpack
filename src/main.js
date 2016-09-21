import Vue from 'vue'
import vueRouter from 'vue-router'
import {configRouter} from './routers'
import App from './components/app.vue'

import 'vue-awesome'
import './assets/css/reset.css'
import './assets/css/common.css'



Vue.config.debug = true; //开启错误提示

Vue.use(vueRouter);
const router = new vueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
configRouter(router);

router.start(Vue.extend(App), '#app')
window.router = router;

console.log(process.env.NODE_ENV);
