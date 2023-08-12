import React, { useState } from 'react';
import '../App.css';
import img7 from '../images/Razorpay Icon.png';

const subscriptionPlans = [
  { id: 1, name: '12 Months Subscription', total: 99, perMonth: 8 },
  { id: 2, name: '12 Months Subscription', total: 179, perMonth: 15 },
  { id: 3, name: '6 Months Subscription', total: 149, perMonth: 25 },
  { id: 4, name: '3 Months Subscription', total: 99, perMonth: 33 },
];

function PaymentPage() {
  const [selectedPlanId, setSelectedPlanId] = useState(subscriptionPlans[0].id);

  const handlePlanSelection = (plan) => {
    setSelectedPlanId(plan.id);
  };

  const calculateSubscriptionFee = () => {
    const selectedPlan = subscriptionPlans.find(plan => plan.id === selectedPlanId);
    return selectedPlan ? selectedPlan.total : 0;
  };

  const calculateTotal = () => {
    const subscriptionFee = calculateSubscriptionFee();
    const limitedTimeOffer = 18401;
    return subscriptionFee - limitedTimeOffer;
  };

  const calculateTotalWithGST = () => {
    const subscriptionFee = calculateSubscriptionFee();
    const totalAfterOffer = calculateTotal();
    const gst = 0.18; // 18% GST
    const totalWithGST = subscriptionFee - totalAfterOffer + (totalAfterOffer * gst);
    return totalWithGST;
  };

  return (
    <div className="payment">
      <div className='num'>
        <p className='one'>1</p>
        <span className='sign'>SignUp</span>
        <p className='two'>2</p>
        <span className='subscribe'>Subscribe</span>
      </div>
      <h3 className='pay'>Selected subscription Payment</h3>
      <div className="subscription-options">
      {subscriptionPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`subscription-plan ${selectedPlanId.id === plan.id ? 'selected' : ''}`}
            onClick={() => handlePlanSelection(plan)}
            style={{
              backgroundColor: index === 0 ? '#f0f0f0' : 'rgb(214, 247, 214)', color: index === 0 ? '#acaaaa' : '#1d1d1d',
              borderColor: index === 0 ? '#fff' : 'rgb(6, 250, 6)'
            }} // Applying different background colors
          >
            <input type='radio' 
            checked={selectedPlanId === plan.id} 
            readOnly 
            disabled={index === 0} // Disable the first radio button
            />
            {plan.name}
            <span className='total'>Total: ₹{plan.total}</span>
            <span className='plan'>₹{plan.perMonth}/mo</span>
            {plan.id === 1 && <span className='label'>Offer Expired</span>}
    {plan.id === 2 && <span className='recommended'>Recommended</span>}
          </div>
        ))}
      
      </div>
      <div className="total-section">
        <div className='subs'>
          <p className='fee'>SubscriptionFee</p>
          <p className='cact'>₹{calculateSubscriptionFee()}</p>
        </div>
        <div className='offer'>
          <p className='red'>Limited time offer</p>
          <p className='money'>- ₹18,401</p>
          <p className='off'>Offer valid till 25th March 2023</p>
        </div>
        <div className='include'>
          <p className='gst'>Total (Incl. of 18% GST)</p>
          <p className='cat'>₹{calculateTotalWithGST()}</p>
        </div>
        <div className='btn4'>
          <button className="payment-button">PROCEED TO PAY</button>
          <button className='cancel'>CANCEL</button>
        </div>
        <img src={img7} className='razor' height={20} width={100} alt="" />
      </div>
    </div>
  );
}

export default PaymentPage;
