"use client";

import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./checkoutForm";
import { useRouter } from "next/navigation";
import { Button } from "../components/buttons/buttons";
import { useCart } from "../hooks/useCart";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";

interface CheckoutClientProps {
  currentUser: SafeUser | null;
}

const CheckoutClient: React.FC<CheckoutClientProps> = ({ currentUser }) => {
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null);
  const [error, setError] = useState<boolean | null>(false);
  const [redirecting, setRedirecting] = useState<boolean | null>(false);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [clientSecret, setClientSecret] = useState<any>(null);

  const router = useRouter();
  const { cartProducts } = useCart();

  //handling checkout submit button
  const handleSubmit = async () => {
    setError(false);
    setRedirecting(false);
    const submitData = (cartProducts ?? []).map((item) => ({
      id: item.id,
      price: item.price,
      quantity: item.quantity,
    }));
    const payment_intent_id = paymentIntent;

    if (!currentUser) {
      toast.error("Please Log in to continue with checkout");
      setLoading(false);
      setRedirecting(true);
      router.push("/login");
    } else {
      try {
        const res = await fetch(`/api/create-payment-intent`, {
          method: "POST",
          body: JSON.stringify({ submitData, payment_intent_id }),
          headers: {
            "content-type": "application/json",
          },
        });
        const data = await res.json();
        setClientSecret(data.paymentIntent.client_secret);
        //If payment intent state is not already existing then setPaymentIntent to new payment intent id
        if (!paymentIntent) {
          setPaymentIntent(data.paymentIntent.id);
        }
        //Checks to see paymentIntent is already in local storage, if not it sets local storage to paymentIntent Id
        const hillsidePaymentIntent: any = localStorage.getItem(
          "hillsidePaymentIntent",
        );
        const parsedPaymentIntent: string | null = JSON.parse(
          hillsidePaymentIntent,
        );
        if (!parsedPaymentIntent) {
          localStorage.setItem(
            "hillsidePaymentIntent",
            JSON.stringify(data.paymentIntent.id),
          );
        } else {
          console.log("Payment Intent is already logged in LocalStorage");
        }
      } catch (err) {
        setError(true);
        toast.error("Error occurred");
        router.push("/cart");
        console.log("err", err);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
  );

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#e1e8e6",
        colorText: "#333333",
      },
      labels: "floating",
    },
  };

  const handleSetPaymentSuccess = (value: boolean) => {
    setPaymentSuccess(value);
  };

  return (
    <div className="w-full min-h-screen bg-primaryColor flex items-center justify-center py-20">
      {loading && <div>Loading...</div>}
      {redirecting && <div>Redirecting...</div>}
      {error && (
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl">Oops..an error has occurred!</h3>
          <Button
            buttonText="Return to Cart"
            onClick={() => router.push("/cart")}
            outline={1}
            full
          />
        </div>
      )}
      {clientSecret && (
        <div>
          {paymentSuccess ? (
            <div className="flex flex-grow  flex-col items-center justify-center">
              <h3>Payment Success!</h3>
              <div>
                <Button
                  buttonText="View your Orders"
                  onClick={() => router.push("/order")}
                  outline={1}
                />
              </div>
            </div>
          ) : (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm
                clientSecret={clientSecret}
                handleSetPaymentSuccess={handleSetPaymentSuccess}
                setPaymentIntent={setPaymentIntent}
              />
            </Elements>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutClient;
