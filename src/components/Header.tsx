import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { IAuthStore } from '../stores/AuthStore';
import { observer, inject } from 'mobx-react';

@inject('authStore')
@observer
class Header extends Component<{authStore?: IAuthStore}> {
  state = {
    current: 'dashboard',
  };

  private handleClick = (e: { key: any; }) => {
    this.setState({
      current: e.key,
    });
  };

  private logout = () => {
    this.props.authStore && this.props.authStore.logout();
  }

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
        {this.props.authStore && !this.props.authStore.signedIn &&
        <Menu.Item key="signup">
          Sign up
          <Link to="/signup" />
        </Menu.Item>
        }
        {this.props.authStore && this.props.authStore.signedIn &&
          <Menu.Item key="logout" onClick={this.logout}>
            Log out
            <Link to="/logout" />
          </Menu.Item>
        }
      </Menu>
    );
  }
}

export default Header
