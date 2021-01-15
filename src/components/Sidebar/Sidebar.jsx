import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Folder,
  ArrowDown,
  Briefcase,
  Clipboard,
  Sliders,
  Search,
  Tag,
  Send,
  Archive,
  Upload,
} from "react-feather";

class Sidebar extends Component {
  state = {};

  dropDown = (e) => {
    var dropdownContent = e.target.nextElementSibling;
    if (dropdownContent !== null) {
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    }
  };

  render() {
    return (
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <a
              className="nav-link-dropdown-btn"
              href={false}
              onClick={this.dropDown}
            >
              <Folder size={16} className="feather mr-1" />
              Collect{" "}
              <i className="mr-3" style={{ float: "right" }}>
                <ArrowDown size={18} />
              </i>
            </a>
            <div className="dropdown-container pl-5">
              <NavLink className="nav-link" to="/cases">
                <Search size={16} className="feather" />
                Cases{" "}
              </NavLink>
              <NavLink className="nav-link" to="/admin/user-management">
                <Tag size={16} className="feather" />
                My Cases{" "}
              </NavLink>
              <NavLink className="nav-link" to="/admin/user-management">
                <Send size={16} className="feather" />
                Mass SMS{" "}
              </NavLink>
            </div>
            <a
              className="nav-link-dropdown-btn"
              href={false}
              onClick={this.dropDown}
            >
              <Briefcase size={16} className="feather mr-1" />
              Manage{" "}
              <i className="mr-3" style={{ float: "right" }}>
                <ArrowDown size={18} />
              </i>
            </a>
            <div className="dropdown-container pl-5">
              <NavLink className="nav-link" to="/admin/employee_attendance">
                <Archive size={16} className="feather" />
                Cases Management{" "}
              </NavLink>
              <NavLink className="nav-link" to="/admin/user-management">
                <Upload size={16} className="feather" />
                Import Cases{" "}
              </NavLink>
              <NavLink className="nav-link" to="/admin/user-management">
                <Upload size={16} className="feather" />
                Import Payment{" "}
              </NavLink>
            </div>
            <a
              className="nav-link-dropdown-btn"
              href={false}
              onClick={this.dropDown}
            >
              <Clipboard size={16} className="feather mr-1" />
              Reports{" "}
              <i className="mr-3" style={{ float: "right" }}>
                <ArrowDown size={18} />
              </i>
            </a>
            <div className="dropdown-container pl-5">
              <NavLink className="nav-link" to="/admin/employee_attendance">
                <Clipboard size={16} className="feather" />
                Report 1{" "}
              </NavLink>
              <NavLink className="nav-link" to="/admin/user-management">
                <Clipboard size={16} className="feather" />
                Report 2{" "}
              </NavLink>
            </div>
            <NavLink className="nav-link" to="/admin/user-management">
              <Sliders size={16} className="feather mr-1" />
              Content Management
            </NavLink>
          </ul>

          {/* <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Last quarter
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}

export default Sidebar;
