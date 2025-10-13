import Rating from "@/components/base/Rating";
import { Review } from "@/types/products";
import { numberFormat } from "@/utils/helper";
import classNames from "classnames";
import { useMemo } from "react";

interface ReviewSummaryProps {
  reviews: Review[];
  className?: string;
}

const getPercentage = (count: number, totalReviews: number) => {
  return totalReviews === 0 ? 0 : (count / totalReviews) * 100;
};

const ReviewSummary = ({ reviews, className }: ReviewSummaryProps) => {
  const { totalReviews, ratingCounts, averageRating } = useMemo(() => {
    const totalReviews = reviews.length;

    const ratingCounts = [5, 4, 3, 2, 1].map(
      (star) =>
        reviews.filter(
          (r) => Math.floor(r.rating) === star || Math.round(r.rating) === star
        ).length
    );

    const averageRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / (totalReviews || 1);

    return { totalReviews, ratingCounts, averageRating };
  }, [reviews]);
  return (
    <div className={classNames("max-w-6xl mx-auto", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 place-content-center">
        <div className="text-center border-b border-b-gray-300 md:border-b-0 md:border-r md:border-r-gray-300 md:px-8 py-8 md:py-2 ">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-700 mb-2">
            {averageRating.toFixed(1)}
          </h4>
          <Rating
            rating={averageRating}
            size="small"
            className="text-primary-200 pointer-events-none rating mb-2 justify-center"
          />
          <p className="text-sm md:text-base lg:text-lg">
            {totalReviews} reviews
          </p>
        </div>
        <div className="md:col-span-2 md:px-8 py-8 md:py-2">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={star} className="flex items-center gap-4 mb-2 last:mb-0">
              <span className="w-4 text-sm font-medium">{star}</span>
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-200 rounded-full"
                  style={{
                    width: `${getPercentage(ratingCounts[idx], totalReviews)}%`
                  }}
                ></div>
              </div>
              <p className=" md:w-20 text-sm text-neutral-700 text-nowrap px-2">
                <span className="font-medium">
                  {numberFormat(ratingCounts[idx], {
                    notation: "compact",
                    compactDisplay: "short"
                  })}{" "}
                </span>
                <span className="hidden md:inline">reviews</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
