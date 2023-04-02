import React from 'react'
import e1 from '../image/Ellipse 1.png'
import e2 from '../image/Ellipse 2.png'
import e3 from '../image/Ellipse 3.png'
import e4 from '../image/Ellipse 4.png'

function Header() {
  return (
    <div className='header'>
      <div className="headerTitle">
      <h1 className='h1sec'>Transform with</h1>
      <div className="h1WithPic">
        <h1 className='h2sec'>SaaS Solution </h1>
        <div className="peopPic">
          <img src={e1} alt=""  />
          <img src={e2} alt=""  />
          <img src={e3} alt=""  />
          <img src={e4} alt=""  />
        </div>
      </div>
      <p>Vitae dictum mollis vel aliquam tortor aliquam sed nunc. Congue eros velit augue nisl. Vitae convallis blandit vulputate enim sollicitudin tristique velit orci.</p>
      <div className="check">
            <button>Check Out Tools</button>
      </div>
      </div>
        
    </div>
  )
}

export default Header