import React, { Component, Header } from "react";
import { Button, Divider, Form, Header as Hdr, Dropdown } from "semantic-ui-react";
import Layout from "../../components/containers/Layout";

class EventUpdate extends Component {
  state = {
    name: "NYC Blockchain Meetup",
    venue: "128 5th Ave. New York, NY",
    date: "2018-11-15",
    time: "19:00",
    status: "cancelled"
  };
  render() {
    const statusOptions = [ 
        { key: 'open', value: 'open', flag: 'open', text: 'Open' },
        { key: 'cancelled', value: 'cancelled', flag: 'cancelled', text: 'Cancelled' },
        { key: 'closed', value: 'closed', flag: 'closed', text: 'Closed' },
    ]
    return (
      <Layout>
        <Hdr color="blue" size="small" content="Update Existing Event" />

        <Form size="large">
          <Form.Group>
            <Form.Input
              label="Name" 
              placeholder="Short description of the event"
              value={this.state.name}
              width={10}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Place"             
              placeholder="Place of event"
              value={this.state.venue}
              width={15}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Date"              
              placeholder="Date of event"
              value={this.state.date}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Time"            
              placeholder="Time of event"
              value={this.state.time}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              label="Status"            
              placeholder="Event current status"
              value={this.state.status} 
            >
            <Dropdown placeholder='Select Status' value={this.state.status} fluid search selection options={statusOptions} />
            </Form.Input>
          </Form.Group>
          <Button type="submit">Save</Button>
          <Divider hidden />
        </Form>
      </Layout>
    );
  }
}

export default EventUpdate;
