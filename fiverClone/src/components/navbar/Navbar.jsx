import React, { useEffect, useState } from 'react'
import {Link , useLocation} from "react-router-dom"
import "./navbar.scss"
const Navbar = () => {
    const  [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation()

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
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
            <Link className="link" to='/'>
            <span className='text'>fiv3rr</span>
            </Link>
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
                            <Link className='link' to="/mygigs">Gigs</Link>
                            <Link className='link' to="/add">Add new Gig</Link>
                            </>
                        ) 
                        }
                            <Link className='link' to="/orders">Orders</Link>
                            <Link className='link' to="/messages">Messages</Link>
                            <Link className='link' to="/">LogOut</Link>
                    </div>}
                </div>
            )
            }   
        </div>
      </div>
    { (active || pathname !== "/") &&(

        <>
     <hr/>
     <div className="menu">
     <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
     </div>
     <hr />

     </>
        )
     }
    </div>
  )
}

export default Navbar
