"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import { Button } from "../components/buttons/buttons";
import Heading from "../components/Headings";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";
import CartItem from "./cartItem";
import CartItemMobile from "./cartItemMobile";
import Link from "next/link";
import { CartProductType } from "../product/[productId]/productDetails";

const CartClient = () => {
  const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
  const [mobile, setMobile] = useState<boolean | null>(null);
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);


  useEffect(() => {
    autoResize();
  }, []);

  const autoResize = () => {
    if (window.innerWidth < 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", autoResize);
    return () => window.removeEventListener("resize", autoResize);
  }, []);

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div>
        <p>Your cart is empty</p>
        <button>go shopping</button>
      </div>
    );
  }

  //Calculate order total
  const calculateOrderAmount = (items: CartProductType[]) => {
    const totalPrice = items.reduce((acc, item) => {
      const itemTotal = item.price * item.quantity;
      return acc + itemTotal;
    }, 0);

    const price: any = totalPrice.toFixed(2);

    return price;
  };

  calculateOrderAmount(cartProducts);

  return (
    <Container>
      <Heading title="Shopping Cart" center borderBottom />
      <div className="hidden md:grid grid-cols-5 gap-2 items-center mb-2 text-sm md:text-lg border-b border-b-light-primary">
        <p className="col-span-2 justify-self-start">PRODUCT</p>
        <p className="justify-self-center">PRICE</p>
        <p className="justify-self-center">QUANTITY</p>
        <p className="justify-self-end">TOTAL</p>
      </div>
      <div className="mb-4">
        {cartProducts.map((item) => {
          return mobile ? (
            <CartItemMobile key={item.id} item={item} />
          ) : (
            <CartItem key={item.id} item={item} />
          );
        })}
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col items-start gap-2 w-full md:w-auto">
          {window.innerWidth < 768 ? (
            <>
              <Button
                buttonText="Clear Cart"
                onClick={() => {
                  handleClearCart();
                }}
                outline={1}
                full
              />
              <Button
                buttonText="Continue Shopping"
                onClick={() => {}}
                custom="text-textPrimary border border-textPrimary"
                full
              />
            </>
          ) : (
            <>
              <Button
                buttonText="Clear Cart"
                onClick={() => {
                  handleClearCart();
                }}
                outline={1}
              />
              <Button
                buttonText="Continue Shopping"
                onClick={() => {}}
                custom="text-textPrimary border border-textPrimary"
              />
            </>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 py-2 md:px-2 w-full md:w-auto">
          <div className="flex w-full justify-between font-semibold">
            <p>Subtotal:</p>
            <p>{formatPrice(cartTotalAmount)}</p>
          </div>
          <p className="w-full italic font-light">
            Tax and Shipping calculated on Checkout
          </p>
          <Link href="/checkout" className="w-full">
            <Button
              buttonText={isRedirecting ? "Redirecting.." : "Checkout"}
              onClick={() => {}}
              outline={2}
              full
              disabled={isRedirecting ? true : false}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CartClient;
