import React from 'react'
import './Home.css'
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Home() {
  return (
    <div className='home'>









































      <div className="testimonails">
        <div className="test__btn1">Testimonails</div>
        <h1 className='test__h1'>What Our Patients Say</h1>
        <p className='test__p1'>Read the experiences of our satisfied patients who have trusted us with their
          <br />
          healthcare needs.</p>
        <div className="test__cardbox">

          <div className="test__icone1">
            <FaQuoteRight className='quote' />
            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <p className='card__p'>"Doctor A Hospital provided excellent care  <br />
              during my recovery. The staff was professional, <br />
              caring, and attentive to all my needs. Highly <br />
              recommended!"</p>
            <div className="line"></div>
            <p className="card__p2">Aziza Tursunova</p>
            <p className="card__p3">Namangan</p>
            <p className="card__p4">March 2026</p>
          </div>


          <div className="test__icone1">
            <FaQuoteRight className='quote' />
            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <p className='card__p'>"The cardiology department at Doctor A is br
              outstanding. Dr. Rahimov and his team saved <br />
              my life. Forever grateful for their expertise and <br />
              dedication."</p>
            <div className="line"></div>
            <p className="card__p2">Jamshid Alimov</p>
            <p className="card__p3">Namangan</p>
            <p className="card__p4">February 2026</p>
          </div>




          <div className="test__icone1">
            <FaQuoteRight className='quote' />
            <span className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
            <p className='card__pp3'>"As a mother, I trust Doctor A with my children's <br />
              health. Dr. Nilufar is amazing with kids and the <br />
              pediatric department is top-notch."</p>
            <div className="line"></div>
            <p className="card__p2">Aziza Tursunova</p>
            <p className="card__p3">Namangan</p>
            <p className="card__p4">March 2026</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home