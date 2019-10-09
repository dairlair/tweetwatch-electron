import { observable, action, reaction } from 'mobx'
import { DefaultApi, Configuration, User } from '../api-client/src'
import appConfig from '../config'

export interface IAuthStore {
  isLoggedIn: boolean
  token: string|null
  signup (email: string, password: string): void
  login (email: string, password: string): void
  logout (): void
}

class AuthStore implements IAuthStore {

  @observable public isLoggedIn: boolean = false
  @observable public token: string|null = null

  private apiClient: DefaultApi

  constructor() {
    this.loadToken()
    this.apiClient = new DefaultApi(new Configuration({basePath: appConfig.endpoint()}))
    reaction(() => this.token, token => {
        if (token) {
          window.localStorage.setItem('token', token);
        } else {
          window.localStorage.removeItem('token');
        }
    });
  }

  @action public signup(email: string, password: string): void {
    const promise = this.apiClient.signup({user: {email: email, password: password}})
    this.processUserResponse(promise)
  }

  @action public login(email: string, password: string): void {
    const promise = this.apiClient.login({user: {email: email, password: password}})
    this.processUserResponse(promise)
  }

  @action public logout(): void {
    this.setToken(null)
  }

  @action protected setToken(token: string|null) {
    this.isLoggedIn = token !== null
    this.token = token;
  }

  private loadToken(): void {
    let token: string|null = window.localStorage.getItem('token')
    if (token) {
      this.setToken(token)
    }
  }

  private processUserResponse(promise: Promise<User>): void {
    promise.then((response: User) => {
      if (response.token) {
        this.setToken(response.token)
        console.log('Auth successful')
      } else {
        console.error('Invalid credentials')
      }
    }, error => {
      console.error('Something went wrong', error)
    })
  }
}

export default AuthStore;