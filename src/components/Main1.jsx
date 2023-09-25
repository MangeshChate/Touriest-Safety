import React from 'react'

function Main1() {
  return (
    <div className=' vh-75 d-flex mt-4 flex-column align-items-center' style={{ backgroundColor: "whitesmoke" }}>
      <div className='d-flex flex-column fw-bolder justify-content-center align-items-center'  >
        <span className='text-dark mt-3' style={{ fontSize: "3.5rem", fontFamily: "" }}>Maharshtra Yatra Registration</span>
        <span className='text-primary ' style={{ fontSize: "3.5rem", fontFamily: "" }}>And Nanded Yatra Registration</span>
        <span className='text-small mt-3 text-secondary'>can be done by following the simple registration process.</span>
      </div>

      <div className="container row mt-5">
        <div className="col-6">
          <div className='mt-4'>
            <h4 className='fw-bold'>Kind Attention</h4>
            <p className='text-secondary'>There is no fee involved in the Tourist registration process.

              Please carry valid personal ID proof during the Chardham and Hemkund Sahib yatra.</p>
          </div>

         

          <div className='mt-4'>
            <h4 className='fw-bold'>Modes of Registration:</h4>
            <p className='text-secondary'>1. Online through this Web Portal

              2. Through Mobile Application - Tourist Care Uttarakhand (Download Android App & iOS App )

              3. Through WhatsApp Facility - Mobile Number: +91 8394833833
              Type: “Yatra” to initiate the registration process in WhatsApp.</p>
          </div>

          <div className='mt-4'>
            <h4 className='fw-bold'>Mode of Verification:</h4>
            <p className='text-secondary'>Physically only at the shrine being visited through scanning of the “QR Code” in the mobile app or downloaded “Yatra Registration Letter”.</p>
          </div>

          <div className="mt-5">
            <button className='btn btn-primary shadow rounded-0 text-light'>Register Yourself for Maharshtra Yatra</button>
            <button className='btn btn-primary shadow rounded-0 text-light ms-3' >login to Your Account!</button>

          </div>
        </div>
        <div className="col-6 p-3 ">
        <h4 className='fw-bold '>Step wise Registration Process:</h4>
        <iframe className='shadow-lg' width="560" height="315" src="https://www.youtube.com/embed/hC9GpxRy9SE?si=0SItnzfwUqsIQ6Nz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Main1
