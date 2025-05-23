
import React from 'react';
import './TaxiPage.css';

const TaxiPage = () => {
  return (
    <div className="taxi-page">
      <section className="hero">
        <div className="overlay">
          <h1>Earn more. Ride freely. Grow with us.</h1>
          <p>
            Whether you're a bike rider, auto driver, or have a car, Do Dash is built to help you earn on your terms
            with low commission cuts, instant bookings, and daily earnings.
          </p>
        </div>
      </section>

      <section className="features">
        <h2>Drive Less. Earn More. Live Better.</h2>
        <div className="grid">
          <div className="card">
            <img src="/images/taxi-page-one.png" alt="Be Seen by Thousands" />
            <h3>Lowest Commissions Ever</h3>
            <p>We keep our commissions low, so you keep more of your hard-earned money. No hidden charges. No unfair cuts. Just clear payouts every week</p>
          </div>
          <div className="card">
            <img src="/images/taxi-page-two.png" alt="Be Seen by Thousands" />
            <h3>100% Flexibility</h3>
            <p>You choose when to work. Full-time or part-time, day or night. Accept
            rides when you're free, Go online anytime, Pause anytime no penalties.</p>
          </div>
          <div className="card">
            <img src="/images/taxi-page-three.png" alt="Be Seen by Thousands" />
            <h3>Instant Rides with QR Code Pickups</h3>
            <p>Do Dash allows passengers to scan your QR code and hop on instantly.No waiting. No cancellations. More rides = More earnings.
            </p>
          </div>
          <div className="card">
            <img src="/images/store-page-four.png" alt="Be Seen by Thousands" />
            <h3>Not Just Rides, More Ways to Earn</h3>
            <p>
            Do Dash is not only for taxi rides. You also get Grocery delivery tasks,
            Food Delivery, Shopping Pickups. One app, multiple income streams.
            </p>
          </div>
        </div>
      </section>

      <section className="join-us">
        <h2>Who can Join Us?</h2>
        <div className="join-us-grid">
          <div className="join-us-item">
            <div className="icon"><img src="images/taxi-one.png" alt="" /></div>
            <span>Free rider
            protection kits</span>
          </div>
          <div className="join-us-item">
            <div className="icon"><img src="images/taxi-two.png" alt="" /></div>
            <span>Accidental & health
            insurance options</span>
          </div>
          <div className="join-us-item">
            <div className="icon"><img src="images/taxi-three.png" alt="" /></div>
            <span>Educational support
            for children (Soon)</span>
          </div>
          <div className="join-us-item">
            <div className="icon"><img src="images/taxi-four.png" alt="" /></div>
            <span>Vehicle assistance
            & discounts</span>
          </div>
        </div>
      </section>

      <section class="onboarding-section">
        <h3>One app. Unlimited earnings. Drive with Do Dash!</h3>
        <div class="onboarding-content">
          <ol>
            <li>Download the App</li>
            <li>Upload license, RC & basic documents</li>
            <li>Get verified under 30 mins</li>
            <li>Start earning immediately!</li>
          </ol>
          <img src="/images/taxi-steps.png" alt="Download Do Dash" />
        </div>
        <button class="cta-button">Download app</button>
      </section>



      <section className="solutions">
        <h3>Explore More Business Solutions from Do Dash</h3>
        <div className="solution-grid">
          <div className="solution-card">
            <img className="icon taxi" src="/images/shop.png"/>
            <h4>Shop</h4>
            <p>Grow your reach, boost your
              sales, and deliver faster than
              ever with Do Dash.</p>
          </div>
          <div className="solution-card">
            <img className="icon food" src="/images/food.png"/>
            <h4>Food</h4>
            <p>Serve the best, prepared by the best, and delivered by the best with Do Dash Food Delivery</p>
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

export default TaxiPage;
