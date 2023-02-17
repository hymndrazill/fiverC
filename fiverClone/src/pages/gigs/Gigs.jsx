import React, { useState } from 'react'
import GigCard from '../../components/gigCard/GigCard'
import { gigs } from '../../data'
import "./gigs.scss"
const Gigs = () => {

  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState("sales")

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }

  return (
    <div className='gigs'>
      <div className="container">
          <span className='breadcrumbs'>FIVERR>  Graphics & DESIGN.</span>
          <h1>AI Artists</h1>
          <p>
          explore the boundaries of art and technology with Fiverr's AI artists
          </p>
         <div className="menu">
            <div className="left">
              <span>Budget</span>
              <input type="text" placeholder='Min' />
              <input type="text" placeholder='Max' />
              <button>Apply</button>
            </div>
            <div className="right">
              <span className='sortby'>Sort By</span>
              <span className='sorttype'>{ sort ==="sales" ? " Best Selling" : "Newest"}</span>
              <img src="./img/down.png" alt=""  onClick={()=> setOpen(!open)} />
             { open && 
             <div className="rightmenu" >
                { sort === "sales" ? (
                  <span onClick={()=>reSort("createAt")}>Newest</span>
                )
                  : (
                    <span onClick={()=>reSort("sales")}>Best Selling</span>
                  )
                }
              </div>
              }
            </div>
         </div>
         
         <div className="cards">
          {gigs.map(gig=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
         </div>

      </div>
    </div>
  )
}

export default Gigs
