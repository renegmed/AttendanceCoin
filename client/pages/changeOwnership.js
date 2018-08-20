import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import Layout from '../components/Layout'; 
//import Web3Container from '../lib/Web3Container'
import contract from '../lib/fixedSupplyToken'
import NewOwnerForm from '../components/NewOwnerForm'

export default class ChangeOwnership extends Component {      
  
  state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0}

  static async getInitialProps(props) {
    const { account } = props.query;
    console.log('------ ChangeOwnership.getInitialProps() ---------');
    console.log(account)
    accountBalance = await contract.methods.balanceOf(account).call() 
    const owner = await contract.methods.owner().call()   
    const _newOwner = await contract.methods.newOwner().call()

    return { currentAccount: account, owner, newOwner: _newOwner, };
  }

  // async componentDidMount () {
  //   const { web3, contract, owner, currentAccount, accountBalance } = this.props

  //   console.log('------ TransferOwnership.componentDidMount() ---------');
  //   console.log(web3)
  //   console.log(contract)    
  //   console.log(currentAccount)    
  //   console.log(owner)  
  //   const _newOwner = await contract.methods.newOwner().call()
  //   this.setState({ 
  //       web3, 
  //       contract, 
  //       owner,
  //       newOwner: _newOwner,               
  //       currentAccount, 
  //       accountBalance,       
  //   }); 
  // }
  render() { 
    const { owner, newOwner, currentAccount, accountBalance } = this.props
    return (      
      <Layout currentAccount={currentAccount} >
        <h3>Change Contract Ownership</h3> 
        <div>          
          <Label>
                Your Account Address: 
                <Label.Detail>{currentAccount}</Label.Detail>
          </Label>
          <p></p>
          <Label>
                Balance: 
                <Label.Detail>{accountBalance}</Label.Detail>
          </Label>
          <p></p>
          <hr />
          <Label>
                Contract Owner: 
                <Label.Detail>{owner}</Label.Detail>
          </Label> 
          <p></p>  
          <Label>
                 Pending New Owner: 
                <Label.Detail>{newOwner}</Label.Detail>
          </Label>           
          <p></p>
         
        </div>
         
        <hr />
            
        <div> 
        <NewOwnerForm 
              web3={web3} 
              contract={contract} 
              owner={owner}
              currentAccount={currentAccount} 
              accountBalance={accountBalance}
               /> 
        </div>
        
      </Layout>
    );
  }
}
{/*  

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, contract, currentAccount, accountBalance, owner }) => (
      <ChangeOwnership       
        web3={web3}
        contract={contract} 
        owner={owner}
        currentAccount={currentAccount} 
        accountBalance={accountBalance}          
      />
    )}
  />
)  */}