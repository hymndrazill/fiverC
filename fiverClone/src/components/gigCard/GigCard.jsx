import React from 'react'
import {Link} from "react-router-dom"
import "./gigcard.scss"
const GigCard = ({item}) => {
  return (
    <Link to="/gig/12">
    <div className='gigcard'>
        <img src={item.img} alt="" />
        <div className="info"></div>
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src="./img/star.png" alt="" />
                <span>{item.star}</span>
            </div>
            <hr/>
        <div className="details">
            <img src="./img/heart.png" alt="" />
            <div className="price">
                <span>Starting at</span>
                <h2>${item.price}</h2>
            </div>

        </div>
    </div>
    </Link>
  )
}

export default GigCard
