import React, { Component } from "react";

import Layout from "../../../components/containers/Layout";
import MyTransferForm from "./MyTransferForm";

class MyTransfer extends Component {
  render() {
    return (
      <Layout>
        <label>Transfer Token To An Account</label>
        <p />
        <MyTransferForm />
      </Layout>
    );
  }
}

export default MyTransfer;
