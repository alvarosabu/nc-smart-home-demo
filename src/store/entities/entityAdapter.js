import Vue from 'vue';

const addOne = (payload, state, property) => {
  const { ids, entities } = state;
  const prop = payload.hasOwnProperty(property) ? property : 'id';
  ids.push(payload[prop]);
  Vue.set(entities, payload[prop], payload);
  return state;
};

const addMany = (payload, state, property) => {
  payload.forEach(element => {
    addOne(element, state, property);
  });
  return state;
};

const deNormalize = obj => Object.values(obj);

const selectAll = ({ entities }) => deNormalize(entities);

const selectById = (id, { entities }) => entities[id];

const selectMultipleByIds = (ids, { entities }) =>
  ids
    .reduce((prev, id) => {
      const entity = entities[id] || undefined;
      return [...prev, entity];
    }, [])
    .filter(item => item);

const EntityAdapter = entity => ({
  state: { ...entity } || { ids: [], entities: {} },
  getInitialState() {
    return this.state;
  },
  getIds() {
    return this.state.ids;
  },
  getEntities() {
    return this.state.entities;
  },
  addOne(payload, property) {
    return addOne(payload, this.state, property);
  },
  addMany(payload, property) {
    return addMany(payload, this.state, property);
  },
  getTotal() {
    return this.state.ids.length;
  },
  clearState() {
    this.state = { ids: [], entities: {} };
    return this.state;
  },
  selectAll,
  selectById,
  selectMultipleByIds,
  deNormalize,
});

export default EntityAdapter;
