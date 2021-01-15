import React, { Component } from "react";

class CaseDetailTable extends Component {
  state = {};
  render() {
    return (
      <div className="card mt-2">
        <div className="card-header">
          <h5 className="m-0">New Event</h5>
        </div>
        <div className="card-body">
          {" "}
          <div className="table-responsive">
            <table className="table table-sm table-bordered table-hover">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Action date</th>
                  <th>Action Type</th>
                  <th>Action Code</th>
                  <th>Spoke With</th>
                  <th>Source</th>
                  <th>Information</th>
                  <th>Note</th>
                  <th>Inserted</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>12/17/2020</td>
                  <td>-</td>
                  <td>NoAnswer</td>
                  <td>-</td>
                  <td>09472454073</td>
                  <td style={{ width: "10%" }}>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "100px",
                        display: "block",
                      }}
                    >
                      {" "}
                      AutoDial: FAILED, duration: 25, billsec: 0, Template: ,
                      PhoneNumber: 09757873206
                    </span>
                  </td>
                  <td>11454849</td>
                  <td>AutoDialer</td>
                </tr>
                 <tr>
                  <td>1.</td>
                  <td>12/17/2020</td>
                  <td>-</td>
                  <td>NoAnswer</td>
                  <td>-</td>
                  <td>09472454073</td>
                  <td style={{ width: "10%" }}>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "100px",
                        display: "block",
                      }}
                    >
                      {" "}
                      AutoDial: FAILED, duration: 25, billsec: 0, Template: ,
                      PhoneNumber: 09757873206
                    </span>
                  </td>
                  <td>11454849</td>
                  <td>AutoDialer</td>
                </tr>
                 <tr>
                  <td>1.</td>
                  <td>12/17/2020</td>
                  <td>-</td>
                  <td>NoAnswer</td>
                  <td>-</td>
                  <td>09472454073</td>
                  <td style={{ width: "10%" }}>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "100px",
                        display: "block",
                      }}
                    >
                      {" "}
                      AutoDial: FAILED, duration: 25, billsec: 0, Template: ,
                      PhoneNumber: 09757873206
                    </span>
                  </td>
                  <td>11454849</td>
                  <td>AutoDialer</td>
                </tr>
                 <tr>
                  <td>1.</td>
                  <td>12/17/2020</td>
                  <td>-</td>
                  <td>NoAnswer</td>
                  <td>-</td>
                  <td>09472454073</td>
                  <td style={{ width: "10%" }}>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "100px",
                        display: "block",
                      }}
                    >
                      {" "}
                      AutoDial: FAILED, duration: 25, billsec: 0, Template: ,
                      PhoneNumber: 09757873206
                    </span>
                  </td>
                  <td>11454849</td>
                  <td>AutoDialer</td>
                </tr>
                 <tr>
                  <td>1.</td>
                  <td>12/17/2020</td>
                  <td>-</td>
                  <td>NoAnswer</td>
                  <td>-</td>
                  <td>09472454073</td>
                  <td style={{ width: "10%" }}>
                    <span
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "100px",
                        display: "block",
                      }}
                    >
                      {" "}
                      AutoDial: FAILED, duration: 25, billsec: 0, Template: ,
                      PhoneNumber: 09757873206
                    </span>
                  </td>
                  <td>11454849</td>
                  <td>AutoDialer</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseDetailTable;
