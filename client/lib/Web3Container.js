import React from 'react'
import web3 from './web3' 
import contract from './DeployedFixedSupplyToken'

export default class Web3Container extends React.Component {

  constructor(props) {
    super(props)
    this.state = { web3: null, currentAccount: null, contract: null};    
  }
   
  async componentDidMount () {

    const account = this.props.account

    console.log('^^^^^^^^^ Web3Container. componentDidMount ^^^^^^^^^')
  
    try {
      // const web3 = await getWeb3()     
      const accounts = await web3.eth.getAccounts()
      const owner = await contract.methods.owner().call()   
      const newOwner = await contract.methods.newOwner().call()
      const name = await contract.methods.name().call()
      const symbol = await contract.methods.symbol().call()
      //const totalSupply = await contract.methods.totalSupply().call()
      //const decimals = await contract.methods.decimals().call()
      //const currentAccount = accounts[0]
      const currentAccount = this.state.currentAccount

      console.log(currentAccount)
       
      let accountBalance = 0
      let allowance = 0
      if (currentAccount) {
        accountBalance = await contract.methods.balanceOf(this.state.currentAccount).call()     
        allowance = await contract.methods.allowance(this.state.currentAccount, this.state.currentAccount).call()
      }   
      //const setAccount = this.setAccount.bind(this);
      
      this.setState({ 
        web3, 
        contract,
        owner,
        newOwner,      
        name, 
        symbol,         
        currentAccount,        
        accountBalance,
        allowance,        
    }); 
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      )
      console.log(error)
    }
  }

  setAccount = (account, balance) => {
    console.log('+++++++ setAccount ++++++++++++')
    console.log(account)
    console.log(balance)
    this.setState({currentAccount: account, currentBalance: balance});
  }

  render () {
    // const account = this.props.account
    // console.log('^^^^^^^^^ Web3Container. render() ^^^^^^^^^')
    // console.log(account)

    const { web3, contract, owner, name, newOwner,symbol, currentAccount, accountBalance, allowance } = this.state
    
    return web3 && contract
      ? this.props.render({ 
        web3, 
        contract,
        owner,
        newOwner,    
        name, 
        symbol, 
        allowance,
        currentAccount, 
        accountBalance,  
        setAccount: this.setAccount.bind(this),
      })
      : this.props.renderLoading()
  }
}
