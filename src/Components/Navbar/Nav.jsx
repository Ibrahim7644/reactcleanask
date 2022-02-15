import React from 'react'
import './Nav.css';
import { GiLoveInjection  } from "react-icons/gi";
import { AiFillDollarCircle  } from "react-icons/ai";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Button } from 'bootstrap';

//import { Menu, Dropdown, Button } from 'antd';
//import Navbar from 'react-bootstrap/Navbar'
//import { Container, Navbar, NavDropdown } from 'react-bootstrap'
//import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';



function Nav(props) {
    return (
        <div class='row justify-content-around'>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand"><GiLoveInjection size={30} className="injectionIcon" /><h1 className='clean'> CLEAN</h1><h1 className='ask'> ASK</h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">History</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Support</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">FAQ</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        &nbsp;
                            <li class="nav-item">
                                <button type="button" class="btn btn-secondary btn-lg">Book Now</button>
                            </li>
                            &nbsp;
                            <li class="nav-item">
                                <button type="button" class="btn btn-secondary  btn-lg">Log Out</button>
                            </li>
                            &nbsp;
                            <li class="nav-item">
                            <button type="button" class="btn btn-secondary  btn-md"><AiFillDollarCircle size={34} className='icondollar' /><BiDotsVerticalRounded size={30}/></button>
                            </li>
                        </ul>
                    </div>


                </div>
            </nav>
        </div>
    )
}

Nav.propTypes = {}

export default Nav

