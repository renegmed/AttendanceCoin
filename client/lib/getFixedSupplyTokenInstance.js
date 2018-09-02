const getFixedSupplyTokenInstance = async (web3, fixedSupplyTokenDefinition) => {  // campaignFactoryDefinition is the abi
    // get network ID and the deployed address
    const networkId = await web3.eth.net.getId()
    const deployedAddress = fixedSupplyTokenDefinition.networks[networkId].address
  
    // create the instance
    const instance = new web3.eth.Contract(
        fixedSupplyTokenDefinition.abi,
        deployedAddress
    )
  
    console.log("------ getFixedSupplyTokenInstance ----");
    console.log(instance);
    
    return instance
  }
  
  export default getFixedSupplyTokenInstance
  