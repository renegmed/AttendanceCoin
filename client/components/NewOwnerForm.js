import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import { Router } from '../routes';
 
export default class NewOwnerForm extends Component {
  state = {
    owner: '',
    new_owner: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const {web3, contract, owner, currentAccount} = this.props;
    //const { contract, currentAccount } = this.state
     console.log("******* NewOrderForm onSubmit() address ***********");
    // console.log(web3);
    console.log(contract);
    console.log('+++++++ current account: ',currentAccount); 
    console.log('+++++++ owner: ', owner);
    console.log('+++++++ new_owner: ', this.state.new_owner); 
  

    this.setState({ loading: true, errorMessage: '' });

    try {
       //const accounts = await web3.eth.getAccounts();
       console.log("******* NewOrderForm onSubmit()  owner  ***********");
       console.log(owner);
       console.log(this.state.new_owner);
      
      const success = await contract.methods.transferOwnership(this.state.new_owner).send({
              from: currentAccount
            });

      console.log('Success?', success) 
      if (success) {
        this.setState({newOwner: this.state.new_owner});
      }
      Router.replaceRoute(`/`);
    } catch (err) {
      console.log(err.message)
      this.setState({ errorMessage: err.message })       
    }
     
    this.setState({ loading: false, new_owner: ''});
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>          
          <label>Change Ownership</label>
          
          <Input
            value={this.state.new_owner}
            onChange={event => this.setState({ new_owner: event.target.value })}
            label="New Owner"
            labelPosition="left"
          />
          <p></p>
        
          <p></p>
        </Form.Field>

        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Change Owner Now
        </Button>
      </Form>
    );
  }
}
 
