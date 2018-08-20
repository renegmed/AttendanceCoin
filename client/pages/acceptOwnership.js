import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import Layout from '../components/Layout'; 
//import Web3Container from '../lib/Web3Container'
import contract from '../lib/fixedSupplyToken'
import AcceptOwnerForm from '../components/AcceptOwnerForm'

export default class AcceptOwnership extends Component {   
  // state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0}

  // static async getInitialProps(props) {
  //   const { account } = props.query;
  //   return { account };
  // }
  state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0}

  static async getInitialProps(props) {
    const { account } = props.query;
    console.log('------ AcceptOwnership.getInitialProps() ---------');
    console.log(account)
    let accountBalance = 0
    let allowance = 0
    if (account) {
      accountBalance = await contract.methods.balanceOf(account).call()     
      allowance = await contract.methods.allowance(account, account).call()
    }   
    return { currentAccount: account, accountBalance, allowance };
  }
  
  // async componentDidMount () {
  //   const { web3, contract, owner, currentAccount, accountBalance } = this.props

  //   console.log('------ AcceptOwnership.componentDidMount() ---------');
  //   console.log(web3)
  //   console.log(contract)    
  //   console.log(currentAccount)    
  //   console.log(owner)  
  //   this.setState({ 
  //       web3, 
  //       contract, 
  //       owner,               
  //       currentAccount, 
  //       accountBalance,       
  //   }); 
  // }
  render() { 
    const { web3, contract, owner, currentAccount, accountBalance } = this.props
    return (      
      <Layout currentAccount={currentAccount}>
        <div>
          <h3>Accept Your Contract Ownership</h3>    
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
         
        </div>
         
        <hr />
            
        <div> 
        <AcceptOwnerForm 
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
 

// export default () => (
//   <Web3Container
//     renderLoading={() => <div>Loading Dapp Page...</div>}
//     render={({ web3, contract, currentAccount, accountBalance, owner, newOwner }) => (
//       <AcceptOwnership       
//         web3={web3}
//         contract={contract} 
//         owner={owner}
//         newOwner={newOwner}
//         currentAccount={currentAccount} 
//         accountBalance={accountBalance}          
//       />
//     )}
//   />
// ) 