import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'

/* import ViewUI from 'view-design';
//import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI); */
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
