const getters = {
  status: state => state.status,
  getNotifications: state => state.notifications,
  getNumberOfUnreadNotifications: state =>
    state.notifications.filter(notification => !notification.read).length,
};

export default getters;
