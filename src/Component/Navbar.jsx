import React from 'react'
import LogoIm1 from '../image/Ellipse 5.png'
import LogoIm2 from '../image/Ellipse 6.png'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={LogoIm1} alt="" />
            <img src={LogoIm2} alt="" />
        </div>
        <div className="links">
            <h6>Product</h6>
            <h6>Solution</h6>
            <h6>Resource</h6>
            <h6>Enterprise</h6>
            <h6>Pricing</h6>
        </div>
        <div className="signup">
            <button>SignUp</button>
        </div>
      

    </div>
  )
}

export default Navbar