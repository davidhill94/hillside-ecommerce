export const dynamic = "force-dynamic";
import { getCurrentUser } from "@/actions/getCurrentUser";
import CheckoutClient from "./checkoutClient";
import { cookies, headers } from "next/headers";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Checkout = async () => {

  const currentUser:any = await getCurrentUser();
  console.log("USER", currentUser)

  return (
    <div>
      <CheckoutClient currentUser={currentUser} />
    </div>
  );
};

export default Checkout;
