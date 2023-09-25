import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg"
                style={{
                    backgroundImage: "url('https://images.alphacoders.com/104/1049857.jpg')",
                }}
            ></div>
            <div className="container-fluid position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-50 bg-dark">
                <div className='row container'>
                    <div className="col-6">

                        <h3>FIND NEXT PLACE  TO VISIT</h3>
                        <h1 className='fw-bold'>Explore the Maharshtra</h1>
                        <p className=''>Welcome to the Uttarakhand tourism development board. We are committed to provide you the safest travel portal to Uttarakhand and the most comprehensive Uttarakhand Tourist Safety information. Our top precedence is your safety. If you are seeking out Uttarakhand travel, look no further. Uttarakhand tourism website is the one-stop portal for all your Uttarakhand needs.</p>

                        <button className='btn shadow-lg fw-bold rounded-0 btn-primary'>Go Explore <ArrowRightAltIcon/> </button>
                    </div>

                    <div className="col-6">
                        <img src="https://i0.wp.com/keenventurers.in/wp-content/uploads/2021/07/maharashtra.jpeg?fit=560%2C292&ssl=1" alt="" className='shadow-lg  rounded-4 ' />
                        
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Main3
