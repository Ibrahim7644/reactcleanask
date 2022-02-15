import React from "react";
import "./Kpi.css";
import { MdAccountCircle } from "react-icons/md";

export default function Kpi() {
  return (
    <>
      <div class="container">
        <div className="container-fluid">
          <div class="row">

            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
              <div class="card">
                <div class="card-body">
                  <MdAccountCircle size={25} className="vendorIcon" />
                  <h5 class="card-text text-center">Search Vendors1</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
              <div class="card">
                <div class="card-body">
                  <MdAccountCircle size={25} className="vendorIcon" />
                  <h5 class="card-text text-center">Manage Contracts</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
              <div class="card">
                <div class="card-body">
                  <MdAccountCircle size={25} className="vendorIcon" />
                  <h5 class="card-text text-center">Order Supplies</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
              <div class="card">
                <div class="card-body">
                  <MdAccountCircle size={25} className="vendorIcon" />
                  <h5 class="card-text text-center">Manage Finances</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
              <div class="card">
                <div class="card-body">
                  <MdAccountCircle size={25} className="vendorIcon" />
                  <h5 class="card-text text-center ">Manage Clients</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
