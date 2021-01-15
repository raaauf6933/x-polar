import React, { Component } from "react";
import CaseTable from "./CaseTable";

import { getCases } from "../../services/fakeData";

class Cases extends Component {
  state = {
    cases: [],
  };

  componentDidMount() {
    const cases = getCases();
    this.setState({ cases });
    console.log(cases);
  }

  render() {
    return (
      <div>
        <div class="col-lg-12 mt-2">
          <div class="card">
            <div class="card-header">
              <h5 class="m-0">Featured</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-4">
                    <label>Batch number:</label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      ></input>
                      <div class="input-group-append">
                        <span class="input-group-text">...</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <label>Client Reference:</label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      ></input>
                      <div class="input-group-append">
                        <span class="input-group-text">...</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-4">
                    <label>ID of Debtor:</label>
                    <input class="form-control"></input>
                  </div>
                  <div class="col-4">
                    <label>First Name:</label>
                    <input class="form-control"></input>
                  </div>
                  <div class="col-4">
                    <label>Last Name:</label>
                    <input class="form-control"></input>
                  </div>
                  <div class="col-4">
                    <label>Birthdate:</label>
                    <input class="form-control"></input>
                  </div>
                  <div class="col-4">
                    <label>Status:</label>
                    <select className="form-control">
                      <option>All</option>
                      <option>In Collection</option>
                      <option>Collection Finished</option>
                    </select>
                  </div>
                  <div class="col-4">
                    <label>Department:</label>
                    <select className="form-control">
                      <option>All</option>
                      <option>1st Collection</option>
                      <option>2nd Collection</option>
                      <option>Quarantine</option>
                    </select>
                  </div>

                  <div class="col-4 mt-4">
                    <button class="btn btn-default">
                      <i class="fas fa-money-bill-wave"></i>
                    </button>
                    <button class="btn btn-default">
                      <i class="fas fa-list"></i>
                    </button>
                    <button class="btn btn-default">
                      <i class="fas fa-list-ol"></i>
                    </button>
                    <button class="btn btn-default">
                      <i class="fas fa-question-circle"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-end">
                <button class="btn btn-danger m-1">Reset</button>
                <button class="btn btn-primary m-1">Search</button>
              </div>
            </div>
          </div>
        </div>
        <CaseTable data={this.state.cases}></CaseTable>
      </div>
    );
  }
}

export default Cases;
