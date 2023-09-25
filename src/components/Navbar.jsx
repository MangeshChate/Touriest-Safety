import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import {Link} from 'react-router-dom'
function Navbar() {
  return (

    <nav>

      <div className='container-fluid'>
        <div className="row  d-flex align-items-center justify-content-between p-3 text-light" style={{ backgroundColor: "#162241" }}>
          <div className="col-6 d-flex">
            <h5 className='fw-bold '>Tourist Care Maharshtra</h5>
            <h5 className='fw-bold ms-4'>Toll Free: 1364 | 0135 3520100</h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button className="btn shadow text-light fw-bold btn-sm btn-primary ms-2 me-2">Live Ganesh Darshan</button>
            <button className="btn shadow text-light fw-bold btn-sm btn-primary ms-2 me-2">WhatsApp Reg Guid</button>
            <button className="btn shadow text-light fw-bold btn-sm btn-primary ms-2 me-2">Yatri Certificate</button>

            <span className='d-flex justify-content-safe'>
              <InstagramIcon />|
              <TwitterIcon />|
              <FacebookIcon />

            </span>
          </div>

        </div>

        <div className="row navbar navbar-expand-lg d-flex bg-light ">
          <div className="container-fluid ">
            <span className='navbar-brand'>

              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Seal_of_Maharashtra.svg/640px-Seal_of_Maharashtra.svg.png" alt="" className='navbar-brand' width="50" />

              <img src="https://registrationandtouristcare.uk.gov.in/images/G20_India_2023_logo.svg.png" alt="" className='navbar-brand' width="70" />
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
              <ul class="navbar-nav d-flex align-items-center ">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" > BOOKINGS</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">VEHICLE REGISTRATION</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">NEARBY LOCATION</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">GALLERY</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">EMERGENCY</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link" href="#">FEEDBACK</a>
                </li>
                <li class="nav-item d-flex align-items-center">
                  <ThunderstormIcon />
                  <a class="nav-link" href="#">WEATHER FORECAST</a>
                </li>
                <li class="nav-item me-3 d-flex align-items-center">
                  <FavoriteIcon />
                  <a class="nav-link me-3" href="#">HEALTH ADVISORY</a>
                </li>
                <li class="nav-item  me-3">
                  <button className='btn  shadow btn-primary'>
                    <Link to="/register" className="text-light text-decoration-none">
                      <span>REGISTER/LOGIN</span>
                    </Link>
                  </button>
                </li>

              </ul>
            </div>
          </div>


        </div>


      </div>
    </nav>

  )
}

export default Navbar
