import React from 'react'
import "../CSS/Home.css";
import homeBg from "../assets/hero-bg.png";
import hero from "../assets/hero.png";
import icon1 from "../assets/plan/icon1.png"
import icon2 from "../assets/plan/icon2.png"
import icon3 from "../assets/plan/icon3.png"

const Home = () => {
  return (
    <div className='home-container'>
        <section className="left-container">
            <h4 className='headline-one'>Plan your trip now.</h4>
            <span className='main-text'>Save <span className='big-span'>big</span> with our car rental</span>
            <p className='para-headline'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className="btn-container">
                <button>Book Ride</button>
                <button>Learn More</button>
            </div>
        </section>

        <section className="right-container">
            <img className='car-img' src={hero}  alt='hero-png' />
            <img className='car-bc-img' src={homeBg} alt='hero-bg' />
        </section>
        <div className='plan-container' >
          <section className='plan-heading'>
            <h4 className='h4'>Plan your trip now</h4>
            <h1>Quick & easy car rental</h1>
          </section>
          <span className='plan-section'>
            <div>
              <img src={icon1} alt='plab-images' />
              <h3>Select Car</h3>
              <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
            <div>
              <img src={icon2} alt='plab-images' />
              <h3>Contact Operator</h3>
              <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
            </div>
            <div>
              <img src={icon3} alt='plab-images' />
              <h3>Let's Drive</h3>
              <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
            </div>
          </span>
        </div>
    </div>
  )
}


export default Home
