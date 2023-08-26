import React from 'react'

export default function Topbar() {
  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-3 d-flex justify-content-center align-items-center">
            <img src="/img/companylogo.png" height={"70px"} alt="logo" />
            <h1 className="text-light mx-2 bg-logo-name-topbar">Beangate</h1>
          </div>
          <div className="col-5 d-flex justify-content-around align-items-center ">
            <div className="d-flex justify-content-center align-items-center mt-3">
              <div className="input-group mb-3 d-flex justify-content-center align-items-center">
                
                <input
                  type="text"
                  className="form-control rounded-pill "
                  placeHolder="Search....."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <span
                  className="input-group-text rounded-circle mx-2"
                  id="basic-addon1" style={{backgroundColor:"#f06d03"}}
                >
                  <i className="bi bi-search text-white "></i>
                </span>
              </div>
            </div>
            <div className=""m-0>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-bell-fill text-light"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </div>

            <div className="profile-pic">
              <img src="img/profile-pic.jpg" alt="pic" className="p-pic" />
            </div>
            <div className="profile-name text-white  d-flex justify-content-center align-items-start flex-column">
              <span>Sachin Pawar</span>
              <span style={{fontSize:"x-small"}} className="mt-0">
                UI/UX Designer
              </span>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-dark dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <i className="bi bi-three-dots"></i>
            </button>
            <ul className="dropdown-menu p-2 mt-3">
              <li><a href="Loginpage" class="text-decoration-none text-dark">LogOut</a>
                {/* <link rel="stylesheet" href="Loginpage" placeholder='Logout' /> */}
              </li>
            </ul>
          </div>
        </div>
      {/* <!-- header end  --> */}
    </div>
    </div>
  )
}
