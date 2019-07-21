import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

class Header extends React.Component {
    state = {
      current: 'mail',
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
          <Menu.Item key="subjects">
            Subjects
            <Link to="/subjects" />
          </Menu.Item>
        </Menu>
      );
    }
  }

// The Header creates links that can be used to navigate
// between routes.
// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/subjects'>Subjects</Link></li>
//       </ul>
//     </nav>
//   </header>
// )

export default Header
