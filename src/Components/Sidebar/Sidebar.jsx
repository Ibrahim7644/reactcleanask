import React from "react";
import "./Sidebar.css";
import { AiFillSignal } from "react-icons/ai";
import { RiLayoutGridLine, RiUser3Line } from "react-icons/ri";
import { VscRootFolder, VscInbox } from "react-icons/vsc";

function Sidebar(props) {
  return (
    <div class="text-white">
      <ul class="nav nav-pills d-flex align-items-center flex-column" id="menu">
        <br></br>
        <li class="nav-item">
          <a href="#" class="nav-link align-middle px-0">
            <i class="fs-4 bi-house"></i>{" "}
            <span class="ms-1  d-sm-inline ">
              <AiFillSignal size={20} />
            </span>
          </a>
        </li>
        <br></br>
        <li>
          <a
            href="#submenu1"
            data-bs-toggle="collapse"
            class="nav-link px-0 align-middle"
          >
            <i class="fs-4 bi-speedometer2"></i>{" "}
            <span class="ms-1  d-sm-inline">
              <RiLayoutGridLine size={20} />
            </span>{" "}
          </a>
        </li>
        <br></br>
        <li>
          <a href="#" class="nav-link px-0 align-middle">
            <i class="fs-4 bi-table"></i>{" "}
            <span class="ms-1  d-sm-inline">
              {" "}
              <RiUser3Line size={20} />
            </span>
          </a>
        </li>
        <br></br>
        <li>
          <a
            href="#submenu2"
            data-bs-toggle="collapse"
            class="nav-link px-0 align-middle "
          >
            <i class="fs-4 bi-bootstrap"></i>{" "}
            <span class="ms-1 d-sm-inline">
              <VscRootFolder size={20} />
            </span>
          </a>
        </li>
        <br></br>
        <li>
          <a
            href="#submenu3"
            data-bs-toggle="collapse"
            class="nav-link px-0 align-middle"
          >
            <i class="fs-4 bi-grid"></i>{" "}
            <span class="ms-1  d-sm-inline">
              <VscInbox size={20} />
            </span>{" "}
          </a>
        </li>
        <br></br>
      </ul>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
