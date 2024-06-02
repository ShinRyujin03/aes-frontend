import React, { useState } from 'react';
import './Pricing.css';

function Pricing() {
    const [activeTab, setActiveTab] = useState('atm');
    const [selectedPlan, setSelectedPlan] = useState(null);

    const plans = {
        free: {
            name: 'Free',
            features: ['10 IELTS Essay Checks / 31-day', 'Basic scoring', 'All Sample Access', 'No support'],
            price: '0 VND'
        },
        basic: {
            name: 'Standard',
            features: ['30 IELTS Essay Checks / 31-day', '31 days Access', 'Basic scoring', 'All Sample Access', 'Email Support', 'Priority Support: Low'],
            price: '200.000VND'
        },
        standard: {
            name: 'Advance',
            features: ['100 IELTS Essay Checks / 31-day', '31 days Access', 'Basic & Advanced scoring', 'All Sample Access', 'Email Support', 'Priority Support: Medium'],
            price: '250.000VND'
        },
        premium: {
            name: 'Unlimited',
            features: ['Unlimited IELTS Essay Checks / 31-day', '31 days Access', 'Basic & Advance scoring', 'All Sample Access', 'Free access Special ebook, IELTS seminar', 'Email Support', 'Priority Support: High'],
            price: '350.000VND'
        }
    };

    const openPopup = (plan) => {
        setSelectedPlan(plan);
        document.getElementById("paymentPopup").style.display = 'block';
    };

    const closePopup = () => {
        document.getElementById("paymentPopup").style.display = 'none';
        setActiveTab('atm'); // Đặt lại tab active khi đóng popup
    };

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <section className="pricing">
            <h2>Our Pricing</h2>
            <div className="pricing-table">
                {Object.keys(plans).map(plan => (
                    <div className={`plan ${plan}`} key={plan}>
                        <h3>{plans[plan].name}</h3>
                        <ul>
                            {plans[plan].features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <h4>{plans[plan].price}</h4>
                        {plan !== 'free' && (
                            <button className="signup-button" onClick={() => openPopup(plan)}>Sign Up</button>
                        )}
                    </div>
                ))}
            </div>

            {/* Popup thanh toán */}
            {selectedPlan && ( // Chỉ render popup khi selectedPlan có giá trị
                <div id="paymentPopup" className="popup">
                    <div className="popup-content">
                        <span className="close-button" onClick={closePopup}>&times;</span>
                        <h2>Payment Options</h2>
                        <div className="payment-tabs">
                            <button className={`tab-button ${activeTab === 'atm' ? 'active' : ''}`} onClick={() => openTab('atm')}>ATM QR Code</button>
                            <button className={`tab-button ${activeTab === 'momo' ? 'active' : ''}`} onClick={() => openTab('momo')}>Momo QR Code</button>
                            <button className={`tab-button ${activeTab === 'visa' ? 'active' : ''}`} onClick={() => openTab('visa')}>Visa</button>
                        </div>

                        <div id="atm" className={`tab-content ${activeTab === 'atm' ? 'active' : ''}`}>
                            <img src="atm_qr_code.png" alt="ATM QR Code" />
                            <p>Scan QR to payment</p>
                            <p id="atmAmount">Need to pay: {plans[selectedPlan].price}</p>
                        </div>
                        <div id="momo" className={`tab-content ${activeTab === 'momo' ? 'active' : ''}`}>
                            <img src="momo_qr_code.png" alt="Momo QR Code" />
                            <p>Scan QR to payment</p>
                            <p id="momoAmount">Need to pay: {plans[selectedPlan].price}</p>
                        </div>
                        <div id="visa" className={`tab-content ${activeTab === 'visa' ? 'active' : ''}`}>
                            <p>Need to pay: <span id="visaAmount">{plans[selectedPlan].price}</span></p>
                            <form>
                                <input type="text" placeholder="Card Number" />
                                <input type="text" placeholder="Expiry Date" />
                                <input type="text" placeholder="CVV" />
                                <button type="submit">Pay</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Pricing;
