
import React from 'react';
import './BusinessPage.css';

const BusinessPage = () => {
  return (
    <div className="business-page">
      <section className="hero">
        <div className="overlay">
          <h1>One App. Infinite Possibilities. A Platform Built to Scale.</h1>
          <p>
          Do Dash is not just an app, it’s a powerful ecosystem that merges food delivery, grocery shopping, ride-hailing, e-commerce, and hyperlocal services into a single experience.
          </p>
          <button>Contact us</button>
        </div>
      </section>

      <section class="build-fast-section">
        <h2>Build Fast. Earn Smart. Grow with Do Dash.</h2>

        <div class="build-fast-content">
          <div class="text-content">
            <h3>Advertise Your Dream</h3>
            <p>
              Do Dash gives brands, businesses, and service providers the chance to promote themselves directly inside the app —
              through featured listings, banner ads, and category sponsorships. Whether it’s a local fashion brand, a new snack
              product, or a home service, anyone can gain visibility where customers are already browsing.
            </p>

            <h3>Launch Your Product/Store in 5 Minutes</h3>
            <p>
              With Do Dash, you don’t need to build your own app or website. You can create your own curated store whether it’s
              for eco-friendly goods, skincare, wellness, baby essentials, or any niche you believe in. Just plug into Do Dash’s
              existing platform and get access to a ready-to-buy customer base.
            </p>
            <p>We handle tech, logistics, and payments—you just focus on the products and your brand.</p>
          </div>

          <div class="placeholder-image"></div>
        </div>
      </section>


      <section className="features">
        <div className="grid">
          <div className="card">
            <img src="/images/businesspage-one.png" alt="Be Seen by Thousands" />
            <h3>Dark Store & Micro-Warehouse</h3>
            <p>Turn a small space into a powerful micro-warehouse that fuels your
              Pocket. Integrate your space with Do Dash and start earning from every
              order in your area, no inventory investment, just pure fulfilment profit.</p>
          </div>
          <div className="card">
            <img src="/images/businesspage-two.png" alt="Be Seen by Thousands" />
            <h3>Build your Brand, Food or FMCG</h3>
            <p>Whether you’re launching a signature dish or packaging your own
              product line, Do Dash helps you reach the right customers, fast. Create,
              sell, and grow</p>
          </div>
        </div>
      </section>

      <section class="cta-green">
        <div class="cta-content">
          <h2>Ready to Build the Next Big Thing with Do Dash?</h2>
          <p>
            Whether you have a space, a product, or a vision. We’ll help you turn it into a profitable business.<br />
            Let’s talk. Let’s build. Let’s grow.
          </p>
          <button class="contact-btn">Contact Us</button>
        </div>
      </section>


      <section className="solutions">
        <h3>Explore More Business Solutions from Do Dash</h3>
        <div className="solution-grid">
          <div className="solution-card">
            <img className="icon business" src="/images/shop.png"/>
            <h4>Shop</h4>
            <p>Grow your reach, boost your
              sales, and deliver faster than
              ever with Do Dash.</p>
          </div>
          <div className="solution-card">
            <img className="icon taxi" src="/images/taxi.png"/>
            <h4>Taxi</h4>
            <p>Turn every kilometre into cash by partnering with Do Dash Bike Taxi</p>
          </div>
          <div className="solution-card">
            <img className="icon food" src="/images/food.png"/>
            <h4>Food</h4>
            <p>Serve the best, prepared by the best, and delivered by the best with Do Dash Food Delivery</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default BusinessPage;
