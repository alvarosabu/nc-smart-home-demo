import { mutationsTypes } from './{{name_sc}}.mutations';

export const actionTypes = {
  _REQUEST: '_REQUEST',
};

const actions = {
  [actionTypes._REQUEST]: async ({ commit }) => {
    commit(mutationsTypes._REQUEST);
  },
};
export default actions;
