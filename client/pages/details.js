
import React, { Component } from 'react'
import { Label } from 'semantic-ui-react';
//import Web3Container from '../lib/Web3Container'
import contract from '../lib/fixedSupplyToken'
import getWeb3 from '../lib/getWeb3'

export default class Details extends Component {
    state = {web3: null, contract: null, account: null}
    
    static async getInitialProps(props) {
        const { account } = props.query;
        console.log('------ Details.getInitialProps() account ---------');
        console.log(account)

        return { account };
    }
    // static async getInitialProps(props) {  
    //     const account =  pros.query.account 
    //     console.log("%%%%%%%%%%%%%% Details.getInitialProps account %%%%%%%%%%%")
    //     console.log(account)
    //     if (account) {
    //         this.setState({account}) ;   
    //     }

    //     const { web3, contract, accounts } = props.query  
    
    //     console.log(web3)
    //     console.log(contract)    
    //     console.log(accounts)

    //     return  { web3, contract, accounts }
    //}

    async componentDidMount () {

        console.log('------ Details.componentDidMount() ---------');

        const {account} = this.props
        //const { account } = this.props.query;
        console.log(account)  

        var currentAccount

        const web3 = await getWeb3()       
        const accounts = await web3.eth.getAccounts()
        const owner = await contract.methods.owner().call()   
        const newOwner = await contract.methods.newOwner().call()
        const name = await contract.methods.name().call()
        const symbol = await contract.methods.symbol().call()
        //const totalSupply = await contract.methods.totalSupply().call()
         //const decimals = await contract.methods.decimals().call()
        //const currentAccount = accounts[0]
    
        
        console.log(web3)
        console.log(contract)              
        console.log(owner)
        console.log(symbol) 

        if (account === 'undefined' ) {
            currentAccount = accounts[0]
            
        } else {
            currentAccount = account
        }
        
         console.log(currentAccount)  

        const accountBalance = await contract.methods.balanceOf(currentAccount).call()  
        
        console.log('------ Details.componentDidMount() 2 ---------');
        const allowance = await contract.methods.allowance(currentAccount, currentAccount).call()

        console.log('------ Details.componentDidMount() 3 ---------');
        //const { web3, contract, owner, name, newOwner, symbol, currentAccount, accountBalance, allowance, account } = this.props
           

        const _newOwner = await contract.methods.newOwner().call()

        console.log('------ Details.componentDidMount() 4 ---------');
        this.setState({ 
            web3, 
            contract,
            owner, 
            newOwner: _newOwner,          
            name, 
            symbol,              
            currentAccount, 
            accountBalance,
            allowance,       
        }); 
    }
   
    render() {         
         
        return (
        <div>
            <h3>Account Details</h3>
            <Label>
                Name of Token Account: 
                <Label.Detail>{this.state.name}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                Token Symbol: 
                <Label.Detail>{this.state.symbol}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                 Contract Owner: 
                <Label.Detail>{this.state.owner}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                 Pending New Owner: 
                <Label.Detail>{this.state.newOwner}</Label.Detail>
            </Label>           
            <p></p>
            <hr />    
            <Label>
                Your Account: 
                <Label.Detail>{this.state.currentAccount}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                Available Tokens: 
                <Label.Detail>{this.state.accountBalance}</Label.Detail>
            </Label>
            <p></p>
            <Label>
                Transferrable Tokens: 
                <Label.Detail>{this.state.allowance}</Label.Detail>
            </Label> 
            <p></p>                  
        </div>           
        )
    }    
}
 