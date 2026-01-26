"use client";

import Avatar from "@/app/components/products/Avatar";
import Heading from "@/app/components/Headings";
import { generateRating } from "@/app/utils/generateRating";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  const hasReviews = product?.reviews && product.reviews.length > 0;

  return (
    <div className="w-full lg:w-1/2">
      <Heading title="Reviews" />
      <div className="flex flex-col gap-4 w-full">
        {!hasReviews && (
          <p className="text-sm italic text-textPrimary">
            This product has no reviews yet
          </p>
        )} {}
          {hasReviews &&
          product.reviews.map((review: any) => (
            <div key={review.id} className="flex flex-col">
              <div className="flex items-center gap-2">
                <Avatar src={review?.user.image} />
                <h3 className="font-semibold font-xl">{review?.user.name}</h3>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center text-textPrimary">
                  {generateRating(review.rating)}
                </div>
                <div className="font-light italic text-sm">
                  {moment(review.createdAt).fromNow()}
                </div>
              </div>

              <div>{review.comment}</div>
              <hr className="mt-4 w-full text-light-primary" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListRating;
