import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

import Dashboard from '../pages/Dashboard'
import Objects from '../pages/Objects'

const Main = () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/objects' component={Objects}/>
    </Switch>
  </Layout>
)

export default Main