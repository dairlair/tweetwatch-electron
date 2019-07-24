import React from 'react'
import Header from './Header'
import Main from './Main'
import { Layout } from 'antd';

const App: React.FC = () => {
    return (
      <Layout className="layout">
        <Header />
        <Main />
      </Layout>
    );
}

export default App