import React, { Component } from 'react'
import { IAuthStore } from '../stores/AuthStore'
import { observer, inject } from 'mobx-react';
import { Layout } from 'antd'
import Header from './Header'
import Main from './Main'
import { SplashScreenWidget } from './widgets'
const { Content } = Layout


interface Props {
  authStore: IAuthStore
}

@inject('authStore')
@observer
class App extends Component<Props> {

  render() {
    if (this.props.authStore.isLoading) {
      return <SplashScreenWidget />
    }

    return (
      <Layout className="layout">
        <Header />
        <Content>
          <div style={{ padding: 24, minHeight: 280, background: '#ffffff' }}>
            <Main />
          </div>
        </Content>
      </Layout>
    )
  }
}

export default App