export const dynamic = 'force-dynamic'; // Forces render on request & NOT BUILD

import { CartProductType } from "@/app/product/[productId]/productDetails";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getCurrentUser } from "@/actions/getCurrentUser";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});

//Calculate order total
const calculateOrderAmount = (items: CartProductType[]) => {
  const totalPrice = items.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity;
    return acc + itemTotal;
  }, 0);

  const price: any = Math.floor(totalPrice);

  return price;
};

export async function POST(req, res) {
  const data = await req.json();
  const currentUser = await getCurrentUser();
  const total = calculateOrderAmount(data.submitData) * 100;

  //IF NO USER IS LOGGED IN THEN RETURN ERROR
  if (!currentUser) {
    return NextResponse.error();
  } 

  //If data.payment_intent_id exists:
  //1. check to see where it exists - database done
  //2. Update where it exists - database done
  //3. Otherwise create new paymentIntent
  if (data.payment_intent_id) {
    //Finding and updating order in stripe payments
    const current_intent = await stripe.paymentIntents.retrieve(
      data.payment_intent_id
    );

    if (current_intent) {
      const updated_intent = await stripe.paymentIntents.update(
        data.payment_intent_id,
        { amount: total }
      );
    }

    //Finding and updating order in database
    const updateOrder = await Promise.all([
      prisma.order.findFirst({
        where: { paymentIntentId: data.payment_intent_id },
      }),
      prisma.order.update({
        where: { paymentIntentId: data.payment_intent_id },
        data: {
          amount: total / 100,
          products: data.submitData,
        },
      }),
    ]);

    return NextResponse.json({ data, updateOrder });
    
  } else {
    //CREATES PAYMENT INTENT IN STRIPE
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
    });

    //HANDLES ADDING ORDER TO DATABASE
    await prisma.order.create({
      data: {
        user: { connect: { id: currentUser.id } },
        amount: total / 100,
        currency: "gbp",
        status: "pending",
        deliveryStatus: "pending",
        paymentIntentId: paymentIntent.id,
        products: data.submitData,
      },
    });

    return NextResponse.json({ data, paymentIntent });
  }
}

