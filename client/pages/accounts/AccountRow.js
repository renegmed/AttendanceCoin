import React, {Component} from 'react'
import { Table, Button } from 'semantic-ui-react' 

class AccountRow extends Component { 
    render() {
        const { Row, Cell } = Table;
        const { id, account } = this.props;
        return (
            
            <Row>
                <Cell>{id}.</Cell>
                <Cell>{account.name}</Cell>
                <Cell>{account.address}</Cell>
                <Cell>{account.tokens}</Cell> 
                <Cell><Button>details</Button></Cell>
            </Row>       
             
        )
    }
}

export default AccountRow