import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PM7OiJ00ELy1UJLn5VOQdwYBmYERPDjjiMhTUkPh2XF05e6lfbwfwj84r2PomVrgOpI36NX9I5OPa6Det3kGSB000cfYwB2cI"
);

const Membership = () => {
  const handlePayment = () => {};

  return (
    <div className="my-10 flex justify-center items-center min-h-[80vh]">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-8 py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Membership Payment
          </h1>
          <p className="text-gray-600 text-center mb-8">
            To unlock exclusive features and benefits, please proceed with the
            payment below.
          </p>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
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
