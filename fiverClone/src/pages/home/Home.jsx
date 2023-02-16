import React from "react"
import Featured from "../../components/featured/Featured"
import Slide from "../../components/slider/Slide"
import Sponsors from "../../components/sponsors/Sponsors"
import "./home.scss"
import { cards, projects } from "../../data"
import CatCard from "../../components/catCard/CatCard"
import ProjectCard from "../../components/projectCard/ProjectCard"

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Sponsors />
      <Slide duration={300} slidesToShow={5} arrowScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1>A Whole World of frelance talent at your fingertips</h1>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p>
              Find high-qualitt services at every price point. No hourly rate,
              just project-based pricing
            </p>

            <div className='title'>
              <img src='./img/check.png' alt='' />
              Quality work done quickly
            </div>
            <p>
            Find the right freelancer to begin working on your project within minutes.
            </p>

            <div className='title'>
              <img src='./img/check.png' alt='' />
              Protected payments, every time
            </div>
            <p>
            Always know what you will pay upfront. Your payment is not released until you approve the work.
            </p>

            <div className='title'>
              <img src='./img/check.png' alt='' />
              24/7 support
            </div>
            <p>
            Questions? Our round-the-clock support team is available to help anytime, anywhere.


            </p>

          </div>
          <div className='item'>
            <video src='./img/video.mp4' controls></video>
          </div>
        </div>
      </div>

      <div className='features dark'>
        <div className='container'>
          <div className="item">
            <h1>fiverr business</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits, dedicated to businesses
            </p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>

              <div className="title">
            <img src="./img/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
            <img src="./img/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace
            </div>
          <button>Explor fiverr Business</button>

          </div>
          <div className='item'>
            <img style={{width:"650px", height:"500px"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
          </div>
        </div>
      </div>

      <Slide duration={400} slidesToShow={4} arrowScroll={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slide>

    </div>
  );
}

export default Home
