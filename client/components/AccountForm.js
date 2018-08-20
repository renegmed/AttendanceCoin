import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import { Router } from '../routes';
 
export default class ChangeAccountForm extends Component {
  state = {
    account: '', 
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const {web3, contract, currentAccount, setAccount} = this.props;    
    console.log("******* ChangeAccountForm onSubmit() address ***********");    
    console.log(contract);     

    this.setState({ loading: true, errorMessage: '' });

    try {
       //const accounts = await web3.eth.getAccounts();
       console.log("******* ChangeAccountForm onSubmit()  account to search ***********");      
       console.log(this.state.account);
      
      const balance = await contract.methods.balanceOf(this.state.account).call();
      console.log(balance) 
      
      //this.setState({ currentAccount: this.state.account, currentBalance: balance});
      this.props.setAccount(this.state.account, balance)

      const url = `/details/${this.state.account}`
      console.log(url)

      Router.replaceRoute(url);
      
    } catch (err) {
      console.log(err.message)
      this.setState({ errorMessage: err.message })       
    }
     
    this.setState({ loading: false, account: ''});
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>          
          <label>Go To Account</label>
          
          <Input
            value={this.state.account}
            onChange={event => this.setState({ account: event.target.value })}
            label="Account"
            labelPosition="left"
          />
          <p></p>
        
          <p></p>
        </Form.Field>

        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Go to Account Now
        </Button>
      </Form>
    );
  }
}
 
