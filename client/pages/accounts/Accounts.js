import React, {Component} from 'react'
import Layout from '../../components/containers/Layout';
import EventRow from "./AccountRow"
import { Table, Button  } from 'semantic-ui-react' 

class Accounts extends Component {
  state = {accounts:[
    { name:'John', 
      address: '0x01233213312436345',      
      tokens: 1212321345}, 
    { name:'Sanddy', 
      address: '0x0ef1123dfgnrttert',      
      tokens: 1800556733533},       
] }
    renderRows() {
        return this.state.accounts.map((account, index) => {
          return (
            <EventRow
              key={index}
              id={index+1}
              account={account}               
            />
          );
        });
    }   
  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout> 
        <Header color='blue' size='medium' content='List of Accounts'/>
        <Button>Add</Button>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Item#</HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Address</HeaderCell>
              <HeaderCell>Tokens</HeaderCell>            
              <HeaderCell></HeaderCell>   
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
      </Layout>
    );
  }
}

export default Accounts 