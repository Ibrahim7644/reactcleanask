import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";
import { Quotation } from "../../Components/Quotation/Quotation";



export const QuotationPage = () => {
  return (
    <div className="main_menu">
      <div className="row">
        <div className="col-12">
          <Nav />
        </div>
      </div>
      <div className="row ">
        <div className="col-1 bg-dark">
          <Sidebar />
        </div>
        <div className="col-11">
          <Quotation/>
        </div>
    
      <div className="row ">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
    </div>
  );
};
