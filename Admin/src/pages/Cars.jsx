import React, { useState } from 'react';
import axios from 'axios';

const Cars = ({ cars }) => {
  const [newCar, setNewCar] = useState({
    name: '',
    model: '',
    price: '',
    availability: true,
  });

  const handleAddCar = async () => {
    const response = await axios.post('/api/cars', newCar);
    alert(response.data.msg);
  };

  const handleDeleteCar = async (carId) => {
    const response = await axios.delete(`{CAR_API_END_POINT}${carId}`);
    alert(response.data.msg);
  };

  const handleUpdateCar = async (carId) => {
    const updatedCar = { ...newCar, availability: !newCar.availability };
    const response = await axios.put(`{CAR_API_END_POINT}${carId}`, updatedCar);
    alert(response.data.msg);
  };

  return (
    <div>
      <div>
        <h3>Add New Car</h3>
        <input type="text" placeholder="Name" onChange={e => setNewCar({ ...newCar, name: e.target.value })} />
        <input type="text" placeholder="Model" onChange={e => setNewCar({ ...newCar, model: e.target.value })} />
        <input type="number" placeholder="Price" onChange={e => setNewCar({ ...newCar, price: e.target.value })} />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
      
      <div>
        <h3>Manage Cars</h3>
        {cars.map(car => (
          <div key={car._id}>
            <h4>{car.name}</h4>
            <p>{car.model}</p>
            <p>{car.price}</p>
            <button onClick={() => handleUpdateCar(car._id)}>Toggle Availability</button>
            <button onClick={() => handleDeleteCar(car._id)}>Delete Car</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
