import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "./../providers/AuthProvider";
import useUser from "./../hooks/useUser";
import Loading from "./Loading";
import useAxiosSecure from "../hooks/useAxiosSecure";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const price = 10;
  const { userData, isLoading } = useUser(user?.email);

  // Patching user role in the database
  const { mutateAsync } = useMutation({
    mutationFn: async (patchedData) => {
      const { data } = await axiosSecure.patch(
        `/user/${user?.email}`,
        patchedData
      );
      return data;
    },
  });

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure]);

  if (isLoading) return <Loading />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setError(error.message);
      setTransactionId("");
    } else {
      console.log("PaymentMethod", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
        },
      });

    if (confirmError) {
      console.log("confirmError", confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        toast.success("Payment successful!");
        // Patching user role in the database
        await mutateAsync({
          membership_status: "member",
          user_role: userData?.user_role,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        className="mt-6 w-full py-3 bg-lime-500 text-neutral-800 font-medium rounded-md hover:bg-lime-600 focus:outline-none focus:bg-lime-600"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay ${price}
      </button>
      {transactionId && (
        <p className="text-green-500 text-sm mt-4">
          Transaction ID: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
