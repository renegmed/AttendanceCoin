import React, {Component} from 'react'
import { Table, Button } from 'semantic-ui-react' 

class EventRow extends Component { 
    render() {
        const { Row, Cell } = Table;
        const { id, event } = this.props;
        return (
            
            <Row>
                <Cell>{id}.</Cell>
                <Cell>{event.name}</Cell>
                <Cell>{event.venue}</Cell>
                <Cell>{event.date}</Cell>
                <Cell>{event.time}</Cell>
                <Cell>{event.status}</Cell>
                <Cell><Button>update</Button></Cell>
            </Row>       
             
        )
    }
}

export default EventRow