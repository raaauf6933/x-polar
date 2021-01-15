import React, { Component } from "react";

class CaseMoney extends Component {
  state = {};
  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          <h5 className="m-0">Payment</h5>
        </div>
        <div className="card-body">
          <table className="table table-sm table table-hover table-bordered">
            <thead>
              <tr>
                <th>Payment date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/02/2020</td>
                <td>P 1,000.00</td>
              </tr>
            </tbody>
          </table>
          <p>Inserted:</p>
          <h3>Total Payment:</h3>
        </div>
      </div>
    );
  }
}

export default CaseMoney;
