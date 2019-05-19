import EntityAdapter from '../entities/entityAdapter.js';
import Model from '../entities/model.js';

export const devices = new Model();
export const devicesAdapter = new EntityAdapter(devices);

const initialState = {
  devices: devicesAdapter.getInitialState(),
  status: {
    isLoading: false,
    isLoaded: false,
    error: null,
  },
};

export default initialState;
