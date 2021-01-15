import React, { Component } from 'react';

class CaseAddress extends Component {
    state = {  }
    render() { 
        return (
          <div className="card mt-2">
            <div className="card-header">
              <h5 className="m-0">Addresses</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <table className="table table-sm table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip Code</th>
                        <th>Region</th>
                        <th>Type</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jewel San Pedro 7114 Kundiman Street, Sampaloc</td>
                        <td>Manila</td>
                        <td>1008</td>
                        <td>NCR</td>
                        <td>Permanent Address</td>
                        <td>Address OK</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default CaseAddress;