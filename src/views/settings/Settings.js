const data = () => ({
  theme: '',
  themes: [
    { type: 'theme', angle: 210, label: 'nc-light', mode: 'light-filled', labelPos: 'left' },
    { type: 'theme', angle: 190, label: 'nc-dark', mode: 'light-filled', labelPos: 'left' },
  ],
});

const components = {};

const computed = {};

const methods = {
  changeStyle(el) {
    this.$zircle.config({ style: { theme: el.label, mode: el.mode } });
    var theme = this.$zircle.getTheme().split('theme-')[1];

    this.theme = `The theme is ${theme}`;
  },
};

const SettingsPage = {
  name: 'Settings',
  data,
  components,
  computed,
  methods,
  mounted() {
    this.theme = this.$zircle.getTheme().split('theme-')[1];
  },
};

export default SettingsPage;
