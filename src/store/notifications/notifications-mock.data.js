const NOTIFICATIONS = [
  {
    id: 'n1',
    title: 'Alarm triggered',
    room: 'r1',
    timestamp: Date.now(),
    device: 'a1',
    read: false,
  },
  {
    id: 'n2',
    title: 'Humidity over',
    room: 'r5',
    timestamp: Date.now(),
    value: '80',
    unit: '%',
    device: 't1',
    read: false,
  },
  {
    id: 'n3',
    title: 'Temperature over',
    room: 'r5',
    timestamp: Date.now(),
    value: '30',
    unit: 'ºC',
    device: 't1',
    read: true,
  },
];

export default NOTIFICATIONS;
