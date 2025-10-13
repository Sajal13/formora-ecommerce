import React from "react";
import { FileAttachment } from "@/types/common";
import * as yup from "yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Rating from "@/components/base/Rating";
import classNames from "classnames";
import FileUploader from "@/components/base/FileUploader";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Button from "@/components/base/Button";
import { useToast } from "@/provider/ToastProvider";

interface ReviewFormValue {
  rating: number;
  comment: string;
  images?:
    | {
        id: string;
        file: FileAttachment;
      }[]
    | null;
}

interface ReviewFormProps {
  onClose: () => void;
}

const ReviewFormSchema: yup.ObjectSchema<ReviewFormValue> = yup.object({
  rating: yup
    .number()
    .min(0.5, "Rating is required.")
    .required("Rating is required."),
  comment: yup.string().required("Comment is required"),
  images: yup
    .array(
      yup.object({
        id: yup.string().required("Id is required."),
        file: yup.mixed<FileAttachment>().required("File is required.")
      })
    )
    .max(5, "Max 5 image can be uploaded at once.")
    .nullable()
});

const ReviewForm = ({ onClose }: ReviewFormProps) => {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<ReviewFormValue>({
    resolver: yupResolver(ReviewFormSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      images: []
    }
  });

  const imagesList = watch("images");

  const onSubmitHandler: SubmitHandler<ReviewFormValue> = (data) => {
    console.log(data);
    onClose();
    reset();
  };

  const onDrop = (acceptedFile: File | File[]) => {
    const files = Array.isArray(acceptedFile) ? acceptedFile : [acceptedFile];

    let combined = [
      ...(imagesList || []),
      ...files.map((file) => ({
        id: crypto.randomUUID(),
        file: {
          url: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
          type: file.type
        }
      }))
    ];

    if (combined.length > 5) {
      combined = combined.slice(0, 5);
      showToast("Only the first 5 images have been selected.", "warning");
    }

    setValue("images", combined, { shouldValidate: true });
  };

  const handleRemove = (id: string) => {
    const updatedImage = (imagesList || []).filter((item) => item.id !== id);
    setValue("images", updatedImage, { shouldValidate: true });
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="px-2">
      <div className="mb-4">
        <label htmlFor="rating" className="text-lg">
          Your Rating
        </label>
        <Controller
          name="rating"
          control={control}
          render={({ field }) => (
            <>
              <Rating
                id="rating"
                rating={field.value}
                className="text-warning mt-2"
                step={0.5}
                onChange={field.onChange}
              />
              {errors.rating && (
                <p className="text-xs mx-1 mt-2 text-red-500">
                  {errors.rating.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="review" className="text-lg">
          Your Review
        </label>
        <textarea
          id="review"
          rows={6}
          placeholder="Write your review"
          {...register("comment")}
          className={classNames(
            `mt-2 resize-none w-full border border-muted rounded-lg outline-0
            focus:border-green-500 font-medium text-neutral-700 placeholder:text-muted
            px-5 py-3 text-base  
          `,
            {
              "border-red-500": errors.comment
            }
          )}
        />
        {errors.comment && (
          <p className="text-xs mx-1 mt-2 text-red-500">
            {errors.comment.message}
          </p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="image">Your Image(s)</label>
        <FileUploader
          rootClass="mt-2"
          isMulti={true}
          fileType={{ "image/*": [] }}
          onDrop={onDrop}
          height={150}
        />
        {errors.images && (
          <p className="text-xs mx-1 mt-2 text-red-500">
            {errors.images.message}
          </p>
        )}
        {imagesList && imagesList?.length > 0 && (
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {imagesList.map((item) => (
              <div key={item.id} className="w-14 h-14 relative">
                <Image
                  src={item.file.url}
                  alt="preview image"
                  height={56}
                  width={56}
                  className="rounded-lg object-cover w-full h-full"
                />
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 rounded-lg hover:bg-amber-50 cursor-pointer text-sm absolute top-1 right-1"
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end items-center gap-2 sticky bottom-0 left-0 z-40 bg-gray-200 pt-4">
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="border-red-500 hover:bg-red-500"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button type="submit" variant="solid" size="sm">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
