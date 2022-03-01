import React from "react";
import "./Quotation.css";
import Table from "react-bootstrap/Table";
import { AiOutlineMore, AiOutlinePrinter } from "react-icons/ai";

export const Quotation = () => {
  return (
    <div className="row col-12">
      <div className="container mt-4">
        <div className="elapseContainer card col-lg-6 col-md-6 col-sm-12">
          <h6>
            <b>Elasped Time:</b> 00 : 15 : 05 Time since the quotation request
            is received
          </h6>
        </div>
        <div className="card quotationCard">
          <div>
            <h4 className="row quotation">Quotation</h4>

            <div class="btn-group quotationTableButton">
              <button
                type="button"
                class="btn  btn-light"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>
                  <AiOutlineMore size={30} />
                </span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item">
                    <b>View Similar Offer</b>{" "}
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    <b>Find Relevent Vendors</b>{" "}
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" href="#">
                    {" "}
                    <b>Find Alternative Items</b>{" "}
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" href="#">
                    {" "}
                    <b>Call Estimator</b>
                  </button>
                </li>
              </ul>
            </div>

            <div class="card-body text-center">
              <Table hover>
                <thead className="card-title headers">
                  <tr>
                    <th className="quotationTableHeads">Description</th>
                    <th className="quotationTableHeads">Quantity</th>
                    <th className="quotationTableHeads">Cost</th>
                    <th className="quotationTableHeads">Markup</th>
                    <th className="quotationTableHeads">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cleaning Brushes</td>
                    <td>09</td>
                    <td>$ 20</td>
                    <td>10%</td>
                    <td>$ 198</td>
                  </tr>
                  <tr>
                    <td>Cleaning Brushes</td>
                    <td>09</td>
                    <td>$ 20</td>
                    <td>10%</td>
                    <td>$ 198</td>
                  </tr>
                  <tr>
                    <td>Cleaning Brushes</td>
                    <td>09</td>
                    <td>$ 20</td>
                    <td>10%</td>
                    <td>$ 198</td>
                  </tr>
                  <tr>
                    <td>Cleaning Brushes</td>
                    <td>09</td>
                    <td>$ 20</td>
                    <td>10%</td>
                    <td>$ 198</td>
                  </tr>
                  <tr>
                    <td>Cleaning Brushes</td>
                    <td>09</td>
                    <td>$ 20</td>
                    <td>10%</td>
                    <td>$ 198</td>
                  </tr>

                  <tr class="grandTotal">
                    <td>Grand Total</td>
                    <td></td>
                    <td>$ 23</td>
                    <td>$ 545</td>
                    <td>$ 655</td>
                  </tr>
                </tbody>
              </Table>

              <div className="row">
                <div className="col-4 col-lg-4 col-md-12 col-sm-12 mt-2">
                  <button type="button" class="btn btn-secondary">
                    Hide Quantities
                  </button>
                </div>

                <div className="col-4 col-lg-4 col-md-12 col-sm-12 mt-2">
                  <div className="col-xs-2">
                    <b className="changeMarkup">Change Markup: </b>
                    <input
                      type="text"
                      id="text"
                      value={"20%"}
                      class="form-control form-control-sm inputField"
                    />
                  </div>
                </div>

                <div className="col-4 col-lg-4 col-md-12 col-sm-12 mt-2">
                  <b>Schedule Reminders: </b>{" "}
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    After 24 hours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-lg btn-warning btnSendOffer">
          {" "}
          <b>Send Offer</b>{" "}
        </button>
        <br />
        <button type="button" class="btn btn-lg btn-light btnPrinter">
          {" "}
          <AiOutlinePrinter size={"30"} />{" "}
        </button>
      </div>
    </div>
  );
};
