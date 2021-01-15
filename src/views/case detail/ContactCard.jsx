import React, { Component } from "react";
import { Phone } from "react-feather";

class ContactCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="m-0">
            <a>
              <Phone size={16} />
            </a>
          </h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            {" "}
            <button className="btn btn-sm btn-primary mr-1">New Phone</button>
            <button className="btn btn-sm btn-primary">New Email</button>
          </div>
          <table className="table  table-sm">
            <thead>
              <tr>
                <th>Phone / E-mail</th>
                <th>Type</th>
                <th>Status</th>
                <th>Answered</th>
                <th>Not Answered</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default ContactCard;
