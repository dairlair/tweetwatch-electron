import { observable, action } from 'mobx';

// @TODO remove this temp code
const timeOut = (t: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`)
    }, t)
  })
}


export class AppStateStore {
  @observable loggedIn = false
  @observable user = null

  @action login(email: string, password: string) {
    console.log('Login action called')
    // return agent.Auth.login(this.values.email, this.values.password)
    //   .then(({ user }) => commonStore.setToken(user.token))
    //   .then(() => userStore.pullUser())
    //   .catch(action((err) => {
    //     this.errors = err.response && err.response.body && err.response.body.errors;
    //     throw err;
    //   }))<
      // .finally(action(() => { this.inProgress = false; }));
    Promise.all([timeOut(1000), timeOut(2000)]).then(action(result => {
      this.loggedIn = true
      console.log('Logged in')
    }))
  }
}

const appStateStore = new AppStateStore();

export default appStateStore;