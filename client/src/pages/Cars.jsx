import React, { useEffect } from 'react';
import { getCarsData } from '../services/getServices';
import { useNavigate } from 'react-router';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { toast } from 'react-toastify';

function checkStatus(status, rentalCar, id) {
    if (status === 'available') {
        return (
            <button
                onClick={() => rentalCar(id)}
                className='px-4 py-2 rounded-md font-semibold text-sm bg-blue-600 text-white capitalize shadow-md hover:bg-blue-700 transition duration-300'>
                {status}
            </button>
        );
    } else if (status === 'rented') {
        return (
            <del className='px-4 py-2 rounded-md font-semibold text-sm bg-red-600 text-white capitalize'>
                {status}
            </del>
        );
    } else if (status === 'maintainence') {
        return (
            <del className='px-4 py-2 rounded-md font-semibold text-sm bg-yellow-600 text-white capitalize'>
                {status}
            </del>
        );
    }
}

function Car(props) {
    return (
        <React.Fragment>
            <div className='p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-2 flex flex-col gap-3 w-72 sm:w-80 lg:w-96'>
                <img
                    src={props.data.image}
                    className='rounded-md w-full h-48 object-cover object-center'
                    alt={`${props.data._id}-image`}
                />
                <h1 className='text-xl font-bold text-gray-800'>{props.data.make}</h1>
                <p className='text-md font-medium text-yellow-600'>Model: {props.data.model}</p>
                <span className='text-red-700 font-semibold text-sm'>YEAR: {props.data.year}</span>
                <h1 className='text-zinc-500 text-sm font-medium'>COLOR: {props.data.color}</h1>
                <p className='text-sm font-extrabold text-cyan-500'>LISNO: {props.data.licensePlate}</p>
                <p className='text-red-700 font-semibold text-sm'>PRICE/DAY: {props.data.pricePerDay} INR</p>
                {checkStatus(props.data.status, props.rentalCar, props.data._id)}
            </div>
        </React.Fragment>
    );
}

const Cars = () => {
    const [cars, setCars] = React.useState([]);
    const navigate = useNavigate();
    const rentalCar = (id) => {
        navigate(`/car/${id}`);
    };
    const fetchData = async () => {
        let data = await getCarsData();
        if (data.suc) {
            setCars(data.cars);
        } else {
            toast.error(data.msg);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <div className='min-h-screen flex flex-wrap justify-center items-start gap-10 p-6 pb-20'>
                {cars.length > 0 ? (
                    cars.map((d, index) => <Car key={index} rentalCar={rentalCar} data={d} />)
                ) : (
                    <div className='w-full flex justify-center items-center'>
                        <Loader />
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default Cars;
