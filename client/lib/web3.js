import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  console.log('-----  web3 current provider ------')
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.log('-------- rinkeby infura httpProvider ---------')
  // We are on the server *OR* the user is not running metamask   
  const provider = new Web3.providers.HttpProvider(    
    'https://rinkeby.infura.io/v3/79a18556aa274a0a9a5ee7304da13e34'
  );

  console.log(provider)
  web3 = new Web3(provider);
}

export default web3;
