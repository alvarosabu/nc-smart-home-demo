import { CATEGORIES } from './devices-mock.data';
import { devicesAdapter } from './devices.state';

const parseDevices = devices => {
  return devices.map(device => parseDevice(device));
};

const parseDevice = device => {
  const { categoryId } = device;
  return {
    ...device,
    category: CATEGORIES.find(cat => cat.id === categoryId),
  };
};

const getters = {
  status: state => state.status,
  getDevices: state => parseDevices(devicesAdapter.selectAll(state.devices)),
  getSimpleDevice: state => id => parseDevice(devicesAdapter.selectById(id, state.devices)),
  getNumberOfActiveDevices: state =>
    devicesAdapter.selectAll(state.devices).filter(device => device.active).length,
  getStarredDevices: state =>
    parseDevices(devicesAdapter.selectAll(state.devices).filter(device => device.starred)),
  getNoStarredDevices: state =>
    parseDevices(devicesAdapter.selectAll(state.devices).filter(device => !device.starred)),
};

export default getters;
