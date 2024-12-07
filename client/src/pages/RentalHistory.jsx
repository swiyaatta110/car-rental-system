import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import { allRentals, cancelRental } from '../services/getServices';
import { toast, ToastContainer } from 'react-toastify';

function RentalCards(props) {
    return (
        <React.Fragment>
            <div className='p-6 flex flex-col border-2 rounded-lg gap-3 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <h1 className='text-md font-extrabold text-gray-800'>Rental Id: {props.data._id}</h1>
                <img className='w-full h-72 object-cover object-center rounded-md' src={props.data.carid.image} alt={`${props.data.carid._id}-image`} />
                <div className='mt-4'>
                    <p className='text-sm text-gray-600 font-medium'>License Plate: <span className='font-bold text-gray-800'>{props.data.carid.licensePlate}</span></p>
                    <p className='text-sm text-gray-600'>Model: <span className='font-medium text-gray-800'>{props.data.carid.model}</span></p>
                    <p className='text-sm text-gray-600'>Total Price: <span className='font-bold text-gray-800'>{props.data.totalPrice} INR</span></p>
                    <p className='text-sm text-gray-600'>Price/Day: <span className='font-medium text-gray-800'>{props.data.carid.pricePerDay}</span></p>
                    <p className='text-sm text-gray-600'>Days: <span className='font-medium text-gray-800'>{props.data.days}</span></p>
                    <p className='text-sm text-gray-600'>Current Status: <span className='font-medium text-gray-800'>{props.data.status}</span></p>
                </div>
                <button onClick={() => props.deleteRentalData(props.data._id)} className='px-4 py-2 font-semibold text-sm text-white bg-red-600 rounded-md w-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 active:bg-red-700'>
                    Cancel Rental
                </button>
            </div>
        </React.Fragment>
    );
}

const RentalHistory = () => {
    const [rentals, setRentals] = useState([]);

    const deleteRentalData = async (id) => {
        let data = await cancelRental(id);
        if (data.suc) {
            toast.success(data.msg);
        } else {
            toast.error(data.msg);
        }
    }

    const fetchData = async () => {
        let data = await allRentals();
        if (data.suc) {
            setRentals(data.rentalData);
        } else {
            toast.error(data.msg);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [rentals]);

    return (
        <React.Fragment>
            <Navbar />
            <ToastContainer />
            <div className='flex flex-col p-6 pb-20 gap-6'>
                {
                    rentals.length > 0 ? rentals.map((d, index) => (
                        <RentalCards key={index} deleteRentalData={deleteRentalData} data={d} />
                    )) : (
                        <Loader />
                    )
                }
            </div>
        </React.Fragment>
    );
}

export default RentalHistory;
