import React, { useState } from "react";

const Membership = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handlePayment = () => {};

  return (
    <div className="my-10 flex justify-center items-center min-h-[80vh]">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-8 py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Membership Payment
          </h1>
          <p className="text-gray-600 text-center mb-6">
            To unlock exclusive features and benefits, please proceed with the
            payment below.
          </p>
          <div className="flex items-center mb-8">
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="flex-1 mr-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter amount"
            />
            <span className="text-gray-600 text-sm">USD</span>
          </div>
          <button
            onClick={handlePayment}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Pay Now
          </button>
        </div>
        <div className="bg-gray-100 px-8 py-6">
          <p className="text-gray-700 text-center">
            After successful payment, you will receive the Gold badge and gain
            access to advanced features, including the ability to make more than
            5 posts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
