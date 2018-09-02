import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  console.log('-----  web3 current provider ------')
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
  console.log(web3)
  //console.log('***-----  web3 provider ------')
} else {
  console.log('-------- rinkeby infura httpProvider ---------')
  // We are on the server *OR* the user is not running metamask   
  const provider = new Web3.providers.HttpProvider(    
    'http://localhost:8545'
  );
 
  // console.log('----- Web3(provider) ------')
  web3 = new Web3(provider);
   
}

export default web3;
