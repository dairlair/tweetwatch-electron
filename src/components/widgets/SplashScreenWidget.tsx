import React, {Component} from 'react'
import { Spin } from 'antd'


class SplashScreenWidget extends Component {
  render() {
    return (
      <div className="tw-splash-screen">
        <Spin size="large" />
      </div>
    )
  }
}

export default SplashScreenWidget
