import { observable, action, reaction } from 'mobx';
import AuthService from '../services/AuthService'

export interface IAuthStore {
  isLoggedIn: boolean
  signup (email: string, password: string): void
  logout (): void
}

class AuthStore implements IAuthStore{
  @observable isLoggedIn: boolean = false
  @observable protected token: string|null = null
  private authService: AuthService

  constructor() {
    this.authService = new AuthService()
    this.loadToken()
    reaction(() => this.token, token => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
    });
  }

  @action signup(email: string, password: string): void {
    this.authService.signup(email, password)
    // this.setToken(this.createToken(email, password));
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

  private createToken(email: string, password: string): string {
    return btoa(`${email}:${password}`);
  }
}

export default AuthStore;