import React from "react";
import PropTypes from "prop-types";
import Nav from "../Navbar/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Kpi from "../Kpi/Kpi";
import Charts from "../Row2/Charts";
import Notifications from "../Row3/Notifications";

function Main(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Nav />
        </div>
      </div>
      <div className="row">
        <div className="col-1 px-7">
          <Sidebar />
        </div>
        <div className="col-11">
          <div class="container">
            <div className="container-fluid">
              <div class="row">
                <Kpi title="Search Venders" />
                <Kpi title="Manage Contracts" />
                <Kpi title="Order Supplies" />
                <Kpi title="Manage Finances" />
                <Kpi title="Manage Clients" />
              </div>
            </div>
          </div>
          <Charts />
          <Notifications />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};

export default Main;
