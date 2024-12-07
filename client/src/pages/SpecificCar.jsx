import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { rentCar, specificCarData } from '../services/getServices';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

function checkStatus(status, rentalCar, id, days) {
    if (status == 'available') {
        return <button onClick={() => rentalCar(id, days)} className='px-3 py-1 rounded-md font-semibold text-sm border bg-blue-500 capitalize text-white'>{status}</button>
    } else if (status == 'rented') {
        return <del className='px-3 text-center py-1 rounded-md font-semibold text-sm border bg-red-500 capitalize text-white'>{status}</del>
    } else if (status == 'maintainence') {
        return <del className='px-3 text-center py-1 rounded-md font-semibold text-sm border capitalize bg-yellow-500 text-white'>{status}</del>
    }
}

const SpecificCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [days, setDays] = useState(0);
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');

    const rentalCar = async (id, days) => {
        let data = await rentCar(id, days);
        if (data.suc) {
            toast.success(data.msg);
        } else {
            toast.error(data.msg);
        }
    }

    const fetchData = async () => {
        let data = await specificCarData(id);
        setCar(data.car);
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, [car]);

    return (
        <React.Fragment>
            <ToastContainer />
            <Navbar />
            {
                car ? (
                    <div className={`h-max flex pb-20 flex-col gap-2`}>
                        <img src={car.image} alt={`${car._id}-image`} className='w-full h-96 object-cover object-center' />
                        <div className='px-5 flex flex-col gap-1'>
                            <h1 className='text-xl font-extrabold'>{car.make}</h1>
                            <p className='text-md font-medium text-yellow-600'>Model : {car.model}</p>
                            <span className='text-red-700 font-semibold text-sm'>YEAR : {car.year}</span>
                            <h1 className='text-zinc-500 text-sm font-medium'>COLOR : {car.color}</h1>
                            <p className='text-sm font-extrabold text-cyan-500'>LISNO: {car.licensePlate}</p>
                            <p className='text-red-700 font-semibold text-sm'>PRICE/DAY : {car.pricePerDay} INR</p>
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm font-semibold mt-5' htmlFor="days">PickUp Location :</label>
                                <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} className='border-2 rounded-md border-zinc-500 px-3 py-1' required />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm font-semibold mt-5' htmlFor="days">Date & time of pick up</label>
                                <input type="datetime-local" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} className='border-2 rounded-md border-zinc-500 px-3 py-1' required />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm font-semibold mt-5' htmlFor="days">For how many days you want to rent it??</label>
                                <input type="number" value={days} onChange={(e) => setDays(e.target.value)} className='border-2 rounded-md border-zinc-500 px-3 py-1' required />
                            </div>
                            {checkStatus(car.status, rentalCar, car._id, days)}
                        </div>
                    </div>
                ) : <div className='h-screen justify-center items-center'>
                    <Loader />
                </div>
            }
        </React.Fragment>
    )
}

export default SpecificCar
