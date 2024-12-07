import React, { useEffect, useState } from 'react';
import { getPaymentHistory } from '../services/getServices'; // Assuming this service fetches payment history data
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../components/Loader'; // Assuming Loader is a component showing a loading animation
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router';

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
};

function formatDate(datestr) {
    const date = new Date(datestr);
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
}

const PaymentHistory = () => {
    const navigate = useNavigate();
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const data = await getPaymentHistory(); // Replace with actual service call
                console.log(data);
                if (data.suc) {
                    setPayments(data.payments); // Assuming data contains a list of payments
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                toast.error('Error fetching payment history');
            } finally {
                setLoading(false); // Hide loader once data is fetched
            }
        };

        setTimeout(() => {
            fetchPayments();
        }, 2000);
    }, []);

    return (
        <React.Fragment>
            <ToastContainer />
            <Navbar />
            <div className="min-h-screen p-6 bg-gray-50">
                <h1 className="text-2xl font-bold text-center mb-6">Payment History</h1>

                {/* Loader is shown if payments are still loading */}
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader /> {/* Assuming this is a loading spinner */}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {/* Show payment records */}
                        {payments.length > 0 ? (
                            payments.map((payment, index) => (
                                <div key={index} className="p-4 bg-white shadow-md rounded-md border">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-semibold text-lg">{formatDate(payment.createdAt)}</h2>
                                        <span className={`px-2 py-1 text-xs font-medium rounded ${payment.status === 'paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            {payment.status}
                                        </span>
                                    </div>

                                    {/* Rental and Car Details */}
                                    {payment.rentalid ? (
                                        <div className="mt-4">
                                            <div className="flex gap-4 items-center">
                                                <img src={payment.rentalid.carid.image} alt={payment.rentalid.carid.make} className="w-24 h-24 object-cover rounded-md" />
                                                <div>
                                                    <h3 className="text-xl font-semibold">{payment.rentalid.carid.make} {payment.rentalid.carid.model}</h3>
                                                    <p className="text-sm text-gray-600">License Plate: {payment.rentalid.carid.licensePlate}</p>
                                                    <p className="text-sm text-gray-600">Color: {payment.rentalid.carid.color}</p>
                                                    <p className="text-sm text-gray-600">Year: {payment.rentalid.carid.year}</p>
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-600">Rental Status: {payment.rentalid.status}</p>
                                                <p className="text-sm text-gray-600">Total Price: {payment.rentalid.totalPrice} INR</p>
                                                <p className="text-sm text-gray-600">Days Rented: {payment.rentalid.days} days</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-center text-gray-500">No rental details found for this payment.</p>
                                    )}

                                    {/* Payment Details */}
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-600">Amount: {payment.amount} INR</p>
                                        <p className="text-sm text-gray-600">Payment Date: {payment.paymentDate || 'N/A'}</p>
                                    </div>

                                    {
                                        payment.status == 'pending' && <button onClick={() => navigate(`/payment/${payment.rentalid._id}`)} className='px-3 py-1 text-sm font-semibold bg-red-600 rounded-md mt-2 text-white'>Pay this</button>
                                    }
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No payment history found</p>
                        )}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default PaymentHistory;
