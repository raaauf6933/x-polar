import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const CaseTable = (props) => {
  const history = useHistory();
  const handleRowClick = (case_id) => {
    history.push(`/cases/detail/${case_id}`);
  };

  return (
    <div class="col-lg-12 mt-2">
      <div class="card mt-3">
        <div class="card-body">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Client ID</th>
                <th>Reference Number</th>
                <th>Debtor Name</th>
                <th>Client Reference</th>
                <th>DPD</th>
                <th>Original Capital</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((e) => {
                return (
                  <tr key={e.case_id} onClick={() => handleRowClick(e.case_id)}>
                    <td>{e.client_id}</td>
                    <td>{e.ref_number}</td>
                    <td>{e.name}</td>
                    <td>{e.client_reference}</td>
                    <td>{e.dpd}</td>
                    <td>P {e.original_capital}</td>
                    {e.case_status ? (
                      <td class="text-success">
                        <b>Active</b>
                      </td>
                    ) : (
                      <td class="text-danger">
                        <b>Collection Finished</b>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CaseTable;
