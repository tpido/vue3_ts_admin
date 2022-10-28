import { createStore } from 'vuex';
import { IRootState } from './types';
import loginModule from './modules/login/login';
export default createStore<IRootState>({
  state: {
    name: '123',
    age: 18
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { loginModule }
});
