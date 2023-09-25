import React from 'react'

function Checkout() {
    return (
        <div className='pb-5 bg-body-secondary d-flex flex-column justify-content-center pt-5 align-items-center '>
            <h1>Check out This</h1>
            <p className='text-secondary w-50'>
                Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.
            </p>
            <div className="container mt-4 d-flex justify-content-evenly">
                <div className="card" style={{width:"400px"}} >
                    <img className="card-img-top" src="https://www.seawatersports.com/img/newimage/activies/fuatures/kolad-zipline.png" alt="Card image"  height="250px"/>
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title">Adventures</h5>
                           
                        </div>
                </div>

                <div className="card" style={{width:"400px"}} >
                    <img className="card-img-top" src="https://trekthehimalayas.com/wp-content/uploads/2023/04/VOF.jpg" alt="Card image" height="250px"/>
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title">Vally Of Flowers</h5>
                           
                        </div>
                </div>
                <div className="card" style={{width:"400px"}} >
                    <img className="card-img-top" src="https://d3pc1xvrcw35tl.cloudfront.net/ln/images/800x600/maharashtra-category_20200337332.jpeg" alt="Card image"  height="250px"/>
                        <div className="card-body justify-content-center d-flex align-items-center">
                            <h5 className="card-title">Places Visit In Maharshtar</h5>
                           
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
