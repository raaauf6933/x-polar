import React, { Component } from "react";

class CaseAttribute extends Component {
  state = {};
  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          <h5 className="m-0">Addresses</h5>
        </div>
        <div className="card-body">
          <table className="table table-sm table-bordered table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Principal Loan</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>Lifetime ID</td>
                <td>FD121</td>
              </tr>
              <tr>
                <td>Employer Name</td>
                <td>A.B.C Company</td>
              </tr>
              <tr>
                <td>Employment Position</td>
                <td>Software Developer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CaseAttribute;
