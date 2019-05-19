import state from './notifications.state';
import actions from './notifications.actions';
import mutations from './notifications.mutations';
import getters from './notifications.getters';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
