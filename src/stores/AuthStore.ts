import { observable, action } from 'mobx'
import { DefaultApi, Configuration, User } from '../api-client/src'
import appConfig from '../config'

export interface IAuthStore {
  // Indicate that store is in data retrieving state (JWT token validation as instance)
  isLoading: boolean
  isLoggedIn: boolean
  token: string|null
  user: User|null
  signup (email: string, password: string): void
  login (email: string, password: string): void
  logout (): void
}

class AuthStore implements IAuthStore {
  @observable public isLoading: boolean = false
  @observable public isLoggedIn: boolean = false
  @observable public token: string|null = null
  @observable public user: User|null = null

  private apiClient: DefaultApi

  constructor() {
    this.apiClient = new DefaultApi(new Configuration({basePath: appConfig.endpoint()}))
    this.loadToken()
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
    this.token = token
    if (token) {
      window.localStorage.setItem('token', token);
    } else {
      window.localStorage.removeItem('token');
    }
  }

  private loadToken(): void {
    let token: string|null = window.localStorage.getItem('token')
    // No token is stored, so we have to do nothing
    if (!token) {
      return
    }

    const apiClientWithToken = new DefaultApi(new Configuration({
      basePath: appConfig.endpoint(),
      apiKey: token
    }))

    this.isLoading = true
    apiClientWithToken.getStatus().then((user: User) => {
      this.setToken(user.token)
      this.user = user
    }, (res: Response) => {
      if (res.status === 401) {
        // The "Unauthorized" response, therefore we know that this token is invalid.
        // We had to remove this expired token from local storage.
        return this.setToken(null)
      }
      // Serve may return only 200, or 401 error, otherwise it is unexpected error.
      //  Maybe network connection problem or server failure.
      console.error('Unexpected response from server during the token validation', res)
    }).catch((error: any) => {
      // Some unexpected error ocurred during the token validation.
      // We can not decide is loaded token valid or not.
      console.error('Error ocurred during the token validation', error)
    }).finally(() => {
      this.isLoading = false
    })
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