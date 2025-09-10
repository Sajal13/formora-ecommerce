export interface Review {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
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

export const categories: ProductCategory[] = [
  {
    id: 1,
    name: "Living Room",
    slug: "living-room",
    imageUrl: "/images/categories/living-room.jpg",
    featured: true,
    subCategories: [
      { id: 101, name: "Sofas & Couches", slug: "sofa-&-couch" },
      { id: 102, name: "Coffee Tables", slug: "coffee-tables" },
      { id: 103, name: "TV Stands", slug: "tv-stands" },
      { id: 104, name: "Recliners", slug: "recliners" },
      { id: 105, name: "Sectionals", slug: "sectionals" }
    ]
  },
  {
    id: 2,
    name: "Bedroom",
    slug: "bedroom",
    imageUrl: "/images/categories/bedroom.jpg",
    featured: true,
    subCategories: [
      { id: 201, name: "Beds", slug: "beds" },
      { id: 202, name: "Mattresses", slug: "mattresses" },
      { id: 203, name: "Nightstands", slug: "nightstands" },
      { id: 204, name: "Dressers", slug: "dressers" },
      { id: 205, name: "Wardrobes", slug: "wardrobes" }
    ]
  },
  {
    id: 3,
    name: "Dining",
    slug: "dining",
    imageUrl: "/images/categories/dining.jpg",
    featured: false,
    subCategories: [
      { id: 301, name: "Dining Tables", slug: "dining-tables" },
      { id: 302, name: "Dining Chairs", slug: "dining-chairs" },
      { id: 303, name: "Bar Stools", slug: "bar-stools" },
      { id: 304, name: "Sideboards & Buffets", slug: "sideboards-&-buffets" }
    ]
  },
  {
    id: 4,
    name: "Office",
    slug: "office",
    imageUrl: "/images/categories/office.jpg",
    featured: false,
    subCategories: [
      { id: 401, name: "Desks", slug: "desks" },
      { id: 402, name: "Office Chairs", slug: "office-chairs" },
      { id: 403, name: "Bookcases", slug: "bookcases" },
      { id: 404, name: "Filing Cabinets", slug: "filing-cabinets" }
    ]
  },
  {
    id: 5,
    name: "Outdoor",
    slug: "outdoor",
    imageUrl: "/images/categories/outdoor.jpg",
    featured: true,
    subCategories: [
      { id: 501, name: "Patio Sets", slug: "patio-sets" },
      { id: 502, name: "Outdoor Chairs", slug: "outdoor-chairs" },
      { id: 503, name: "Garden Tables", slug: "garden-tables" },
      { id: 504, name: "Umbrellas & Shades", slug: "umbrellas-&-shades" }
    ]
  },
  {
    id: 6,
    name: "Storage",
    slug: "storage",
    imageUrl: "/images/categories/storage.jpg",
    featured: false,
    subCategories: [
      { id: 601, name: "Shelves", slug: "shelves" },
      { id: 602, name: "Cabinets", slug: "cabinets" },
      { id: 603, name: "Shoe Racks", slug: "shoe-racks" },
      { id: 604, name: "Storage Benches", slug: "storage-benches" }
    ]
  },
  {
    id: 7,
    name: "Decor",
    slug: "decor",
    imageUrl: "/images/categories/decor.jpg",
    featured: false,
    subCategories: [
      { id: 701, name: "Mirrors", slug: "mirrors" },
      { id: 702, name: "Wall Art", slug: "wall-art" },
      { id: 703, name: "Lamps", slug: "lamps" },
      { id: 704, name: "Clocks", slug: "clocks" }
    ]
  }
];
