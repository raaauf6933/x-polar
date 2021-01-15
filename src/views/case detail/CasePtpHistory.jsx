import React, { Component } from "react";

class CasePtpHistory extends Component {
  state = {};
  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          <h5 className="m-0">PTP History</h5>
        </div>
        <div className="card-body">
          <table className="table table-sm table-hover table-bordered">
            <thead>
              <tr>
                <th>Action Date</th>
                <th>Due Date</th>
                <th>PTP Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-success">
                <td>12/24/2020</td>
                <td>12/25/2020</td>
                <td>5000</td>
              </tr>
              <tr className="table-danger">
                <td>12/24/2020</td>
                <td>12/25/2020</td>
                <td>5000</td>
              </tr>
            </tbody>
          </table>
          <label>PTP Status:</label>
          <a className="btn btn-sm btn-success m-1">Active</a>
          <a className="btn btn-sm btn-secondary m-1">Canceled</a>
          <a className="btn btn-sm btn-danger m-1">Expired</a>
        </div>
      </div>
    );
  }
}

export default CasePtpHistory;
