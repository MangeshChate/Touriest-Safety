import React from 'react'

function Marquee() {
  return (
    <div >
      <div className='bg-primary p-1 text-light fw-bold shadow ' style={{ fontSize: "1.3rem" }}>
        <marquee behavior="scroll" direction="left">
          सभी चारधाम तथा हेमकुंड साहिब श्रद्धालुओं  के लिए आवश्यक सूचना

          मौसम विभाग द्वारा उत्तराखण्ड के विभिन्न क्षेत्रों में अतिवृष्टि की चेतावनी जारी की गई है।

          तीर्थयात्रियों की सुरक्षा को ध्यान में रखते हुए चारधाम यात्रा और हेमकुंड साहिब यात्रा 14.08.2023 - 15.08.2023 के लिए स्थगित कर दी गई है।



        </marquee>

      </div>
      <div className='bg-primary p-1 mt-1 text-light fw-bold  shadow-lg' style={{ fontSize: "1.3rem" }}>
        <marquee behavior="scroll" direction="left">

          Dear Pilgrims,
          Indian Metrological Department has issued a High Alert in various regions of Uttarakhand with heavy rainfall.

          Considering the safety of pilgrims, Chardham Yatra and Hemkund Sahib Yatra have been suspended for the 14.08.2023 to 15.08.2023.
        </marquee>

      </div>
    </div>
  )
}

export default Marquee
