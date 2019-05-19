import { mutationsTypes } from './devices.mutations';

export const actionTypes = {
  DEVICES_REQUEST: 'DEVICES_REQUEST',
  UPDATE_DEVICE: 'UPDATE_DEVICE',
};

const actions = {
  [actionTypes.DEVICES_REQUEST]: async ({ commit }) => {
    commit(mutationsTypes.DEVICES_REQUEST);
    setTimeout(() => {
      commit(mutationsTypes.DEVICES_SUCCESS);
    }, 1000);
  },
  [actionTypes.UPDATE_DEVICE]: async ({ commit }, payload) => {
    commit(mutationsTypes.UPDATE_DEVICE, payload);
  },
};
export default actions;
