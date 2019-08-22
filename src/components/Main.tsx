import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

import Dashboard from '../pages/Dashboard'
import Objects from '../pages/Objects'
import SignUp from '../pages/SignUp'

const Main = () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/objects' component={Objects}/>
      <Route path='/signup' component={SignUp}/>
    </Switch>
  </Layout>
)

export default Main