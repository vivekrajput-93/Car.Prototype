import React from 'react'
import icon1 from "../../assets/plan/icon1.png"
import icon2 from "../../assets/plan/icon2.png"
import icon3 from "../../assets/plan/icon3.png"
import "../../CSS/Plan.css";

const Plan = () => {
  return (
    <div className='plan-container' >
    <section className='plan-heading'>
      <h4>Plan your trip now</h4>
      <h1>Quick & easy car rental</h1>
    </section>
    <div className='plan-section'>
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
    </div>
  </div>
  )
}

export default Plan;