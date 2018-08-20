import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import { Router } from '../routes';
 
export default class AcceptOwnerForm extends Component {
  state = {   
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const {web3, contract, owner, newOwner, currentAccount} = this.props;
    //const { contract, currentAccount } = this.state
    // console.log("******* AcceptOwnerForm onSubmit() address ***********");
    // console.log(web3);
    // console.log(contract);
    // console.log('+++++++ current account: ',currentAccount); 
    // console.log('+++++++ owner: ', owner);
    // console.log('+++++++ new_owner: ', this.state.new_owner); 
  

    this.setState({ loading: true, errorMessage: '' });

    try {
       //const accounts = await web3.eth.getAccounts();
       console.log("******* AcceptOwnerForm onSubmit()  owner  ***********");
       console.log(currentAccount);
       const _newOwner = await contract.methods.newOwner().call()
       console.log(_newOwner);
      
      await contract.methods.acceptOwnership().send({
              from: currentAccount
            });
 
      
      Router.replaceRoute(`/`);
    } catch (err) {
      console.log(err.message)
      this.setState({ errorMessage: err.message })       
    }
     
    this.setState({ loading: false});
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>                  
           
        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Accept Now! 
        </Button>
      </Form>
    );
  }
}
 
