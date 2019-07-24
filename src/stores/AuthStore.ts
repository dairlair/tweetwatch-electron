class AuthStore  {
}

export default AuthStore;

// import { observable, action } from 'mobx';
// import { inject } from 'mobx-react';
// import { ICommonStore } from './CommonStore';

// interface AuthStoreProps {
//     commonStore?: ICommonStore
// }

// @inject('objectStore')
// class AuthStore  {
//   @observable inProgress = false;
//   @observable errors = undefined;

//   constructor(props: Readonly<AuthStoreProps>)
//   {
//     console.log('Properties: ', props)
//   }

//   @observable values = {
//     email: '',
//     password: '',
//   };

//   @action setEmail(email: string) {
//     this.values.email = email;
//   }

//   @action setPassword(password: string) {
//     this.values.password = password;
//   }

//   @action reset() {
//     this.values.email = '';
//     this.values.password = '';
//   }

//   @action signIn() {
//     this.inProgress = true;
//     this.errors = undefined;
//     console.log('signIn');
//     // return agent.Auth.login(this.values.email, this.values.password)
//     //   .then(({ user }) => commonStore.setToken(user.token))
//     //   .then(() => userStore.pullUser())
//     //   .catch(action((err) => {
//     //     this.errors = err.response && err.response.body && err.response.body.errors;
//     //     throw err;
//     //   }))
//     //   .finally(action(() => { this.inProgress = false; }));
//   }

//   @action signUp() {
//     this.inProgress = true;
//     this.errors = undefined;
//     console.log('signUp');
//     // return agent.Auth.register(this.values.username, this.values.email, this.values.password)
//     //   .then(({ user }) => commonStore.setToken(user.token))
//     //   .then(() => userStore.pullUser())
//     //   .catch(action((err) => {
//     //     this.errors = err.response && err.response.body && err.response.body.errors;
//     //     throw err;
//     //   }))
//     //   .finally(action(() => { this.inProgress = false; }));
//   }

//   @action logout() {
//     CommonStore.setToken(undefined);
//     userStore.forgetUser();
//     return Promise.resolve();
//   }
// }

// export default new AuthStore();
