import React from 'react'
import "./Landing1.css";

export default function Landing1() {
  return (
    <div>
      <div className='landing1_main'>
        <div className='landing1_container'>
            <div className='landing1_main_content'>
                <div className='landing1_main_heading'>
                    <div>
                    <span className='landing1_main_heading1'>Experience the <span>best</span> </span>
                    <span className='landing1_main_heading2'> Workout humanly</span>
                    <span className='landing1_main_heading3'> possible</span>  
                    </div>
                </div>
                <br />
                <br />
                <div className='landing1_main_para'>
                   <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                   <span>Vero eaque ipsa vitae corporis molestiae ad asper</span>  
                   <span> sapiente in Dolormaxime.</span>
                </div>
                <br />
                <br />
                <div className='landing1_main_buttons'>
                    <div className='btn1'>Get Started</div>
                    <div className='btn2'>Watch Video</div>
                </div>
            </div>
            <div className='landing1_main_img'>
                <img src="https://i.dailymail.co.uk/1s/2023/03/06/00/68368073-0-image-a-10_1678061405630.jpg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
