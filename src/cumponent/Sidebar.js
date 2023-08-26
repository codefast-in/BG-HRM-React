import React, { useEffect } from "react";

export default function Sidebar() {
  function open() {
    document.getElementById("burg1").class = "sidebar1";
  }

  return (
    <div>
      {/* < div className="main-menu mt-5 pt-5">

        <div class="scrollbar" id="style-1">

            <ul>

                <li className="active">
                    <a href="dashboard.html" >
                        <i class="bi bi-columns-gap mx-2" style={{fontSize: "2rem"}}></i>
                        <span className="nav-text">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <i class="bi bi-person-fill mx-2" style={{fontSize: "2rem"}}></i>
                        <span className="nav-text">Management</span>
                    </a>
                </li>


                <li>
                    <a href="#">

                        <i class="bi bi-person-circle mx-2" style={{fontSize: "2rem"}}></i>
                        <span className="nav-text">Clients</span>
                    </a>
                </li>




                <li>

                    <a href="#">
                        <i class="bi bi-people-fill mx-2" style={{fontSize: "2rem"}}></i>
                        <span className="nav-text">Employee</span>
                    </a>
                </li>
                <li>

                    <a href="#">
                        <i class="bi bi-border-style mx-2" style={{fontSize: "2rem"}}></i>
                        <span className="nav-text">Students</span>
                    </a>
                </li>
                
                <li>

                    <a href="#">
                        <i class="bi bi-currency-rupee mx-2" style={{fontSize: "2rem"}}></i>
                        <span className="nav-text">Revenue</span>
                    </a>
                </li>

                <li>

                    <a href="#">
                        <i class="bi bi-calendar2-date-fill mx-2" style={{fontSize: "2rem"}}></i>
                        <span className="nav-text">Calender</span>
                    </a>
                </li>
            </ul>
        </div>

    
      </div> */}
      <div class="sidebar" id="burg1">
        <ul class="nav-links">
          <li>
            <a href="#">
              <i class="bx bx-grid-alt"></i>
              <span class="link_name">Dashboard</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Category
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-collection"></i>
                <span class="link_name">Management</span>
              </a>
              <i class="bx bxs-chevron-down arrow"  data-bs-toggle="dropdown"
              aria-expanded="true"></i>
            </div>
            <ul class="sub-menu dropdown-menu">
              <li>
                <a class="link_name" href="#">
                  Category
                </a>
              </li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">PHP & MySQL</a>
              </li>
            </ul>
          </li>
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-book-alt"></i>
                <span class="link_name">Clients</span>
              </a>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Posts
                </a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Login Form</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="link_name">Employees</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-line-chart"></i>
              <span class="link_name">Students</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Chart
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div class="icon-link">
              <a href="#">
                <i class="bx bx-plug"></i>
                <span class="link_name">Revenue</span>
              </a>
              <i class="bx bxs-chevron-down arrow"></i>
            </div>
            <ul class="sub-menu">
              <li>
                <a class="link_name" href="#">
                  Plugins
                </a>
              </li>
              <li>
                <a href="#">UI Face</a>
              </li>
              <li>
                <a href="#">Pigments</a>
              </li>
              <li>
                <a href="#">Box Icons</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-compass"></i>
              <span class="link_name">Calendar</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Explore
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-history"></i>
              <span class="link_name">Authority</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="link_name">Setting</span>
            </a>
            <ul class="sub-menu blank">
              <li>
                <a class="link_name" href="#">
                  Setting
                </a>
              </li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
