import { getCurrentUser } from "@/actions/getCurrentUser";
import CheckoutClient from "./checkoutClient";

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
