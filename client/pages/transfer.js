import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import Layout from '../components/Layout';
//import Web3Container from '../lib/Web3Container'
import contract from '../lib/fixedSupplyToken'
import TransferForm from '../components/TransferForm'

export default class Transfer extends Component {   

  state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0}

  static async getInitialProps(props) {
    const { account } = props.query;
    console.log('------ Transfer.getInitialProps() ---------');
    console.log(account)
    let accountBalance = 0
    let allowance = 0
    if (account) {
      accountBalance = await contract.methods.balanceOf(account).call()     
      allowance = await contract.methods.allowance(account, account).call()
    }   
    return { currentAccount: account, accountBalance, allowance };
  }

 // state = {web3: null, contract: null,  currentAccount: '', accountBalance: 0, allowance: 0}
  
  // constructor(props) {
  //   super(props)
  //   const { account } = props.query;
  //   console.log('------ Transfer.construct() ---------');
  //   console.log(account)
  //   this.state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0, account}

  // }

  // static async getInitialProps(props) {
  //   const { account } = props.query;
  //   return { account };
  // }
  
  // static async getInitialProps(props) {  
  //        const { web3, accounts, contract, currentAccount, accountBalance } = this.props  
    
  //        console.log("+++++++ Transfer.getInitialProps() ++++++++++++")
  //        console.log(web3)
  //        console.log(contract)    
  //        console.log(currentAccount)
  //        console.log(accountBalance)

  //       return  { web3, contract, currentAccount, accountBalance  }
  // }
  // async componentDidMount () {
  //   const { web3, contract, currentAccount, accountBalance, allowance } = this.props

  //   console.log('------ Transfer.componentDidMount() ---------');
  //   console.log(web3)
  //   console.log(contract)    
  //   console.log(currentAccount)    

  //   this.setState({ 
  //       web3, 
  //       contract,                 
  //       currentAccount, 
  //       accountBalance,
  //       allowance,       
  //   }); 
  // }

  render() { 
    const { web3, contract, currentAccount, accountBalance, allowance } = this.props
    return (      
      <Layout currentAccount={currentAccount}>
        <div>
          <Label>
                User Account Address: 
                <Label.Detail>{currentAccount}</Label.Detail>
          </Label>
          <p></p>
          <Label>
                Available Tokens: : 
                <Label.Detail>{accountBalance}</Label.Detail>
          </Label> 
          <p></p>
          <Label>
                Unreceived Tokens: : 
                <Label.Detail>{allowance}</Label.Detail>
          </Label> 
          <p></p>
        </div> 
        <hr /> 
        <p></p> 
        <div> 
            <TransferForm 
              web3={web3} 
              contract={contract} 
              currentAccount={currentAccount}
              allowance={allowance}
            /> 
        </div>
      </Layout>
    );
  }
}

// export default () => (
//   <Web3Container
//     renderLoading={() => <div>Loading Dapp Page...</div>}
//     render={({ web3, contract, currentAccount, accountBalance, allowance }) => (
//       <Transfer
//         contract={contract} 
//         web3={web3}        
//         currentAccount={currentAccount} 
//         accountBalance={accountBalance}
//         allowance={allowance}          
//       />
//     )}
//   />
// ) 