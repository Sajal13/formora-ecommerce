import { Review } from "@/types/products";
import Image from "next/image";
import React from "react";
import Image1 from "@/assets/images/avatar/avatar.webp";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { numberFormat } from "@/utils/helper";
import Rating from "../base/Rating";
import classNames from "classnames";

dayjs.extend(relativeTime);

interface ProductReviewCardProps {
  review: Review;
}

const ProductReviewCard = ({ review }: ProductReviewCardProps) => {
  return (
    <div className="py-4">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 flex-wrap mb-4">
        <div className="flex gap-2 items-center">
          <div className="w-9 h-9 rounded-full border border-gray-200 overflow-hidden p-0.5 pb-0">
            <Image
              src={Image1}
              alt="avatar"
              height={36}
              width={36}
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <h4 className="text-neutral-700 font-semibold">
            {review.reviewerName}
          </h4>
          <p className="text-xs text-muted">{dayjs(review.date).fromNow()}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">
            {numberFormat(review.rating, {
              maximumFractionDigits: 1,
              minimumFractionDigits: 1
            })}
          </p>
          <Rating
            rating={review.rating}
            size="large"
            className="text-primary-200 text-2xl"
          />
        </div>
      </div>
      <p>{review.comment}</p>
      <div
        className={classNames("mt-4 gap-3", {
          flex: review.images && review.images?.length > 0,
          hidden: review.images && review.images?.length === 0
        })}
      >
        {review.images &&
          review.images.map((image, i) => (
            <div className="w-36 h-36" key={i}>
              <Image
                src={image}
                alt="thumbnail"
                width={144}
                height={144}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductReviewCard;
