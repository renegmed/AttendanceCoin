import web3 from './web3';
import FixedSupplyToken from './contracts/FixedSupplyToken.json';
 
const instance = new web3.eth.Contract(
  JSON.parse(FixedSupplyToken.interface),
  //'0xd0ac423ef1fD01A42B6C6155188D611a95a683C3'
  '0x05e710afeebe27972e45f75aca2d16ec2c698f45'  
);

export default instance;
