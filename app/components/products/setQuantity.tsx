"use client";

import { CartProductType } from "@/app/product/[productId]/productDetails";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartCounter,
  cartProduct,
  handleIncrease,
  handleDecrease,
}) => {

const buttonStyle = "w-1/3 border rounded font-semibold shadow-input"

  return (
    <div className="flex items-center justify-between w-48 gap-1">
      <h2 className="w-1/2 font-semibold text-textPrimary">Quantity: </h2>
      <div className="w-1/2 flex items-center justify-between mb-1">
        <button className={buttonStyle} onClick={handleDecrease}> - </button>
        <h2 className="text-center">{cartProduct.quantity}</h2>
        <button className={buttonStyle} onClick={handleIncrease}> + </button>
      </div>
    </div>
  );
};

export default SetQuantity;