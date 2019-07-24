import { observable, action, reaction } from 'mobx';

export interface ICommonStore {
    setToken(token: string): void;
}

export class CommonStore implements ICommonStore {
  @observable token = window.localStorage.getItem('token');

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
      }
    );
  }

  @action setToken(token: string) {
    this.token = token;
  }
}

export default CommonStore;