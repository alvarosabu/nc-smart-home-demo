import state from './devices.state';
import actions from './devices.actions';
import mutations from './devices.mutations';
import getters from './devices.getters';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
