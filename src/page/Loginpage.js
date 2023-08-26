import React from 'react'

export default function Loginpage() {
  return (
    <div>
      <div className="contaner-fluid">
    <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    <div className="wrapper">
        <div className="card-switch">
            <label className="switch">
                <input type="checkbox" className="toggle"/>
                <span className="slider"></span>
                <span className="card-side"></span>
                <div className="flip-card__inner">
                    <div className="flip-card__front">
                        <div class="title"><img src="./img/company-logo-full.png" alt="logo" width="75%"/></div>
                        <form class="flip-card__form" action="">
                            <input class="flip-card__input" name="email" placeholder="Email" type="email"/>
                            <input class="flip-card__input" name="password" placeholder="Password" type="password"/>
                            <button className="flip-card__btn"><a href="DashBoard" class="text-decoration-none text-light"> LogIn  </a></button>
                        <a href="#" className="text-dark text-decoration-none">Forgot Password ?</a>

                     </form>
                  </div>
                  <div className="flip-card__back">
                     <div class="title"><img src="./img/company-logo-full.png" alt="logo" width="75%"/></div>
                     <form class="flip-card__form" action="">
                         {/* <!-- <input class="flip-card__input" placeholder="Name" type="name"> --> */}
                        <input class="flip-card__input" name="email" placeholder="Email" type="email"/>
                        <input class="flip-card__input" name="password" placeholder="Password" type="password"/>
                        <button className="flip-card__btn text-light"><a href="Topbar" class="text-decoration-none text-light"> LogIn </a></button>
                        <a href="#" className="text-dark text-decoration-none">Forgot Password</a>
                    </form>
                  </div>
               </div>
            </label>
        </div>   
    </div>
</div>
    </div>
  )
}
