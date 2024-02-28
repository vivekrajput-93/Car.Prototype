import React from 'react'
import "../CSS/Home.css";
import homeBg from "../assets/hero-bg.png";
import hero from "../assets/hero.png";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className='home-container'>
        <div className="left-container">
            <h4 className='headline-one'>Plan your trip now.</h4>
            <span className='main-text'>Save <span className='big-span'>big</span> with our car rental</span>
            <p className='para-headline'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className="btn-container">
                <button>Book Ride</button>
                <button>Learn More</button>
            </div>
        </div>

        <div className="right-container">
            <img className='car-img' src={hero}  alt='hero-png' />
            <img className='car-bc-img' src={homeBg} alt='hero-bg' />
        </div>
    </div>
  )
}


export default Home
