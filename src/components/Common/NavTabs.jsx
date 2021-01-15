import React, { Component } from "react";

class NavTabs extends Component {

  render() {
    return (
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class={this.props.tabs.showCase ? "nav-link active" : "nav-link "}
            onClick={() => this.props.selectTab(1)}
            href="#"
          >
            Case
          </a>
        </li>
        <li class="nav-item">
          <a
            class={
              this.props.tabs.showPayment ? "nav-link active" : "nav-link "
            }
            onClick={() => this.props.selectTab(2)}
            href="#"
          >
            Payment
          </a>
        </li>
        <li class="nav-item">
          <a
            class={
              this.props.tabs.showAddresses ? "nav-link active" : "nav-link "
            }
            onClick={() => this.props.selectTab(3)}
            href="#"
          >
            Addresses
          </a>
        </li>
        <li class="nav-item">
          <a
            class={
              this.props.tabs.showAtttributes ? "nav-link active" : "nav-link "
            }
            onClick={() => this.props.selectTab(4)}
            href="#"
          >
            Debt Attributes
          </a>
        </li>
      </ul>
    );
  }
}

export default NavTabs;
