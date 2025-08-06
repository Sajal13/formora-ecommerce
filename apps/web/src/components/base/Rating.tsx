"use client";

import React from "react";
import {
  Rating as FluentUiRating,
  RatingProps as FluentUiRatingProps
} from "@fluentui/react-rating";

interface RatingProps extends FluentUiRatingProps {
  rating: number;
  className?: string;
  readonly?: boolean;
  style?: React.CSSProperties;
}

const Rating = ({ rating, className, style, ...rest }: RatingProps) => {
  return (
    <FluentUiRating
      value={rating}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default Rating;
