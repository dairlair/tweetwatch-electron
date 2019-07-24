import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { AppStateStore } from '../stores/AppStateStore';
import { observer, inject } from 'mobx-react';

interface HeaderProps  {
  appStateStore: AppStateStore
}

@inject('appStateStore')
@observer
class Header extends Component<HeaderProps> {
  state = {
    current: 'dashboard',
  };

  handleClick = (e: { key: any; }) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="dashboard">
          Dashboard
          <Link to="/" />
        </Menu.Item>
        <Menu.Item key="objects">
          Objects
          <Link to="/objects" />
        </Menu.Item>
        <Menu.Item key="signup">
          Sign up
          <Link to="/signup" />
        </Menu.Item>
        {this.props.appStateStore.loggedIn &&
          <Menu.Item key="logout">
            Log out
            <Link to="/logout" />
          </Menu.Item>
        }
      </Menu>
    );
  }
}

export default Header
