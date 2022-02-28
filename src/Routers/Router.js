import React from 'react'
import { BrowserRouter, Switch, Route, Routes, useNavigate } from 'react-router-dom'
import Main from '../Pages/Dashboard/Main'
import Login from '../Pages/Login/Login'
import BookNow from '../Components/BookNow/BookNow'
import PastOffers from "../Pages/PastOffersPage/PastOffers"

export const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route exact path="/Dashboard" element={<Main />} />

                    <Route path="/BookNow" element={<BookNow />} />

                    <Route path="/PastOffers" element={<PastOffers />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
