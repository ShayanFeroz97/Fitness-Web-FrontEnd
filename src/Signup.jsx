import './Signup.css';
import fitness from "./assets/fitnesstracker.png";
import logo from "./assets/logo.png"

import React from 'react'

function Signup() {
  return (
    <div>
      <div className='main'>
        <div className='container'>

            <div className='container_form'>
            <div className='logo'>
              <img src={logo} alt="" width={130} height={120}/>
            </div>
            <div className='heading'>Log in</div>

            </div>


            <div className='container_img'>
                <img src={fitness} alt="aa"/>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Signup;
