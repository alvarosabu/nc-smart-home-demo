const getters = {
  status: state => state.status,
  getRooms: state => state.rooms,
  getNumberOfRooms: state => state.rooms.length,
};

export default getters;
