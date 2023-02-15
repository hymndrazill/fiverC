import React, { useEffect, useState } from 'react'
// import {Link } from "react-router-dom"
import "./navbar.scss"
const Navbar = () => {
    const  [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const isActive = (e) =>{
        window.scrollY  > 0  ? setActive(true) : setActive(false)

    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive )
        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    },[])

    const currentUser = {
        id:1,
        username:"firas",
        isSeller:true,
    }

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
            {/* <Link to='/'> */}
            <span className='text'>fiv3rr</span>
            {/* </Link> */}
            <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Fiver Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
           { !currentUser?.isSeller && (
               <span>Become a seller</span>
           )
            } 
            {!currentUser ?
            (
                <button>Join</button>
            )
            :
            (
                <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="https://images.pexels.com/photos/13211837/pexels-photo-13211837.jpeg?auto=compress&cs=tinysrgb&w=400"/>
                    <span>{currentUser.username}</span>
                  {  open &&  <div className="options">
                        { currentUser?.isSeller && (
                            <>
                            <span>Gigs</span>
                            <span>Add new Gig</span>
                            </>
                        ) 
                        }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>LogOut</span>
                    </div>}
                </div>
            )
            }   
        </div>
      </div>
    { active &&(

        <>
     <hr/>
     <div className="menu">
        <span>Test</span>
        <span>Test</span>

     </div>
     </>
        )
     }
    </div>
  )
}

export default Navbar
