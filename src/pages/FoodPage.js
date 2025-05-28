
import React, { useEffect, useState } from 'react';
import './FoodPage.css';
import axios from 'axios';

const FoodPage = () => {
  const [photos,setPhotos] = useState([])
  useEffect(()=>{
    axios.get(`https://mernback4pm.onrender.com/photo`)
    .then((res)=>{
      setPhotos(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  return (
    <div className="food-page">
      {photos.length >6 && (
         <section className="hero"  style={{background: `url(https://mernback4pm.onrender.com/photos/${photos[6].filename}) no-repeat center center/cover`,}}>
        <div className="overlay">
          <h1>Your Food. Our Tech. Everyone’s Delight.</h1>
          <p>
            At Do Dash, we believe the best meals deserve the best reach. And here’s what we bring to your table:
          </p>
          <button>Join us</button>
        </div>
      </section>

      )}

      <section className="why-join">
        <h2>Why Join Do Dash?</h2>
        <p>
          Do Dash is not just a food delivery platform. It’s a multi-service ecosystem where food, groceries, shopping, and travel come together making your restaurant visible to more customers than ever before.
        </p>
        <p>
          Whether you're a cloud kitchen, a small café, or a restaurant chain, we help you increase orders, streamline delivery, and maximize profits.
        </p>
      </section>

      <section className="features">
        <div className="grid">
          <div className="card">
            {/* <img src="/images/food-page-one.png" alt="Be Seen by Thousands" /> */}
            {photos.length >7 &&(
                 <img src={`https://mernback4pm.onrender.com/photos/${photos[7].filename}`} alt="Image 8" style={{height:'530px',width:'600px'}} />
            )}
            <h3>Maximum Visibility, Low Liability</h3>
            <p>Do Dash allows users to order food and groceries in one order. That means New customer segments, Higher order volumes & Shared delivery costs.</p>
          </div>
          <div className="card">
            {/* <img src="/images/food-page-two.png" alt="Be Seen by Thousands" /> */}
            {photos.length >8 &&(
                 <img src={`https://mernback4pm.onrender.com/photos/${photos[8].filename}`} alt="Image 9" style={{height:'530px',width:'600px'}} />
            )}
            <h3>Delivery at Your Convenience</h3>
            <p>Our trained fleet handles the pickup and delivery. All you need to do?Cook. Pack. Prosper.</p>
          </div>
        </div>
      </section>

      <section className="advantages">
        <div>
          <h3>Zero Onboarding Fees</h3>
          <p>Join us for free. We believe in empowering local businesses, not charging them upfront.</p>
          <h3>Lower Commissions, Higher Profits</h3>
          <p>Unlike other platforms that take a big bite out of your revenue, Do Dash charges a minimal commission. Designed to support local businesses, not drain them. We grow together by ensuring your margins stay healthy, and your success stays sustainable.</p>
        </div>
        {/* <img src="images/food-hero-two.png" /> */}
           {photos.length >9 &&(
                 <img src={`https://mernback4pm.onrender.com/photos/${photos[9].filename}`} alt="Image 10" />
            )}
      </section>

      <section className="join-us">
        <h2>Who can Join Us?</h2>
        <div className="join-us-grid">
          <div className="join-us-item">
            <div className="icon"><img src="images/food-one.png" alt="" /></div>
            <span>Restaurants & cafés</span>
          </div>
          <div className="join-us-item">
            <div className="icon"><img src="images/food-two.png" alt="" /></div>
            <span>Cloud kitchens</span>
          </div>
          <div className="join-us-item">
            <div className="icon"><img src="images/food-three.png" alt="" /></div>
            <span>Bakery & Dessert shops</span>
          </div>
          <div className="join-us-item">
            <div className="icon"><img src="images/food-four.png" alt="" /></div>
            <span>Juice centres & fast food joints</span>
          </div>
        </div>
      </section>


      <section className="how-it-works">
        <div className="how-grid">
          {/* <img className="img-placeholder big" src="/images/food-steps.png"/> */}
             {photos.length >10 &&(
                 <img src={`https://mernback4pm.onrender.com/photos/${photos[10].filename}`} alt="Image 11" style={{height:'600px',width:'600px'}} />
            )}
          <div className="steps">
            <h2>How it Works?</h2>
            <ul>
              <li><strong>1. Sign up</strong><br />Download the Do Dash Vendor App and complete your Restaurant profile.</li>
              <li><strong>2. Onboard</strong><br />Upload your Menu, set prices.</li>
              <li><strong>3. Go Live</strong><br />Start receiving orders instantly and track fulfillment in real time.</li>
              <li><strong>4. Promote & Optimize</strong><br />Use in-app marketing tools and analytics to refine offerings and maximize revenue.</li>
            </ul>
            <button className="contact-btn">Contact us</button>
          </div>
        </div>
      </section>

      <section className="solutions">
        <h3>Explore More Business Solutions from Do Dash</h3>
        <div className="solution-grid">
          <div className="solution-card">
            <img className="icon food" src="/images/shop.png"/>
            <h4>Shop</h4>
            <p>Grow your reach, boost your sales, and deliver faster than ever with Do Dash.</p>
          </div>
          <div className="solution-card">
          <img className="icon taxi" src="/images/taxi.png"/>
            <h4>Taxi</h4>
            <p>Turn every kilometre into cash by partnering with Do Dash Bike Taxi</p>
          </div>
          <div className="solution-card">
          <img className="icon business" src="/images/business.png"/>
            <h4>Business</h4>
            <p>Ads, Product Launch, Inventory Management and more. One platform. Endless reach.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default FoodPage;
