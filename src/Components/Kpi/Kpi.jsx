import React from "react";
import "./Kpi.css";

export default function Kpi(props, { size , color }) {
  return (
    <>
      <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 d-flex align-items-stretch mb-2">
        <div
          class="card "
          style={{ borderRadius: "5%" }}
        >
          <div class="card-body kpiCard ">
            <div className="row">
              <div className="col-4">
                <svg size={size} fill={color} >{props.icon}</svg>
              </div>
              <div className="col-8">
                <h6 class="card-text ">{props.title}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
