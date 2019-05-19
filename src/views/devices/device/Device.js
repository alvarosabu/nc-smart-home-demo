import { actionTypes as DevicesActionTypes } from '../../../store/devices/devices.actions';

const data = () => ({
  angle: 0,
  device: undefined,
  params: null,
});

const components = {};

const computed = {
  value() {
    return this.device.value;
  },
};

const methods = {
  async valueChanged(qty) {
    await this.$store.dispatch(`devices/${DevicesActionTypes.UPDATE_DEVICE}`, {
      ...this.device,
      value: {
        ...this.value,
        qty,
      },
    });
    this.getDevice();
  },
  async getDevice() {
    this.device = await this.$store.getters['devices/getSimpleDevice'](this.params.device.id);
  },
};

const DevicePage = {
  name: 'Device',
  data,
  components,
  computed,
  methods,
  async mounted() {
    this.params = this.$zircle.getParams();
    this.getDevice(this.params.device.id);
  },
};

export default DevicePage;
