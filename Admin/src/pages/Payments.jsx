import React from 'react';
import axios from 'axios';

const Payments = ({ payments }) => {
  const handlePaymentUpdate = async (userId, status) => {
    const response = await axios.patch(`{PAYMENT_API_END_POINT}${userId}`, { status });
    alert(response.data.msg);
  };

  return (
    <div>
      {payments.map(payment => (
        <div key={payment._id}>
          <h4>{payment.user.name}</h4>
          <p>Status: {payment.status}</p>
          <button onClick={() => handlePaymentUpdate(payment.user._id, 'paid')}>Mark as Paid</button>
          <button onClick={() => handlePaymentUpdate(payment.user._id, 'pending')}>Mark as Pending</button>
        </div>
      ))}
    </div>
  );
};

export default Payments;
