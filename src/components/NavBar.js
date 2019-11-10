import React, {createRef} from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Loading from '../components/Loading'

const link = {
  background: '#B01943', 
  color: 'white'
} 

class NavBar extends React.Component {


  render() { if (!this.props.currentUser) {
    return  <Loading/>
    
  } else {
    return (
      
      <Menu>
        <Menu.Item as={NavLink} to='/' exact style={link}>Home</Menu.Item>
    {this.props.currentUser.team_id &&  <Menu.Item as={NavLink} to='/games' exact style={link}>Games</Menu.Item> }
    {this.props.currentUser.team_id && <Menu.Item as={NavLink} to={`/stats/${this.props.currentUser.team_id}`} exact style={link}>Stats</Menu.Item> }
        <Menu.Item as={NavLink} to='/settings' exact style={link}>Settings</Menu.Item>
        <Menu.Item as={NavLink} to='/tactics' exact style={link}>Tactics</Menu.Item>
        {this.props.currentUser && <Menu.Item as={NavLink} to='/login' onClick={this.props.logOut} exact style={link}>LogOut</Menu.Item> }
      </Menu>
      
    );
  }
  }
};

export default NavBar
