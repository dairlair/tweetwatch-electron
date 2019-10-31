import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';

import Dashboard from '../pages/Dashboard'
import TopicsListPage from '../pages/TopicsListPage'
import CreateTopicPage from '../pages/CreateTopicPage'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Main = () => (
  <Layout style={{ background: '#fff', padding: 24 }}>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/topics/create' component={CreateTopicPage}/>
      <Route exact path='/topics' component={TopicsListPage}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
    </Switch>
  </Layout>
)

export default Main