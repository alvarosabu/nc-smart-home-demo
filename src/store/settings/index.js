import api from '../../core/api';
import caseFormatter from '../../shared/case-formatter';
import settings from './settings-mock.data';
import state from './settings.state';
import actions from './settings.actions';
import mutations from './settings.mutations';
import getters from './settings.getters';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
