import React, { Component } from "react";
import Layout from "../../components/containers/Layout";
import EventRow from "./EventRow"
import { Table, Button, Header, Icon, Modal } from 'semantic-ui-react' 

class Events extends Component {
    state = {events:[
        { name:'NYC Blockchain Meetup', 
          venue: '128 5th Ave. New York, NY', 
          date: '2018-11-15', 
          time: '19:00', 
          status: 'Open'}, 
        { name:'NYC Blockchain Hackathon', 
          venue: '215 Moore St. Brookly, NY', 
          date: '2018-12-13', 
          time: '10:00', 
          status: 'Open'},      
    ] }

    renderRows() {
        return this.state.events.map((event, index) => {
          return (
            <EventRow
              key={index}
              id={index+1}
              event={event}               
            />
          );
        });
    }   
  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout> 
        <Header color='blue' size='medium' content='List of Events'/>
        <Button>Add</Button>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Item#</HeaderCell>
              <HeaderCell>Event Name</HeaderCell>
              <HeaderCell>Venue</HeaderCell>
              <HeaderCell>Date</HeaderCell>
              <HeaderCell>Time</HeaderCell>
              <HeaderCell>Status</HeaderCell>
              <HeaderCell></HeaderCell>   
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
      </Layout>
    );
  }
}

export default Events;
