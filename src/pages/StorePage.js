import React from 'react';
import './StorePage.css';

const StorePage = () => {
  return (
    <div className="store-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          <h1>The Fastest Way to Grow Your Sales</h1>
          <p>
            From Fresh Produce to Fashion Finds Do Dash catapults your entire catalogue. Groceries, apparel,
            electronics, office supplies into your customers’ hands in under 10 minutes, unlocking instant urban
            demand and turbocharging your sales.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Unmatched Local Reach & Customer Acquisition</h2>
        <div className="grid">
          <div className="card">
            <img src="/images/store-page-one.png" alt="Be Seen by Thousands" />
            <h3>Be Seen by Thousands Daily</h3>
            <p>Your store pops up in the Do Dash app for every active user right at the moment they need you.</p>
          </div>
          <div className="card">
            <img src="/images/store-page-two.png" alt="Be Seen by Thousands" />
            <h3>Reach your customers in 7 mins</h3>
            <p>Meet the growing demand for instant gratification with guaranteed deliveries in 10 minutes.</p>
          </div>
          <div className="card">
            <img src="/images/store-page-three.png" alt="Be Seen by Thousands" />
            <h3>Targeted Engagement</h3>
            <p>
              By leveraging Do Dash's cross-platform services such as food delivery and bike taxi integration your
              store can expand its audience reach by up to 15x and boost sales by nearly 3x.
            </p>
          </div>
          <div className="card">
            <img src="/images/store-page-four.png" alt="Be Seen by Thousands" />
            <h3>Virtual Footfall</h3>
            <p>
              Each on-demand delivery or in-store pickup is a new customer touchpoint—driving real-world visits and
              repeat business.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <div className="how-grid">
          <img className="img-placeholder big" src="/images/steps.png"/>
          <div className="steps">
            <h2>How it Works?</h2>
            <ul>
              <li><strong>1. Sign up</strong><br />Download the Do Dash Vendor App and complete your store profile.</li>
              <li><strong>2. Onboard</strong><br />Upload your product catalogue, set prices, and define delivery zones.</li>
              <li><strong>3. Go Live</strong><br />Start receiving orders instantly and track fulfillment in real time.</li>
              <li><strong>4. Promote & Optimize</strong><br />Use in-app marketing tools and analytics to refine offerings and maximize revenue.</li>
            </ul>
            <button className="contact-btn">Contact us</button>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="solutions">
        <h3>Explore More Business Solutions from Do Dash</h3>
        <div className="solution-grid">
          <div className="solution-card">
            <img className="icon food" src="/images/food.png"/>
            <h4>Food</h4>
            <p>Serve the best, prepared by the best, and delivered by the best with Do Dash Food Delivery</p>
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

export default StorePage;
