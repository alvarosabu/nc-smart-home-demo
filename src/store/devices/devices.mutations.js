import status from '../status.constants';
import DEVICES from './devices-mock.data';
import { devicesAdapter } from './devices.state';

export const mutationsTypes = {
  DEVICES_REQUEST: 'DEVICES_REQUEST',
  DEVICES_SUCCESS: 'DEVICES_SUCCESS',
  DEVICES_FAILED: 'DEVICES_FAILED',
  UPDATE_DEVICE: 'UPDATE_DEVICE',
};

const mutations = {
  [mutationsTypes.DEVICES_REQUEST]: state => {
    const mutState = state;
    mutState.status = { ...mutState.status, ...status.LOADING };
  },
  [mutationsTypes.DEVICES_SUCCESS]: state => {
    const mutState = state;
    mutState.devices = devicesAdapter.addMany(DEVICES);
    mutState.status = { ...mutState.status, ...status.LOADED };
  },
  [mutationsTypes.UPDATE_DEVICE]: (state, payload) => {
    const mutState = state;
    mutState.devices = devicesAdapter.addOne(payload, 'id');

    mutState.status = { ...mutState.status, ...status.SAVED };
  },
};
export default mutations;
