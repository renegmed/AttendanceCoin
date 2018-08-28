import React, { Component } from "react";
import { Button, Divider, Form, Header as Hdr } from "semantic-ui-react";
import Layout from "../../components/containers/Layout";

class AdminAccount extends Component {
  render() {
    return (
      <Layout>
        <Hdr color="blue" size="small" content="Provide Owner Account" />
        <Hdr color="blue" size="tiny" content="current account here...." />
        <Form size="large">
          <Form.Group>
            <Form.Field
              label="Account"
              control="input"
              placeholder="Enter hash address"
              width={15}
            />
          </Form.Group>

          <Button type="submit">Proceed</Button>
          <Divider hidden />
        </Form>
      </Layout>
    );
  }
}

export default AdminAccount;
