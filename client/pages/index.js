import React, { Component } from 'react';
import Layout from '../components/Layout';
import Details from './details'

export default class HomePage extends Component { 
  
  static async getInitialProps(props) {
    const { account } = props.query;
    console.log('------ HomePage getInitialProps() account --------')
    console.log(account)
    return { account };
  }

  // constructor(props) {
  //   super(props)
  //   let account 
  //   if (props.query) {
  //     account = props.query.account
  //   }
  //   this.state = {account}
  //   console.log('------ HomePage constructor() account --------')
  //   console.log(account)
  // }  

  changeOwner = (owner) => {   
    this.setState({owner})
  } 
  render() { 
    let account
    // if (!this.props.account || this.props.account == 0) {
    //   account = 0x0
    // } else {
      account = this.props.account
    //}
    console.log('------ HomePage render() account --------')    
    console.log(account)
    return (
      <Layout currentAccount={account}>
          <Details account={account} changeOwner={this.changeOwner.bind(this)} />       
      </Layout>
    );
  }
}
 