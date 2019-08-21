import { observable, action, reaction } from 'mobx';

export interface IAuthStore {
  isLoggedIn: boolean
  login (email: string, password: string): void
  logout (): void
}

class AuthStore implements IAuthStore{
  @observable isLoggedIn: boolean = false
  @observable protected token: string|null = null

  constructor() {
    this.loadToken()
    reaction(() => this.token, token => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
    });
  }

  @action login(email: string, password: string): void {
    console.log('Login action called')
    this.setToken('token')
  }

  @action logout(): void {
    this.setToken(null)
  }

  @action protected setToken(token: string|null) {
    this.isLoggedIn = token !== null
    this.token = token;
  }

  protected loadToken(): void {
    let token: string|null = window.localStorage.getItem('token')
    if (token) {
      this.setToken(token)
    }
  }
}

export default AuthStore;