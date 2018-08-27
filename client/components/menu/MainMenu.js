import React, { Component } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { Link, Router } from '../../routes';

export default class MainMenu extends Component {
  state = {activeItem: ''} 
 
   handleSelectedItem = async (event, activeItem) => {
    
    console.log('+++++ MainMenu.handleSelectedItem itemName +++++++')    
    console.log(activeItem)
   // console.log(activeItem.name) 

   this.setState({ activeItem })   
   await Router.pushRoute(`/${activeItem.name}`);    
  }

  render() {
    //const { activeItem } = this.state || {}
    console.log(this.state.activeItem.name)
    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header as='h3'>Home</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Index'
              active={this.state.activeItem.name === 'Index'}
              onClick={this.handleSelectedItem}
            >            
            click to home page 
            </Menu.Item> 
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header as='h3'>Events</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Events'
              active={this.state.activeItem.name === 'Events'}
              onClick={this.handleSelectedItem}
            >
            <Header sub >Listing</Header>
            <p>current list of events</p>
            </Menu.Item>

            <Menu.Item
              name='EventAdd'
              active={this.state.activeItem.name === 'EventAdd'}
              onClick={this.handleSelectedItem}
            >
            <Header sub >add</Header>
            <p>add new event</p>
            </Menu.Item>
            <Menu.Item
              name='EventUpdate'
              active={this.state.activeItem.name === 'EventUpdate'}
              onClick={this.handleSelectedItem}
            >
            <Header sub >update</Header>
            <p>manage an existing event</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
 
        <Menu.Item>
          <Menu.Header>Users Account</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='AccountsList'
              active={this.state.activeItem.name === 'AccountsList'}
              onClick={this.handleSelectedItem}
              >
            <Header sub >accounts</Header>
            <p>list of all user accounts</p>
            </Menu.Item>
            <Menu.Item
              name='AccountSearch'
              active={this.state.activeItem.name === 'AccountSearch'}
              onClick={this.handleSelectedItem}
              >
            <Header sub >search</Header>
            <p>search user accounts details</p>
            </Menu.Item>
            
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Admin</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='AdminInfo'
              active={this.state.activeItem.name === 'AdminInfo'}
              onClick={this.handleSelectedItem}
              >
            <Header sub >details</Header>
            <p>detailed info of current admin</p>
            </Menu.Item>
            <Menu.Item
              name='AdminChange'
              active={this.state.activeItem.name === 'AdminChange'}
              onClick={this.handleSelectedItem}
              >
            <Header sub >change owner</Header>
            <p>change administrator</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item> 
      </Menu>
    )
  }
}
