import React from "react";
import './RecentJobs.css'

import { BsChevronDoubleDown } from "react-icons/bs";


export default function RecentJobs() {
  return (
    <>
      <div className="col-lg-6 col-md-6 d-flex align-items-stretch col-sm-12 col-xs-12">
        <div class="card recentJobsCard">
          <div class="card-body">
            <h6 class="card-title"> Recent Jobs </h6>
            <button className="btn btn-sm btn-primary moreInfoBtn">More info &nbsp;&nbsp; <BsChevronDoubleDown/> </button>
            <p class="card-text">Chart2 here</p>
          </div>
        </div>
      </div>
    </>
  );
}
