import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

import Dashboard from '../pages/Dashboard'
import Objects from '../pages/Objects'
import Topics from '../pages/Topics'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Main = () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/objects' component={Objects}/>
      <Route path='/topics' component={Topics}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </Layout>
)

export default Main