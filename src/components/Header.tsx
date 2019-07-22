import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';

class Header extends React.Component {
  state = {
    current: 'dashboard',
  };

  handleClick = (e: { key: any; }) => {
    console.log('click ', e);
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
      </Menu>
    );
  }
}

export default Header
