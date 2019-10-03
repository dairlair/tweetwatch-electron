import { observable, action, reaction } from 'mobx';
import AuthService from '../services/AuthService'

export interface IAuthStore {
  isLoggedIn: boolean
  signup (email: string, password: string): void
  login (email: string, password: string): void
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
    // @TODO Replace boolean|string to AuthResponse type.
    this.authService.signup(email, password).then((result: boolean|string) => {
      if (typeof result == 'string') {
        this.setToken(result)
        console.log('Signup successful')
      } else {
        console.log('Invalid credentials')
      }
    }).catch(() => {
      console.log('Something went wrong')
    })
  }

  @action login(email: string, password: string): void {
    this.authService.login(email, password).then((result: boolean|string) => {
      if (typeof result == 'string') {
        this.setToken(result)
        console.log('Login successful')
      } else {
        console.log('Invalid credentials')
      }
    }).catch(() => {
      console.log('Something went wrong')
    })
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