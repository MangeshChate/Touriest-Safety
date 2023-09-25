import React from 'react'

function Coursoul() {
  return (
    
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{backgroundImage:"url('https://www.bbsautomation.com/media/pages/company/locations/pune/cceff77161-1676632470/headbild-india-02b.jpg')",backgroundRepeat:"none" ,backgroundPosition:"center" ,backgroundSize:"cover"}}>
            <div style={{height:"40rem"}}>
            
            </div>
          </div>
          <div className="carousel-item " style={{backgroundImage:"url('https://images.prismic.io/indiahike/0c2a7a81-7dd5-4d1f-9e60-59b35aeecd63_Harishchandragad_Naini+Shah_Sunset1.jpg?auto=compress,format&rect=0,0,1200,675&w=1200&h=675')" ,backgroundRepeat:"none" ,backgroundPosition:"center" ,backgroundSize:"cover"}}>
            <div style={{height:"40rem"}}></div>
          </div>
          <div className="carousel-item " style={{backgroundImage:"url('https://i.pinimg.com/originals/f5/10/a5/f510a5f16c51782a5257c6c4c18cd00b.jpg')",backgroundRepeat:"none" ,backgroundPosition:"center" ,backgroundSize:"cover"}}>
            <div style={{height:"40rem"}}></div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
   
  )
}

export default Coursoul
