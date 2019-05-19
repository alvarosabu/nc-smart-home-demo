import status from '../status.constants';
import NOTIFICATIONS from './notifications-mock.data';

export const mutationsTypes = {
  NOTIFICATIONS_REQUEST: 'NOTIFICATIONS_REQUEST',
  NOTIFICATIONS_SUCCESS: 'NOTIFICATIONS_SUCCESS',
  NOTIFICATIONS_FAILED: 'NOTIFICATIONS_FAILED',
};

const mutations = {
  [mutationsTypes.NOTIFICATIONS_REQUEST]: state => {
    const mutState = state;
    mutState.status = { ...mutState.status, ...status.LOADING };
  },
  [mutationsTypes.NOTIFICATIONS_SUCCESS]: state => {
    const mutState = state;
    mutState.notifications = NOTIFICATIONS;
    mutState.status = { ...mutState.status, ...status.LOADED };
  },
};
export default mutations;
