import React, {Component} from 'react'
import { Table, Button } from 'semantic-ui-react' 

class TransactionRow extends Component { 
    render() {
        const { Row, Cell } = Table;
        const { id, transaction } = this.props;
        return (
            
            <Row>
                <Cell>{id}.</Cell>
                <Cell>{transaction.address}</Cell> 
            </Row>       
             
        )
    }
}

export default TransactionRow