import { JSX } from "react";

export interface Review {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
  images?: string[];
}

export interface HighlightItem {
  id: number;
  title: string;
  image: string;
  category: string;
  subCategory: string;
  images: string[];
  thumbnail: string;
}

export interface ProductItem extends HighlightItem {
  description: string;
  price: number;
  rating: number;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  featured: boolean;
  subCategories: { id: number; name: string; slug: string }[];
}

export interface Product extends ProductItem {
  stock: number;
  tags: string[];
  brand: string;
  availabilityStatus: string;
  discountPercentage: number;
  returnPolicy: string;
  reviews: Review[];
  sku: string;
  warrantyInformation: string;
  shippingInformation: string;
}

export interface ProductTabHeader {
  id: string;
  label: string;
}

export interface ProductTabContent {
  id: number;
  key: string;
  content: JSX.Element;
}

export interface ProductAdditionalInformation {
  dimensions: {
    height: number;
    width: number;
    mattressSize?: number;
  };
  weight: {
    productWight: number;
    maxLoad: number;
  };
  material: {
    frameMaterial: string;
    surfaceFinish: string;
  };
  color: string;
  assembly: boolean;
  warranty: number;
  brand?: string;
  seatingCapacity?: number;
  storageAvailability?: boolean;
}
