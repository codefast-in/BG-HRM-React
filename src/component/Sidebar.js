// import React, { useEffect } from "react";

export default function Sidebar() {
  

  return (
    <div>
      < div className="main-menu">

        <div class="scrollbar" id="style-1">

            <ul className="p-0">

                <li className="active">
                    <a href="/Dashboard" >
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

                <a href="#" class="dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-people-fill mx-2" style={{fontSize: "2rem"}}></i>
                                <span class="nav-text">Employee</span>
                            </a>
                    <ul class="dropdown-menu ">
                                    <li><button class="dropdown-item" type="button"><a href="employees.html" class="text-decoration-none text-dark">Details</a></button></li>                                    
                                    <li><button class="dropdown-item" type="button"><a href="attendance.html" class="text-decoration-none text-dark">Attendance</a></button></li>
                                    <li><button class="dropdown-item" type="button"> <a href="payslip.html" class="text-decoration-none text-dark">Pay Slip</a> </button></li>
                                    <li><button class="dropdown-item" type="button">Add Employee</button></li>
                                </ul>
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

    
      </div>
    </div>
  );
}
