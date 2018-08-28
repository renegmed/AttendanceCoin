const routes = require('next-routes')();

routes
  .add('/', '/index') 
  .add('/Index', '/index') 
  .add('/Events', '/events/Events') 
  .add('/EventAdd', '/events/EventAdd') 
  .add('/EventUpdate', '/events/EventUpdate') 
  .add('/AccountsList', '/accounts/Accounts') 
  .add('/AccountSearch', '/accounts/AccountSearch')
  .add('/AdminInfo', '/admin/AdminAccount') 
  .add('/AdminChange', '/admin/AdminChange');

  // .add('/index', '/index') 
  //   // Transfer the balance from token owner's account to `to` account
  //   // - Owner's account must have sufficient balance to transfer
  //   // - 0 value transfers are allowed
  // .add('/details', '/index')
  // // List of events or activities that can be attended to 
  // .add('/events', '/events') 
  // // Event/activity participant attended
  // .add('/attendance', '/attendance') 
  // .add('/transfer', '/transfer')  
  //   // Token owner can approve for `spender` to transferFrom(...) `tokens`
  //   // from the token owner's account
  // .add('/approve', '/approveTransfer') 
  //   // Transfer `tokens` from the `from` account to the `to` account
  // .add('/transferFrom', '/transferFrom')
  //   // Returns the amount of tokens approved by the owner that can be
  //   // transferred to the spender's account
  // .add('/allowance', '/allowance')
  // .add('/changeownership', '/changeOwnership')
  // .add('/acceptownership', '/acceptOwnership')
  //   // Token owner can approve for `spender` to transferFrom(...) `tokens`
  //   // from the token owner's account. The `spender` contract function
  //   // `receiveApproval(...)` is then executed
  // //.add('/approveAndCall', '/approveAndCall')    
module.exports = routes;
