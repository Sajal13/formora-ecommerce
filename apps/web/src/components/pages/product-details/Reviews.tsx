import { Review } from "@/types/products";
import React, { useState } from "react";
import ReviewSummary from "./ReviewSummary";
import ProductReviewCard from "@/components/cards/ProductReviewCard";
import Button from "@/components/base/Button";
import { IoMdAdd } from "react-icons/io";
import Modal from "@/components/base/Modal";
import ReviewForm from "./ReviewForm";

interface ReviewsProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-100 py-6 md:py-8 lg:py-10 mb-6 md:mb-8 lg:mb-10 px-4 rounded-xl">
        <div className=" flex justify-between items-center">
          <h5 className="text-xl md:text-2xl font-bold text-neutral-700">
            Reviews
          </h5>
          <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
            <span className="mr-1">
              <IoMdAdd />
            </span>
            Add New
          </Button>
        </div>
      </div>
      <ReviewSummary reviews={reviews} className="mb-6 md:mb-8 lg:mb-10" />
      {reviews.map((review, i) => (
        <ProductReviewCard key={i} review={review} />
      ))}
      <Modal
        open={open}
        setOpen={setOpen}
        title="Add New Review"
        modalClass="flex items-center justify-center"
        buttonClass="hover:!bg-transparent text-red-500 hover:text-red-800"
        className="bg-gray-200  min-w-full md:min-w-lg max-w-lg mx-auto rounded-xl "
        titleClass="text-neutral-700 font-bold text-xl md:text-2xl"
      >
        <div className="px-4 md:px-5 pb-4 md:pb-5 overflow-hidden">
          <div className="max-h-[40rem] overflow-y-auto scrollbar relative">
            <ReviewForm onClose={() => setOpen(false)} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Reviews;
