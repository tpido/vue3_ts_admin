import { Module } from 'vuex';
import { LoginModule } from './type';
import { IRootState } from '../../types';
import { IAccount } from '@/service/login/types';
import {
  AuthorizeLogin,
  GetUserInfoById,
  GetUserMenuById
} from '@/service/login/login';
import Cache from '@/utils/Cache';
import router from '@/router';

const loginModule: Module<LoginModule, IRootState> = {
  namespaced: true,
  state: {
    userInfo: {},
    userMenu: [],
    token: ''
  },
  getters: {},
  mutations: {
    changeToken(state, newToken) {
      state.token = newToken;
    },
    changeUserInfo(state, newUserInfo) {
      state.userInfo = newUserInfo;
    },
    changeUserMenu(state, newUserMenu) {
      state.userMenu = newUserMenu;
    }
  },
  actions: {
    async loginAction({ commit }, payload: IAccount) {
      /* 登录逻辑 */
      const loginResult = await AuthorizeLogin(payload);
      const { token } = loginResult.data;
      Cache.setCache('token', token);
      commit('changeToken', token);

      /* 获取用户信息 */
      const userInfoRes = await GetUserInfoById(1);
      const userInfo = userInfoRes.data;
      commit('changeUserInfo', userInfo);
      Cache.setCache('userInfo', userInfo);

      /* 获取用户菜单 */
      const userMenuRes = await GetUserMenuById(1);
      console.log(userMenuRes);
      let userMenu = userMenuRes.data;

      userMenu = userMenu.map((item: any) => {
        const arr = item.icon!.split('-');
        arr.splice(0, 2);
        const element = arr.join('-');
        return { ...item, icon: element };
      });

      commit('changeUserMenu', userMenu);
      Cache.setCache('userMenu', userMenu);

      /* 跳转到main页面 */
      router.push('/main');
    },

    async setLoginState({ commit }) {
      console.log(11);
      const token = Cache.getCache('token');
      const userMenu = Cache.getCache('userMenu');
      const userInfo = Cache.getCache('userInfo');
      if (token) commit('changeToken', token);
      if (userMenu) commit('changeUserMenu', userMenu);
      if (userInfo) commit('changeUserInfo', userInfo);
    }
  }
};

export default loginModule;
