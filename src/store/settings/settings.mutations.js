import status from '../status.constants';

export const mutationsTypes = {
  _REQUEST: '_REQUEST',
  _SUCCESS: '_SUCCESS',
  _FAILED: '_FAILED',
};

const mutations = {
  [mutationsTypes._REQUEST]: state => {
    const mutState = state;
    mutState.status = { ...mutState.status, ...status.LOADING };
  },
};
export default mutations;
