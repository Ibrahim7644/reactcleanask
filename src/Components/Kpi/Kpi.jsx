import React from "react";
import "./Kpi.css";
import { MdAccountCircle } from "react-icons/md";

export default function Kpi(props) {
  return (
    <>
      <div className="col-lg-2 col-md-4 d-flex align-items-stretch col-sm-4 col-xs-6">
        <div class="card">
          <div class="card-body">
            <MdAccountCircle size={25} className="vendorIcon" />
            <h5 class="card-text text-center">{props.title}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
