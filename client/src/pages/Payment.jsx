import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { makePayment } from "../services/getServices";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

export default function Payment() {
  const { id } = useParams();
  console.log(id);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
    upiId: "", // Add upiId to the formData state
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    console.log(formData);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div className="container mx-auto px-4 py-8 w-max border-2 border-gray-200 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Payment</h1>
          {/* Payment Method Selection */}
          <div className="flex justify-center mb-6 flex-wrap gap-4">
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                paymentMethod === "card"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              Card Payment
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                paymentMethod === "upi"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setPaymentMethod("upi")}
            >
              UPI
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-lg ${
                paymentMethod === "afterRide"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setPaymentMethod("afterRide")}
            >
              Payment After Ride
            </button>
          </div>

          {/* Conditional Form Rendering Based on Payment Method */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
            {paymentMethod === "card" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    maxLength="16"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cardHolder"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Card Holder
                  </label>
                  <input
                    type="text"
                    id="cardHolder"
                    name="cardHolder"
                    value={formData.cardHolder}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="expirationDate"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="expirationDate"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      maxLength="3"
                      placeholder="123"
                    />
                  </div>
                </div>
              </>
            )}

            {/* For UPI, a simple text input for UPI ID */}
            {paymentMethod === "upi" && (
              <div className="mb-4">
                <label
                  htmlFor="upiId"
                  className="block text-gray-700 font-bold mb-2"
                >
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upiId"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  maxLength="16"
                  placeholder="Enter your UPI ID"
                />
              </div>
            )}

            {/* For Payment After Ride */}
            {paymentMethod === "afterRide" && (
              <div className="text-center text-gray-700">
                <p>Selected Payment Method: Payment After Ride</p>
              </div>
            )}

            <button
              type="submit"
              onClick={async () => {
                let data = await makePayment(id);
                if (data.suc) {
                  toast.success("Payment Done");
                  navigate("/payment/history");
                } else {
                  toast.error(data.msg);
                }
              }}
              disabled={isProcessing}
              className={`w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ${
                isProcessing && "opacity-50 cursor-not-allowed"
              }`}
            >
              {isProcessing ? "Processing..." : "Proceed to Pay"}
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
