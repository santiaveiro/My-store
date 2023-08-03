import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [formError, setFormError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!cardNumber || !cardHolder || !expirationDate || !cvv) {
      setFormError('Please fill in all fields.');
    } else if (cardNumber.length !== 16) {
      setFormError('Card number must be 16 digits long.');
    } else if (!isValidExpirationDate(expirationDate)) {
      setFormError('Invalid expiration date. Use format MM/YY.');
    } else if (cvv.length !== 3) {
      setFormError('CVV must be 3 digits long.');
    } else {
      setFormError('');
      console.log('Form submitted successfully.');
    }
  };

  const isValidExpirationDate = (expiration) => {
    const expirationPattern = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    return expirationPattern.test(expiration);
  };

  return (
    <div className="payment-container" id="payment-section">
      <div className="payment-card">
        <div className="payment-header">
          <h2 className="payment-title">Payment Information</h2>
        </div>
        <div className="card-icons">
          <FontAwesomeIcon icon={faCcVisa} className="icon" />
          <FontAwesomeIcon icon={faCcMastercard} className="icon" />
          <FontAwesomeIcon icon={faCcAmex} className="icon" />
        </div>
        <div className="card-details">
          <form onSubmit={handleFormSubmit}>
            <label>Card Number</label>
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <label>Cardholder Name</label>
            <input
              type="text"
              placeholder="Card Name"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
            <div className="expiration-cvv">
              <div className="expiration">
                <label>Expiration Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                />
              </div>
              <div className="cvv">
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="payment-button">Pay Now</button>
          </form>
        </div>
        {formError && <div className="error-message">{formError}</div>}
      </div>
    </div>
  );
};

export default Payment;
