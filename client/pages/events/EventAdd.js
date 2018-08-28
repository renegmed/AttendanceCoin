import React, { Component, Header } from "react";
import { Button, Divider, Form, Header as Hdr, Dropdown } from "semantic-ui-react";
import Layout from "../../components/containers/Layout";

class EventAdd extends Component {
  render() {
    const countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }]
    return ( 
       
      <Layout>
        <Hdr color="blue" size="small" content="New Event" />
        <Form size="large">
          <Form.Group>
            <Form.Field
              label="Name"
              control="input"
              placeholder="Short description of the event"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              label="Place"
              control="input"
              placeholder="Place of event"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              label="Date"
              control="input"
              placeholder="Date of event"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              label="Time"
              control="input"
              placeholder="Time of event"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              label="Status"
              control="input"
              placeholder="status"              
            />
            <Dropdown placeholder='Select Country' fluid search selection options={countryOptions} />
          </Form.Group>
          <Button type="submit">Save</Button>
          <Divider hidden />
        </Form>
      </Layout>
    );
  }
}

export default EventAdd;
