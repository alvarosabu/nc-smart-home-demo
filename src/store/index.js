import Vue from 'vue';
import Vuex from 'vuex';
import rooms from './rooms';
import devices from './devices';

import notifications from './notifications';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    rooms,
    devices,
    notifications,
  },
});
