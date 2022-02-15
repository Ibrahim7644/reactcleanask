import React from 'react'
import './Sidebar.css';


function Sidebar(props) {
    return (
        <div class="sidebar">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    )
}

Sidebar.propTypes = {}

export default Sidebar
