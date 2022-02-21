import React from "react";
import "./Notifications.css";

export default function Notifications() {
  return (
    <div
      class="card d-flex align-self-stretch notificationCard" >
      {/* height 500px */}
      <h6 class="card-title notificationBar">Notifications</h6>
      <div class="card-body text-center">
      <div className="notificationBody">
        <h5>Alen Completed Job</h5>
        <p  className="notificationDescription">Alen has completed at 12:00 p.m.</p>
        <p className="notificationTime" >50 mins ago</p>
        <hr />
      </div>
      <div className="notificationBody">
        <h5>Alen Completed Job</h5>
        <p  className="notificationDescription">Alen has completed at 12:00 p.m.</p>
        <p className="notificationTime" >50 mins ago</p>
        <hr />
      </div>      <div className="notificationBody">
        <h5>Alen Completed Job</h5>
        <p  className="notificationDescription">Alen has completed at 12:00 p.m.</p>
        <p className="notificationTime" >50 mins ago</p>
        <hr />
      </div>      <div className="notificationBody">
        <h5>Alen Completed Job</h5>
        <p  className="notificationDescription">Alen has completed at 12:00 p.m.</p>
        <p className="notificationTime" >50 mins ago</p>
        <hr />
      </div>      <div className="notificationBody">
        <h5>Alen Completed Job</h5>
        <p  className="notificationDescription">Alen has completed at 12:00 p.m.</p>
        <p className="notificationTime" >50 mins ago</p>
        <hr />
      </div>
      </div>
      <button type="button" class="btn btn-primary seeAllBtn">
            See All
          </button>
    </div>
  );
}
