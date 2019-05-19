<template>
  <z-canvas :views="$options.components"></z-canvas>
</template>

<script>
const Home = () => import('@/views/home/Home.vue');
const Devices = () => import('@/views/devices/Devices.vue');
const Device = () => import('@/views/devices/device/Device.vue');
const Settings = () => import('@/views/settings/Settings.vue');
const About = () => import('@/views/about/About.vue');
const Notifications = () => import('@/views/notifications/Notifications.vue');

const components = {
  Home,
  Devices,
  Device,
  Settings,
  About,
  Notifications,
};

const App = {
  components,
  mounted() {
    this.$zircle.config({
      style: {
        theme: 'nc-light',
        mode: 'light-filled',
      },
    });
    this.$zircle.setView('home');
  },
};

export default App;
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
