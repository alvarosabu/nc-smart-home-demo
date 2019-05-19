import api from '../../core/api';
import caseFormatter from '../../shared/case-formatter';
import {{name_sc}} from './{{name_sc}}-mock.data';
import state from './{{name_sc}}.state';
import actions from './{{name_sc}}.actions';
import mutations from './{{name_sc}}.mutations';
import getters from './{{name_sc}}.getters';

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
