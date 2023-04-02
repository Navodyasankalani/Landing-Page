import React from 'react'
import { useState, useEffect, useRef } from 'react'
import brandsDetails from './MarqueeDetails'
import Marquee from "react-fast-marquee";


function Marque() {

  const brands = [
    { src: "/Images/pngwing 3.png", alt: "" },
    { src: "/Images/2500px-JBL_logo 2.png", alt: "" },
    { src: "/Images/5848242ecef1014c0b5e49c8 1.png", alt: "" },
    { src: "/Images/1024px-Nest_Labs_logo 1.png", alt: "" },
    { src: "/Images/Beko_logo 1.png", alt: "" },
    { src: "/Images/google assistant.png", alt: "" },
    { src: "/Images/Havells-Logo.png", alt: "" }
    
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animation = null;

    const animateMarquee = () => {
      marquee.scrollLeft += 1;
      animation = requestAnimationFrame(animateMarquee);
    };

    animateMarquee();

    return () => cancelAnimationFrame(animation);
  }, []);

    // const [brand, setBrand] = useState(brandsDetails)
     console.log(brands)

  return (
    <div className="marque" ref={marqueeRef}>
      <Marquee>
      {brands.map((brand, index) => (
        
        <img key={index} src={brand.src} alt={brand.alt} />
      ))}
      </Marquee>
    </div>
    // <div className='marquee'>
    //   <Marque velocity={25}>
    //     {brand.map(brand => (
    //     <div className='box'>
    //         <div className="boxsection">
    //           {brand.id}
    //         <img src={brand.img} key={brand.id} alt="" />
    //         </div>
    //     </div>
    //     ))}
    //   </Marque>
    // </div>
  )
}

export default Marque