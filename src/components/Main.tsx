import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

import Dashboard from '../pages/Dashboard'
import Objects from '../pages/Objects'
import Topics from '../pages/Topics'
import CreateTopicPage from '../pages/CreateTopicPage'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Main = () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/objects' component={Objects}/>
      <Route exact path='/topics/create' component={CreateTopicPage}/>
      <Route exact path='/topics' component={Topics}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </Layout>
)

export default Main