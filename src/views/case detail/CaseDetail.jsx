import React, { Component } from "react";

import ContactCard from "./ContactCard";
import CaseNewEvent from "./CaseNewEvent";
import CaseDetailTable from "./CaseDetailTable";
import CasePtpHistory from "./CasePtpHistory";

import CaseMoney from "./CaseMoney";
import CaseAddress from "./CaseAddress";
import CaseAttribute from "./CaseAttribute";

import NavTabs from "./../../components/Common/NavTabs";

import { getCase } from "../../services/fakeData";

class CaseDetail extends Component {
  state = {
    data: [],
    showCase: true,
    showPayment: false,
    showAddresses: false,
    showAtttributes: false,
  };
  componentDidMount() {
    const data = getCase(parseInt(this.props.match.params.id));
    this.setState({ data });
  }

  handleNavtab = (e) => {
    if (e === 1) {
      this.setState({ showCase: true });
      this.setState({
        showPayment: false,
        showAddresses: false,
        showAtttributes: false,
      });
    } else if (e === 2) {
      this.setState({ showPayment: true });
      this.setState({
        showCase: false,
        showAddresses: false,
        showAtttributes: false,
      });
    } else if (e === 3) {
      this.setState({ showAddresses: true });
      this.setState({
        showPayment: false,
        showCase: false,
        showAtttributes: false,
      });
    } else {
      this.setState({ showAtttributes: true });
      this.setState({
        showPayment: false,
        showAddresses: false,
        showCase: false,
      });
    }
  };
  render() {
    return (
      <>
        <div className="row">
          {" "}
          <div className="col-lg-12 mt-2">
            <div className="card">
              <div className="card-header">
                {this.state.data.case_status ? (
                  <h5 className="m-0 text-success">Active</h5>
                ) : (
                  <h5 className="m-0 text-danger">Collection Finished</h5>
                )}
              </div>
              <div className="card-body">
                {" "}
                <div className="row">
                  <div className="col-4">
                    <p>
                      <b>Client Reference No.</b>{" "}
                      {this.state.data.client_reference}
                    </p>
                    <p>
                      <b>Reference No.</b> {this.state.data.ref_number}
                    </p>
                    <p>
                      <b>Client Name</b> {this.state.data.client_name}
                    </p>
                    <p>
                      <b>Department</b>
                    </p>
                  </div>
                  <div className="col-4">
                    <p>
                      <b>Debtor name</b> {this.state.data.name}
                    </p>
                    <p>
                      <b>Date of birth</b> {this.state.data.date_birth}
                    </p>
                    <p>
                      <b>Gender</b> {this.state.data.gender}
                    </p>
                  </div>
                  <div className="col-4">
                    <p>
                      <b>Original Capital</b> {this.state.data.original_capital}
                    </p>
                    <p>
                      <b>Actual Capital</b> {this.state.data.actual_capital}
                    </p>
                    <p>
                      <b>DPD / Live DPD</b> {this.state.data.dpd} /{" "}
                      {this.state.data.live_dpd}
                    </p>
                    <p>
                      <b>Assignment start date</b>{" "}
                      {this.state.data.assignment_date}
                    </p>
                    <p>
                      <b>Assignment end date</b>{" "}
                      {this.state.data.assignment_end_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-3">
            <NavTabs selectTab={this.handleNavtab} tabs={this.state} />
          </div>
          <div className="col-lg-12">
            <div
              className={
                this.state.showCase ? "case-detail" : "case-detail d-none"
              }
            >
              <div className="row">
                <div className="col-lg-8">
                  <ContactCard />
                  <CaseDetailTable />
                </div>
                <div className="col-4 mt-3">
                  <CaseNewEvent />
                  <CasePtpHistory />
                </div>
              </div>
            </div>
            <div
              className={
                this.state.showPayment ? "case-money" : "case-money d-none"
              }
            >
              <div className="row">
                <div className="col-lg-12">
                  <CaseMoney />
                </div>
              </div>
            </div>
            <div
              className={
                this.state.showAddresses
                  ? "case-addresses"
                  : "case-addresses d-none"
              }
            >
              <div className="row">
                <div className="col-lg-12">
                  <CaseAddress />
                </div>
              </div>
            </div>
            <div
              className={
                this.state.showAtttributes
                  ? "case-debtattr"
                  : "case-debtattr d-none"
              }
            >
              <div className="row">
                <div className="col-lg-12">
                  <CaseAttribute />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CaseDetail;
