import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import Layout from '../components/Layout'; 
import Web3Container from '../lib/Web3Container'
import ApproveForm from '../components/ApproveForm'

export default class ApproveTransfer extends Component {   
  
  // constructor(props) {
  //   super(props)
    
  //   console.log(props.query)

  //   const { account } = props.query;
  //   console.log('------ ApproveTransfer.construct() ---------');
  //   console.log(account)
  //   this.state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0, account}

  // }

  state = {web3: null, contract: null,  currentAccount: '',   accountBalance: 0}

  static async getInitialProps(props) {
    const { account } = props.query;
    console.log('------ ApproveTransfer.getInitialProps() ---------');
    console.log(account)
    return { currentAccount: account };
  }
    
  // async componentDidMount () {
     
  //   const { web3, contract, currentAccount, accountBalance, allowance, account } = this.props

  //   console.log('------ ApproveTransfer.componentDidMount() ---------');
  //   console.log(web3)
  //   console.log(contract)    
  //   console.log(account)    

  //   this.setState({ 
  //       web3, 
  //       contract,                  
  //       currentAccount: account, 
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
                Current Account Balance: 
                <Label.Detail>{accountBalance}</Label.Detail>
          </Label> 
        </div>
        <hr />
             
        <div> 
        <ApproveForm 
              web3={web3} 
              contract={contract} 
              currentAccount={currentAccount} 
              accountBalance={accountBalance}
              allowance={allowance} /> 
        </div>
      </Layout>
    );
  }
}
 

// export default () => (
//   <Web3Container
//     renderLoading={() => <div>Loading Dapp Page...</div>}
//     render={({ web3, contract, currentAccount, accountBalance, allowance }) => (
//       <ApproveTransfer
//         contract={contract} 
//         web3={web3} 
//         currentAccount={currentAccount} 
//         accountBalance={accountBalance}
//         allowance={allowance}          
//       />
//     )}
//   />
// ) 