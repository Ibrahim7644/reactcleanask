import React from 'react'
import { BrowserRouter, Switch, Route, Routes, useNavigate } from 'react-router-dom'
import Main from '../Pages/Dashboard/Main'
import Login from '../Pages/Login/Login'
import BookNow from '../Components/BookNow/BookNow'

export const Router = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route exact path="/Dashboard" element={<Main />} />

                    <Route path="/BookNow" element={<BookNow />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
