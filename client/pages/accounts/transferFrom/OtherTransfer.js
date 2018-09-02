import React, { Component } from "react";

import Layout from "../../../components/containers/Layout";
import OtherTransferForm from "./OtherTransferForm";

class OtherTransfer extends Component {
  render() {
    return (
      <Layout>
        <label>Transfer Token From/To An Account</label>
        <p />
        <OtherTransferForm />
      </Layout>
    );
  }
}

export default OtherTransfer;
