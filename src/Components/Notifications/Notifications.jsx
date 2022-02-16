import React from "react";
import "./Notifications.css";

export default function Notifications() {
  return (
    <>
      <div className="col-4 px-7">
        <div className="col-lg-12 col-md-12 d-flex align-self-stretch col-sm-12 col-xs-12">
          {/* Card 1 Start */}
          <div class="card flex-direction-column notification">
            <div>
              <h6 class="card-title row3BgColor">Notification</h6>
            </div>
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                distinctio ex eum, repellat rem nostrum modi? Eius, provident,
                unde adipisci amet ipsam facilis recusandae expedita alias
                veniam rerum labore enim.
              </p>
            </div>
            <button type="button" class="btn btn-primary">
              See All
            </button>
          </div>
          {/* Card End */}
        </div>
      </div>
    </>
  );
}
