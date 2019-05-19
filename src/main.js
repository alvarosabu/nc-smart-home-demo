import Vue from 'vue';
import App from './App.vue';
import store from './store';

import zircle from 'zircle';
import 'zircle/dist/zircle.css';
import router from './router';
import './icons';
import SvgIcon from 'vue-svgicon';
import './styles/main.scss';
import TrendChart from 'vue-trend-chart';

Vue.use(zircle);
Vue.config.productionTip = false;
Vue.use(SvgIcon, {
  tagName: 'nc-icon',
  classPrefix: 'nc-svg',
});
Vue.use(TrendChart);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
