import { mapGetters, mapActions } from 'vuex';
import { format } from 'date-fns';
import { actionTypes as RoomActionTypes } from '../../store/rooms/rooms.actions';
import { actionTypes as NotificationsActionTypes } from '../../store/notifications/notifications.actions';
import { actionTypes as DevicesActionTypes } from '../../store/devices/devices.actions';

const computed = {
  currentTime() {
    return format(new Date(), 'hh:mm aa');
  },
  currentDate() {
    return format(new Date(), 'dddd, Do MMMM');
  },
  ...mapGetters('rooms', {
    roomsAmount: 'getNumberOfRooms',
  }),
  ...mapGetters('devices', {
    activeDevicesAmount: 'getNumberOfActiveDevices',
  }),
  ...mapGetters('notifications', {
    unreadNotificationsAmount: 'getNumberOfUnreadNotifications',
  }),
  ...mapActions('rooms', {
    fetchRooms: RoomActionTypes.ROOMS_REQUEST,
  }),
  ...mapActions('devices', {
    fetchDevices: DevicesActionTypes.DEVICES_REQUEST,
  }),
  ...mapActions('notifications', {
    fetchNotifications: NotificationsActionTypes.NOTIFICATIONS_REQUEST,
  }),
  currentThemeLogo() {
    return this.$zircle.getTheme().split('theme-')[1] === 'nc-light'
      ? 'nc_logo.svg'
      : 'nc_logo_white.svg';
  },
};

const HomeView = {
  name: 'Home',
  computed,
  async mounted() {
    await this.fetchRooms;
    await this.fetchNotifications;
    await this.fetchDevices;
  },
};

export default HomeView;
