/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAccount {
  name: string;
  password: string;
}

export interface loginResultData {
  id: number;
  name: string;
  token: string;
}

export interface loginResult<T = any> {
  code: number;
  data: T;
}
