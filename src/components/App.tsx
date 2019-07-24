import React from 'react'
import Header from './Header'
import Main from './Main'
import { Layout } from 'antd';
// @TODO Refactor it to clear solutio
import { stores } from '../stores'

const App: React.FC = () => {
    return (
      <Layout className="layout">
        <Header appStateStore={stores.appStateStore}/>
        <Main />
      </Layout>
    );
}

export default App