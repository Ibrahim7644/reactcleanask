import React from "react";
import "./Notifications.css";

export default function Notifications() {
  return (
    <div className="cardBody ">
       <div class="card  d-flex align-self-stretch notification" style={{ marginTop : "2px" , borderRadius: "5%" }} > {/* height 500px */}
        <h6 class="card-title row3BgColor">Notification</h6>

        <div class="card-body   ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            distinctio ex eum, repellat rem nostrum modi? Eius, provident, unde
            adipisci amet ipsam facilis recusandae expedita alias veniam rerum
            labore enim. <br />
            <button type="button" class="btn btn-primary">
              See All
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
