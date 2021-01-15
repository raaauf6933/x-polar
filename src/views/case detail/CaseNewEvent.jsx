import React, { Component } from "react";

class CaseNewEvent extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="m-0">New Event</h5>
        </div>
        <div className="card-body">
          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputEmail4">Action Type</label>
                <select className="form-control">
                  <option>Outgoing Call</option>
                  <option>Incoming Call</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="inputEmail4">Phone</label>
                <select className="form-control">
                  <option>Outgoing Call</option>
                  <option>Incoming Call</option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="inputEmail4">Spoke With</label>
                <select className="form-control">
                  <option></option>
                </select>
              </div>
              <div class="form-group col-md-12">
                <label for="inputEmail4">Information</label>
                <textarea className="form-control"></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-end">
            <button class="btn btn-danger m-1">Reset</button>
            <button class="btn btn-success m-1">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CaseNewEvent;
