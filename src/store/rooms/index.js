import state from './rooms.state';
import actions from './rooms.actions';
import mutations from './rooms.mutations';
import getters from './rooms.getters';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
