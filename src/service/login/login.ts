import MyRequest from '..';
import { IAccount, loginResult, loginResultData } from './types';

export function AuthorizeLogin(account: IAccount) {
  return MyRequest.post<loginResult<loginResultData>>({
    url: '/login',
    data: account
  });
}

export function GetUserInfoById(id: number) {
  return MyRequest.get({
    url: `/users/+${id}`,
    showLoading: false
  });
}

export function GetUserMenuById(id: number) {
  return MyRequest.get({
    url: `/role/${id}/menu`,
    showLoading: false
  });
}
