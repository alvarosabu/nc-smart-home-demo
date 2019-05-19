import { mutationsTypes } from './notifications.mutations';

export const actionTypes = {
  NOTIFICATIONS_REQUEST: 'NOTIFICATIONS_REQUEST',
};

const actions = {
  [actionTypes.NOTIFICATIONS_REQUEST]: async ({ commit }) => {
    commit(mutationsTypes.NOTIFICATIONS_REQUEST);
    setTimeout(() => {
      commit(mutationsTypes.NOTIFICATIONS_SUCCESS);
    }, 1000);
  },
};
export default actions;
