import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from "../Pages/Dashboard/Main";
import Login from "../Pages/Login/Login";
import BookNow from "../Components/BookNow/BookNow";
import { QuotationPage } from "../Pages/Quotation/QuotationPage";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route exact path="/Dashboard" element={<Main />} />

          <Route path="/BookNow" element={<BookNow />} />

          <Route path="/Quotation" element={<QuotationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
