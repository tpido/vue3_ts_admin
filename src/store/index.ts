import { createStore } from 'vuex';
import { IRootState } from './types';
import loginModule from './modules/login/login';
const store = createStore<IRootState>({
  state: {
    name: '123',
    age: 18
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { loginModule }
});

export default store;

export function setupStore() {
  store.dispatch('loginModule/setLoginState');
}
