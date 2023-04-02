import React from 'react'
import e1 from '../image/logos_google-icon.png'
import e2 from '../image/Group.png'
import e3 from '../image/Vector (8).png'
import e4 from '../image/logos_slack-icon.png'
import e5 from '../image/Group.png'
import e6 from '../image/Vector (7).png'

function Footer() {

  const cardsData = [
    { id: 1, color: "#2c3e50", text: "Card 1" },
    { id: 2, color: "#2980b9", text: "Card 2" },
    { id: 3, color: "#8e44ad", text: "Card 3" },
    { id: 4, color: "#c0392b", text: "Card 4" },
    { id: 5, color: "#27ae60", text: "Card 5" },
    { id: 6, color: "#f39c12", text: "Card 6" },
  ];

  return (


    // <div className="cards-container">
    //   {cardsData.map((card, index) => {
    //     if (index === 0 || index === 5) {
    //       return (
    //         <div key={card.id} className="card column-1" style={{ backgroundColor: card.color }}>
    //           {card.text}
    //         </div>
    //       );
    //     } else if (index === 1 || index === 2) {
    //       return (
    //         <div key={card.id} className="card column-2" style={{ backgroundColor: card.color }}>
    //           {card.text}
    //         </div>
    //       );
    //     } else if (index === 3 || index === 4) {
    //       return (
    //         <div key={card.id} className="card column-3" style={{ backgroundColor: card.color }}>
    //           {card.text}
    //         </div>
    //       );
    //     }
    //   })}
    // </div>

<div className="footer">
<div className="butSection">
<h1>Intergrated With <br/> The Tools You Love</h1>
<button>Check Our Tools</button>
</div>

<div className="flex_container">

  <div className='flex_child square'>
    <div className='footerCard'>
      <img src={e1} alt=""  />
      <br/><br/><br/><br/><br/>
      <div className="right">
        <h2>Google</h2><br/>
        <p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam. Volutpat mauris euismod a massa.</p>
      </div>
    </div>
  </div>
  <div class='flex_child rect  '>
    <div className='footerCard'>
      <img src={e2} alt=""  />
      <div>
      <h2>Webflow</h2>
      <p>In in ut urna placerat. Pellentesque mauris euismod a  </p>
      </div>
    </div>
  </div>
  <div class='flex_child rect  '>
  <div className='footerCard'>
      <img src={e3} alt=""  />
      <div>
      <h2>Twitter</h2>
      <p>In in ut urna placerat. Pellentesque mauris euismod a  </p>
      </div>
    </div>
  </div>
  <div class='flex_child rect  '>
  <div className='footerCard'>
      <img src={e4} alt=""  />
      <div>
      <h2>Slack</h2>
      <p>In in ut urna placerat. Pellentesque mauris euismod a  </p>
      </div>
    </div>
  </div>
  <div class='flex_child rect  '>
  <div className='footerCard'>
      <img src={e5} alt=""  />
      <div>
      <h2>Instagram</h2>
      <p>In in ut urna placerat. Pellentesque mauris euismod a  </p>
      </div>
    </div>
  </div>
  <div class='flex_child square'>
    <div className='footerCard'>
      <img src={e6} alt=""  />
      <br/><br/><br/><br/><br/>
      <div className="right">
        <h2>Wordpress</h2><br/>
        <p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam. Volutpat mauris euismod a massa.</p>
      </div>
    </div>
  </div>

</div> 

</div>
 
   
    // <div className='footer1'>
    //   <img src={e1} alt=""  />
    //   <div className='footerCard'>
    //     <img src={e1} alt=""  />
    //     <div className="right">
    //     <h2>Google</h2>
    //     <p>In in ut urna placerat. Pellentesque mauris euismod a </p>
    //     </div>
    //   </div>
    //   <div className='footerCard'>
    //   <img src={e2} alt=""  />
    //   <p>In in ut urna placerat. Pellentesque mauris euismod a  </p>
    //   </div>
    //   <p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam. </p>
    //   <div>
    //     <h2>Google</h2>
    //     <p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam. Volutpat mauris euismod a massa.</p>
    //   </div>
    //   <p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam. </p>
    // </div> 
  )
}

export default Footer