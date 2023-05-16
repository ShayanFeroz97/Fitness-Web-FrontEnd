import './Signup.css';
// import fitness from ".assets/fitnesstracker.gif.png";
// import logo from "./assets/fitnesslogo.png"

import React from 'react'

function Signup() {
  return (
    <div>
      <div className='main'>
        <div className='container'>

            <div className='container_form'>
            <div className='logo'>
              <img src="https://e7.pngegg.com/pngimages/485/781/png-clipart-finger-logo-chess-illustration-human-gym-t-shirt-design-blue-white-thumbnail.png" alt="" />
            </div>
            <div className='heading'>Log in</div>

            </div>


            <div className='container_img'>
                {/* <img src={fitness} alt=""/> */}
            </div>

        </div>
      </div>
    </div>
  )
}

export default Signup;
