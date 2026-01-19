export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from "@/libs/prismadb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

const calculateOrderAmount = (items: any[]) => {
  return Math.floor(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
};

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { getCurrentUser } = await import("@/actions/getCurrentUser");
    const currentUser = await getCurrentUser(req);

    if (!currentUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const total = calculateOrderAmount(data.submitData) * 100;

    // Updating an existing payment intent
    if (data.payment_intent_id) {
      const currentIntent = await stripe.paymentIntents.retrieve(
        data.payment_intent_id
      );

      if (currentIntent) {
        await stripe.paymentIntents.update(data.payment_intent_id, {
          amount: total,
        });
      }

      const updatedOrder = await prisma.order.update({
        where: { paymentIntentId: data.payment_intent_id },
        data: {
          amount: total / 100,
          products: data.submitData,
        },
      });

      return NextResponse.json({ updatedOrder });
    }

    // Creating a new payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "gbp",
      automatic_payment_methods: { enabled: true },
    });

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

    return NextResponse.json({ paymentIntent });
  } catch (err) {
    console.error("Payment intent error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}