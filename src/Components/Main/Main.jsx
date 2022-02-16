import React from "react";
import PropTypes from "prop-types";
import Nav from "../Navbar/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Kpi from "../Kpi/Kpi";
import Charts from "../Row2/Charts";

import './Main.css';
import PastWeekInquiries from "../Past week inquiries/PastWeekInquiries";
import RecentJobs from "../Recent Jobs/RecentJobs";
import Progress from "../Progress/Progress";
import Notifications from "../Notifications/Notifications";
import IncomingInquiries from '../Incoming Inquiries/IncomingInquiries';
import ActiveJobs from "../Active Jobs/ActiveJobs";

function Main(props) {
  return (
    <div >
      <div className="main_menu">
        <div className="row">
          <div className="col-12">
            <Nav />
          </div>
        </div>
        <div className="row">
          <div className="col-1">

            <div class="row">
              <div class="col-12 d-inline-flex"><Sidebar /></div>
            </div>
          </div>
          <div className="inner col-11">
            <div class="row w-70 mt-4">
              <Kpi title="Search Venders" />
              <Kpi title="Manage Contracts" />
              <Kpi title="Order Supplies" />
              <Kpi title="Manage Finances" />
              <Kpi title="Manage Clients" />
            </div>
            <div class="row w-100 h-50 mt-4">
              <PastWeekInquiries />
              <RecentJobs />
              <Progress />

            </div>
            <div className="container">
              <div className="row">

                <Notifications />

                <div className="col-8">

                  <IncomingInquiries />

                  <ActiveJobs />

                </div>

              </div>
            </div>

          </div>
          <br /><br /><br /><br />

        </div>
        <div className="row">
          <div className="col-12 mt-100">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;
