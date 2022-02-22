import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import Kpi from "../../Components/Kpi/Kpi";

import "./Main.css";
import PastWeekInquiries from "../../Components/Past week inquiries/PastWeekInquiries";
import RecentJobs from "../../Components/Recent Jobs/RecentJobs";
import Progress from "../../Components/Progress/Progress";
import Notifications from "../../Components/Notifications/Notifications";
import IncomingInquiries from "../../Components/Incoming Inquiries/IncomingInquiries";
import ActiveJobs from "../../Components/Active Jobs/ActiveJobs";
import Map from "../../Components/Map/Map";
import ScheduledJobs from "../../Components/Scheduled Jobs/ScheduledJobs";

import { MdPersonSearch } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { GiNewspaper } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsFillPersonBadgeFill } from "react-icons/bs";

function Main(props) {
  return (

      <div className="main_menu">
        <div className="row">
          <div className="col-12">
            <Nav />
          </div>
        </div>
        <div className="row">
          <div className="sidebar col-1 bg-dark">
            <div class="row">
              <div class="col-12 d-inline-flex sideBarElement">
                <Sidebar />
              </div>
            </div>
          </div>
          {/* ROW 1 */}
          <div className="col-11 ">
            <div className="row">
              <div class="row mt-2 cardsCenter">
                <Kpi
                  title="Search Vendors"
                  icon={<MdPersonSearch size={"40"} color={"orange"} />}
                />
                <Kpi
                  title="Manage Contracts"
                  icon={<GiNewspaper size={"40"} color={"orange"} />}
                />
                <Kpi
                  title="Order Supplies"
                  icon={<FiTruck size={"40"} color={"orange"} />}
                />
                <Kpi
                  title="Manage Finances"
                  icon={<GiTakeMyMoney size={"40"} color={"orange"} />}
                />
                <Kpi
                  title="Manage Clients"
                  icon={<BsFillPersonBadgeFill size={"40"} color={"orange"} />}
                />
              </div>

              {/* ROW 2 */}
              <div class="row mt-2">
                <PastWeekInquiries />
                <RecentJobs />
                <Progress />
              </div>

              {/* ROW 3 */}
              <div class="row mt-2">
                <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
                  <div class="col-lg-12 col-md-12  col-sm-12 col-xs-12 min-vh-50">
                    <Notifications />
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 ">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <IncomingInquiries />
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <ActiveJobs />
                  </div>
                </div>
              </div>

              {/* ROW 4 */}
              <div class="row mt-2">
                <div className="col-lg-4 col-md-4 align-items-stretch col-sm-12 col-xs-12">
                  <Map />
                </div>
                <div className="col-lg-8 col-md-8  align-items-stretch col-sm-12 col-xs-12">
                  <ScheduledJobs />
                </div>
              </div>
              <div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
 
  );
}

Main.propTypes = {};

export default Main;
