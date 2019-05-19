import { mutationsTypes } from './settings.mutations';

const actionTypes = {
  _REQUEST: '_REQUEST',
};

const actions = {
  [actionTypes._REQUEST]: async ({ commit }) => {
    commit(mutationsTypes._REQUEST);
  },
}
export default actions;
