import React from 'react'
import "./slide.scss"
import Slider from "infinite-react-carousel"
import CatCard from '../catCard/CatCard'
import {cards} from "../../data"
const Slide = ({children, slidesToShow,arrowScroll,duration }) => {
  return (
    <div className='slide'>
        <div className="container">
            <Slider  
            slidesToShow={slidesToShow}
            duration={duration}
            arrowScroll= {arrowScroll}
            >
             {children}
                

            </Slider>
        </div>
    </div>
  )
}

export default Slide