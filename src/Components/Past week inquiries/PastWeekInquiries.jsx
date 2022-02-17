import React from "react";
import './PastWeekInquiries.css'

export default function PastWeekInquiries() {
  return (
    <>
      <div className="col-lg-3 col-md-3 d-flex align-items-stretch col-sm-12 col-xs-12">
        {/* Card 1 Start */}
        <div class="card pastWeekInquiriesCard" style={{ borderRadius: "3%" }}>
          <div class="card-body">
            <h6 class="card-title">Past Week Inquiries</h6>
            <hr />
            <p class="card-text">Chart1 here</p>
          </div>
        </div>
        {/* Card End */}
      </div>
    </>
  );
}
