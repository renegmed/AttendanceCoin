import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Web3Container from '../lib/Web3Container'
import AccountForm from '../components/AccountForm' 

class Account extends Component {   
  state = {web3: null, contract: null}
  
  static async getInitialProps(props) {
    const { account } = props.query;
    return { account };
  }
  
  async componentDidMount () {
    const { web3, contract, currentAccount, setAccount} = this.props

    console.log('------ Allowance.componentDidMount() ---------');
    console.log(web3)
    console.log(contract)    
    console.log(currentAccount)    

    this.setState({ 
        web3, 
        contract, 
        currentAccount,
        setAccount        
    }); 
  }
  
  render() { 
    const { web3, contract, currentAccount, setAccount } = this.state
    return (      
      <Layout>
        <div>
          <Label>
                User Account Address: 
                <Label.Detail>{this.state.currentAccount}</Label.Detail>
          </Label>
          <p></p>
          <Label>
                Current Account Balance: 
                <Label.Detail>{this.state.accountBalance}</Label.Detail>
          </Label> 
        </div>
        <p></p>
        <p></p>
        <p></p>       
        <div> 
            <AccountForm web3={web3} contract={contract} currentAccount={currentAccount} setAccount={setAccount}/>
        </div>
      </Layout>
    );
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, contract, name, symbol, totalSupply, decimals, currentAccount, accountBalance, setAccount }) => (
      <Account
        contract={contract} 
        web3={web3} 
        name={name} 
        symbol={symbol} 
        totalSupply={totalSupply} 
        decimals={decimals}
        currentAccount={currentAccount} 
        accountBalance={accountBalance}
        setAccount={setAccount}          
      />
    )}
  />
) 