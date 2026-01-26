"use client";
import { truncateText } from "@/app/utils/truncateFunction";
import { formatPrice } from "@/app/utils/formatPrice";
import { formatReviews } from "@/app/utils/formatReviews";
import { generateRating } from "@/app/utils/generateRating";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

  const router = useRouter();

  //averages out the review ratings - tallies up the total rating sum and divides by the number of reviews
const productRatingAvg = data.reviews.reduce((tally: number, item: any) => 
  item.rating + tally, 0) / data.reviews.length

  return (
    <div className="col-span-1">
      <div className="flex flex-col items-center w-full gap-1">
        <div 
        className="aspect-square overflow-hidden cursor-pointer relative w-full rounded-lg"
        onClick={() => router.push(`/product/${data.id}`)}
        >
          <img src={data.images[0].image} alt={data.name} className="hover:scale-105 transition"></img>
        </div>
        <div className="w-full p-1 flex flex-col items-start justify-between">
          <h3
          className="cursor-pointer hover:underline font-bold"
          onClick={() => router.push(`/product/${data.id}`)}
          >{truncateText(data.name)}</h3>
          <div  className="flex justify-start w-full">
            <h4 className="flex items-center justify-start w-auto mr-2 text-textPrimary">
              {generateRating(
                data.reviews.length > 0 ? productRatingAvg : 0
              )}
            </h4>
            <h4 className="italic w-full text-textPrimary">{formatReviews(data.reviews.length)}</h4>
          </div>
          <h4 className="font-semibold">{formatPrice(data.price)}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
