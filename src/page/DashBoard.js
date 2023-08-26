import React from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Topbar from '../component/Topbar'
import Sidebar from '../component/Sidebar'
// import Loginpage from './Loginpage'

export default function DashBoard() {
  return (
    <div>
      <Topbar/>
      <div className='d-flex justify-content-between '>
      <Sidebar/>
      <div className=" dashboard-main-box mx-5  d-flex justify-content-start flex-column">
            <div className="container-fluid my-4 card">
                <div className="col-sm-12 py-3 d-flex justify-content-between align-items-center ">
                    <div>
                        <h5 className="text-dark card-title fs-2"> Dashboard </h5>
                    </div>

                    <div>
                        <i class="fa-solid fa-sliders mx-2" style={{fontSize: "1.7rem", color:"#f06d03"}}></i>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex  justify-content-between align-items-start p-0">

                <div className="d-flex justify-content-center align-iteams-start flex-column box-main1">
                    <div className="card ">

                        <div className=" d-flex justify-content-between align-items-center">

                            <div>
                                <div className="d-flex  justify-content-around align-items-center">

                                    <i class="bi bi-person-vcard mx-3" style={{fontSize:"2rem", color:"#f06d03"}}></i>
                                    <h5 class="card-title my-2" style={{fontSize: "1rem"}}>Employees</h5>
                                </div>
                            </div>
                            <div>

                                <button type="button" className="btn btn-sm btn-white dropdown-toggle-split "
                                    style={{ float: "inline-end"}} data-bs-toggle="dropdown" aria-expanded="true">
                                    <i class="bi bi-three-dots-vertical" style={{fontSize: "1.5rem"}}></i>
                                </button>
                                <ul className="dropdown-menu p-2">
                                    <li>Log Out</li>

                                </ul>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 class="card-title" style={{fontSize: "1.5rem"}}>36</h5>
                            {/* <!-- <p className="card-text">This</p> --> */}
                        </div>
                        <div className="card-footer">


                            <small class="text-light" style={{fontSize:"0.8rem"}}>Last updated 3 mins ago </small>


                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className=" d-flex justify-content-between align-items-center">

                            <div>
                                <div className="d-flex  justify-content-around align-items-center">

                                    <i class="bi bi-bag-check mx-3" style={{fontSize:"2rem", color: "#f06d03"}}></i>
                                    <h5 class="card-title my-2" style={{fontSize: "1rem"}}>Clients</h5>
                                </div>
                            </div>

                            <div>

                                <button type="button" className="btn btn-sm btn-white dropdown-toggle-split "
                                    style={{ float: "inline-end"}} data-bs-toggle="dropdown" aria-expanded="true">
                                    <i class="bi bi-three-dots-vertical" style={{fontSize:"1.5rem"}}></i>
                                </button>
                                <ul className="dropdown-menu p-2">
                                    <li>Log Out</li>

                                </ul>
                            </div>
                        </div>

                        <div className="card-body">

                            <h5 class="card-title" style={{fontSize:"1.5rem"}}>36</h5>
                            {/* <!-- <p className="card-text">This</p> --> */}
                        </div>
                        <div className="card-footer ">
                            <small class="text-light " style={{fontSize:"0.8rem"}}>Last updated 3 mins ago</small>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className=" d-flex justify-content-between align-items-center">

                            <div>
                                <div className="d-flex  justify-content-around align-items-center">
                                
                                    <i class="fa-solid fa-graduation-cap mx-3" style={{fontSize:"2rem", color: "#f06d03"}}></i>
                                    <h5 class="card-title my-2" style={{fontSize:"1rem"}}>Students</h5>
                                </div>
                            </div>
                            <div>

                                <button type="button" className="btn btn-sm btn-white dropdown-toggle-split "
                                    style={{ float: "inline-end"}} data-bs-toggle="dropdown" aria-expanded="true">
                                    <i class="bi bi-three-dots-vertical" style={{fontSize:"1.5rem"}}></i>
                                </button>
                                <ul className="dropdown-menu p-2">
                                    <li>Log Out</li>

                                </ul>
                            </div>
                        </div>

                        <div className="card-body">
                            <h5 class="card-title" style={{fontSize: "1.5rem"}}>36</h5>

                            {/* <!-- <p className="card-text">This </p> --> */}
                        </div>
                        <div className="card-footer">
                            <small class="text-light" style={{fontSize:"0.8rem"}}>Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>


                <div className="container box-main d-flex justify-content-between ">

                    <div className="row row-1">
                        <div className="col-sm-12 card ">
                            <div className="d-flex justify-content-between align-items-center my-4">

                                <div>
                                    <h5 className="card-title fs-3 "> Projects </h5>
                                </div>
                                <div> 
                                    <i class="fa-solid fa-sheet-plastic mx-2" style={{fontSize:" 1.8rem", color:"#f06d03"}}></i>
                                </div>
                            </div>

                            <table className="tg table table-hover table-responsive table-striped mb-0 ">
                                <thead className="rounded-pill">
                                    <tr>
                                        <th>No.</th>
                                        <th>Leader</th>
                                        <th>Member's</th>
                                        <th>Project</th>
                                        <th>Date</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>sandeep</td>
                                        <td>5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>sandeep</td>
                                        <td className="tg-nrix">5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>sandeep</td>
                                        <td>5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>sandeep</td>
                                        <td>5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>sandeep</td>
                                        <td>5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>sandeep</td>
                                        <td>5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>sandeep</td>
                                        <td>5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>sandeep</td>
                                        <td>5</td>
                                        <td>HRM</td>
                                        <td>20/08/2023</td>
                                        <td>3 Months</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="row row-2">
                        <div className="col-sm-12 card">
                           <div className="d-flex justify-content-between align-items-center">

                           
                            <div>
                                <h5 className="card-title fs-3 my-4"> Students
                                </h5>
                            </div>
                            <div>
                                <i class="fa fa-graduation-cap mx-3" style={{fontSize:"2rem", color:"#f06d03"}}></i>
                            </div>
                        </div>

                            <table className="table table-hover table-striped table-responsive mb-0">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th> Course</th>
                                        <th>Start Date</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Shrsti Garehwal</td>
                                        <td>Front End Development</td>
                                        <td>22/03/2023</td>
                                        <td>3 months</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Priya Gokhe</td>
                                        <td>Full Stack Development</td>
                                        <td>22/03/2023</td>
                                        <td>6 months</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Aman Soni</td>
                                        <td>Full Stack Development</td>
                                        <td>22/03/2023</td>
                                        <td>6 months</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Aman Soni</td>
                                        <td>Full Stack Development</td>
                                        <td>22/03/2023</td>
                                        <td>6 months</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Aman Soni</td>
                                        <td>Full Stack Development</td>
                                        <td>22/03/2023</td>
                                        <td>6 months</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Aman Soni</td>
                                        <td>Full Stack Development</td>
                                        <td>22/03/2023</td>
                                        <td>6 months</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Aman Soni</td>
                                        <td>Full Stack Development</td>
                                        <td>22/03/2023</td>
                                        <td>6 months</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Aman Soni</td>
                                        <td>Full Stack Development</td>
                                        <td>22/03/2023</td>
                                        <td>6 months</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

      </div>
    </div>
  )
}
