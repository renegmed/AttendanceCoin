import web3 from "./web3";
import FixedSupplyTokenContract from "./contracts/FixedSupplyToken.json";
//import contract from 'truffle-contract'

const getContractInstance = async () => {
  // const networkId = await web3.eth.net.getId();
  // console.log("********* DeployedFixedSupplyToken.networkId *********");
  // console.log(networkId);

  let instance;

  // if (neworkId) {

   console.log("+++++ DeployedFixedSupplyToken.networkId contract(FixedSupplyTokenContract)+++++++");
  //   //const contract = require('truffle-contract')
  //   const fixedSupplyToken = await contract(FixedSupplyTokenContract)
  //   fixedSupplyToken.setProvider(this.state.web3.currentProvider)
     
  //   instance = fixedSupplyToken.deployed();

  //   // create the instance
  //   //instance = new web3.eth.Contract(contractDefinition.abi, deployedAddress);
  // } else {
    instance = new web3.eth.Contract(
      JSON.parse(FixedSupplyToken.interface),
      //'0xd0ac423ef1fD01A42B6C6155188D611a95a683C3'
      //"0x05e710afeebe27972e45f75aca2d16ec2c698f45"
      '0x973a7761734c956afafb8becb3e332e2aa1b4a54'
    );
  // }
  return instance;
};
export default getContractInstance;
