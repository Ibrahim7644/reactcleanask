import React from "react";
import "./Quotation.css";
import Table from "react-bootstrap/Table";

export const Quotation = () => {
  return (
    <div className="row col-12">
      <div className="elapseContainer col-lg-12 col-md-12 col-sm-12 ">
        <h6>
          <b>Elasped Time:</b> 00 : 15 : 05 Time since the quotation request is
          received
        </h6>
      </div>

      <div className="container">
        <div className="card quotationCard">
          <div>
            <h4 className="row quotation">Quotation</h4>

            <div class="card-body text-center">
              <Table hover>
                <thead className="card-title headers">
                  <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th>Markup</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cleaning Brushes</td>
                    <td>Plastic Caddy</td>
                    <td>Testing address somewhere at rwp</td>
                    <td className="Action">Quote</td>
                  </tr>
                  <tr>
                    <td>Job Title one</td>
                    <td>Kashif</td>
                    <td>Testing address somewhere at rwp</td>
                    <td className="Action">Quote</td>
                  </tr>
                  <tr>
                    <td>Job Title one</td>
                    <td>Kashif</td>
                    <td>Testing address somewhere at rwp</td>
                    <td className="Action">Quote</td>
                  </tr>
                  <tr>
                    <td>Job Title one</td>
                    <td>Kashif</td>
                    <td>Testing address somewhere at rwp</td>
                    <td className="Action">Quote</td>
                  </tr>
                  <tr>
                    <td>Job Title one</td>
                    <td>Kashif</td>
                    <td>Testing address somewhere at rwp</td>
                    <td className="Action">Quote</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
