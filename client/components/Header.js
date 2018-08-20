import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default class Header extends Component {
  render () {    
    console.log('........ Header.render() currentAccount ..........')
    console.log(this.props.currentAccount)
    const approve = `/approve/${this.props.currentAccount}`
    const transfer = `/transfer/${this.props.currentAccount}`
    const changeownership = `/changeownership/${this.props.currentAccount}`
    const acceptownership = `/acceptownership/${this.props.currentAccount}`
  return (
    <Menu style={{ marginTop: '10px' }}> 
      <Link route="/">
        <a className="item">Logo Here</a>
      </Link> 
      
      <Menu.Menu position="right">
        <Link route="/account">
          <a className="item">Go To Account</a>
        </Link>

        <Link route={approve}>
          <a className="item">Tokens To Transfer</a>
        </Link>

        <Link route={transfer}>
          <a className="item">Transfer</a>
        </Link>       

        <Link route={changeownership}>
          <a className="item">Change Owner</a>
        </Link>

        <Link route={acceptownership}>
          <a className="item">Accept Ownership</a>
        </Link>
      </Menu.Menu>
    </Menu> 
   
  );

  }
};
