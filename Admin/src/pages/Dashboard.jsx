import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Cars from './Cars';
import Payments from './Payments';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const result = await axios.get('/api/cars');
      setCars(result.data.cars);
    };
    
    const fetchPayments = async () => {
      const result = await axios.get('/api/users/payments');
      setPayments(result.data.payments);
    };

    fetchCars();
    fetchPayments();
  }, []);

  const handleLogout = async () => {
    await axios.get("http://localhost:8000/api/admins/logout", { withCredentials: true });
    navigate("/login");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h2>Available Cars</h2>
        <Cars cars={cars} />
      </div>
      <div>
        <h2>Payments</h2>
        <Payments payments={payments} />
      </div>
    </div>
  );
};

