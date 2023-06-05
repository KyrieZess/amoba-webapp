import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

//---------------- BOOTSTRAP----------------
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Import styles
import './styles/index.css'
// Import BaseComponents
import BaseComponents from './components/baseComponents'
// Add for globally using the registered components
Vue.use(BaseComponents);

Vue.prototype.$baseUrl = "https://dummyjson.com/"

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
