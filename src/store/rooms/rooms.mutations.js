import status from '../status.constants';
import ROOMS from './rooms-mock.data';

export const mutationsTypes = {
  ROOMS_REQUEST: 'ROOMS_REQUEST',
  ROOMS_SUCCESS: 'ROOMS_SUCCESS',
  ROOMS_FAILED: 'ROOMS_FAILED',
};

const mutations = {
  [mutationsTypes.ROOMS_REQUEST]: state => {
    const mutState = state;
    mutState.status = { ...mutState.status, ...status.LOADING };
  },
  [mutationsTypes.ROOMS_SUCCESS]: state => {
    const mutState = state;
    mutState.rooms = ROOMS;
    mutState.status = { ...mutState.status, ...status.LOADED };
  },
};

export default mutations;
