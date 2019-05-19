import { mapGetters } from 'vuex';

const data = () => ({
  selectedId: false,
});

const components = {};

const computed = {
  ...mapGetters('devices', {
    devices: 'getNoStarredDevices',
    starredDevices: 'getStarredDevices',
    getSelectedDevice: 'getSimpleDevice',
  }),
};

const methods = {};

const DevicesPage = {
  name: 'Devices',
  data,
  components,
  computed,
  methods,
  mounted() {},
};

export default DevicesPage;
