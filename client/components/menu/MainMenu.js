import React, { Component } from "react";
import { Header, Menu } from "semantic-ui-react";
import { Link, Router } from "../../routes";

export default class MainMenu extends Component {
  state = { activeItem: "" };

  handleSelectedItem = async (event, activeItem) => {
    console.log("+++++ MainMenu.handleSelectedItem itemName +++++++");
    console.log(activeItem);
    // console.log(activeItem.name)

    this.setState({ activeItem });
    await Router.pushRoute(`/${activeItem.name}`);
  };

  render() {
    //const { activeItem } = this.state || {}
    console.log(this.state.activeItem.name);
    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header as="h3">Home</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="Index"
              active={this.state.activeItem.name === "Index"}
              onClick={this.handleSelectedItem}
            >
              click to home page
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Accounts</Menu.Header>
          <Menu.Menu>
            <Menu.Item
              name="TransferBalances"
              active={this.state.activeItem.name === "TransferBalances"}
              onClick={this.handleSelectedItem}
            >
              <Header sub>Balances</Header>
              <p>approved transfer balances</p>
            </Menu.Item>
            <Menu.Item
              name="ApproveTransfer"
              active={this.state.activeItem.name === "ApproveTransfer"}
              onClick={this.handleSelectedItem}
            >
              <Header sub>Approve</Header>
              <p>to approve token transfer</p>
            </Menu.Item>
            <Menu.Item
              name="MyTransfer"
              active={this.state.activeItem.name === "MyTransfer"}
              onClick={this.handleSelectedItem}
            >
              <Header sub>My Transfer</Header>
              <p>transfer my token</p>
            </Menu.Item>
            <Menu.Item
              name="OtherTransfer"
              active={this.state.activeItem.name === "OtherTransfer"}
              onClick={this.handleSelectedItem}
            >
              <Header sub>Other Transfer</Header>
              <p>transfer other account tokens</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Admin</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="AllApprvTransBal"
              active={this.state.activeItem.name === "AllApprvTransBal"}
              onClick={this.handleSelectedItem}
            >
              <Header sub>All Balances</Header>
              <p>all approved transfer balances</p>
            </Menu.Item>
            <Menu.Item
              name="AllTransactions"
              active={this.state.activeItem.name === "AllTransactions"}
              onClick={this.handleSelectedItem}
            >
              <Header sub>all transactions</Header>
              <p>list all transactions</p>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
