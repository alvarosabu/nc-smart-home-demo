import { mutationsTypes } from './rooms.mutations';

export const actionTypes = {
  ROOMS_REQUEST: 'ROOMS_REQUEST',
};

const actions = {
  [actionTypes.ROOMS_REQUEST]: async ({ commit }) => {
    commit(mutationsTypes.ROOMS_REQUEST);
    setTimeout(() => {
      commit(mutationsTypes.ROOMS_SUCCESS);
    }, 1000);
  },
};

export default actions;
