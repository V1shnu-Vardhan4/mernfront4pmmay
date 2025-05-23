
import React, { useState } from 'react';
import StorePage from './pages/StorePage';
import FoodPage from './pages/FoodPage';
import TaxiPage from './pages/TaxiPage';
import BusinessPage from './pages/BusinessPage';
import Icon from './components/common/Icon';
import './styles/global.css';

function App() {
  const [activeTab, setActiveTab] = useState('store');

  const renderPage = () => {
    switch(activeTab) {
      case 'food': return <FoodPage />;
      case 'taxi': return <TaxiPage />;
      case 'business': return <BusinessPage />;
      default: return <StorePage />;
    }
  };

  return (
    <div>
      <header className="main-header">
        <div className="header-left">
          <img src="/images/header-logo.png"/>
        </div>
        <div className="header-right">
          <a href="#">Help Center</a>
          <a href="#">Languages</a>
        </div>
      </header>

      <div className="tab-switcher">
        <button className={activeTab === 'store' ? 'active' : ''} onClick={() => setActiveTab('store')}>Store</button>
        <button className={activeTab === 'food' ? 'active' : ''} onClick={() => setActiveTab('food')}>Food</button>
        <button className={activeTab === 'taxi' ? 'active' : ''} onClick={() => setActiveTab('taxi')}>Taxi</button>
        <button className={activeTab === 'business' ? 'active' : ''} onClick={() => setActiveTab('business')}>Business</button>
      </div>

      <main>{renderPage()}</main>
      <footer className="footer">
        <img className="footer-logo" src="/images/footer-logo.png"/>
        <div className='footer-menu'>
        <div className="footer-col">
          <h4>Do Dash for Business</h4>
          <p>Partner as Vendor</p>
          <p>Register as Driver</p>
          <p>Business Assistance</p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <p>Groceries</p>
          <p>Shopping</p>
          <p>Food</p>
          <p>Taxi</p>
        </div>
        <div className="footer-col">
          <h4>Help Center</h4>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Email</p>
        </div>
        <div className="footer-col">
          <h4>Career</h4>
          <p>Apply</p>
        </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
