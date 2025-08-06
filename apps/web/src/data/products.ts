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
  category: string;
  slug: string;
  imageUrl: string;
  featured: boolean;
  subCategories: { id: number; name: string }[];
}

export const categories: ProductCategory[] = [
  {
    id: 1,
    category: "Living Room",
    slug: "living-room",
    imageUrl: "/images/categories/living-room.jpg",
    featured: true,
    subCategories: [
      { id: 101, name: "Sofas & Couches" },
      { id: 102, name: "Coffee Tables" },
      { id: 103, name: "TV Stands" },
      { id: 104, name: "Recliners" },
      { id: 105, name: "Sectionals" }
    ]
  },
  {
    id: 2,
    category: "Bedroom",
    slug: "bedroom",
    imageUrl: "/images/categories/bedroom.jpg",
    featured: true,
    subCategories: [
      { id: 201, name: "Beds" },
      { id: 202, name: "Mattresses" },
      { id: 203, name: "Nightstands" },
      { id: 204, name: "Dressers" },
      { id: 205, name: "Wardrobes" }
    ]
  },
  {
    id: 3,
    category: "Dining",
    slug: "dining",
    imageUrl: "/images/categories/dining.jpg",
    featured: false,
    subCategories: [
      { id: 301, name: "Dining Tables" },
      { id: 302, name: "Dining Chairs" },
      { id: 303, name: "Bar Stools" },
      { id: 304, name: "Sideboards & Buffets" }
    ]
  },
  {
    id: 4,
    category: "Office",
    slug: "office",
    imageUrl: "/images/categories/office.jpg",
    featured: false,
    subCategories: [
      { id: 401, name: "Desks" },
      { id: 402, name: "Office Chairs" },
      { id: 403, name: "Bookcases" },
      { id: 404, name: "Filing Cabinets" }
    ]
  },
  {
    id: 5,
    category: "Outdoor",
    slug: "outdoor",
    imageUrl: "/images/categories/outdoor.jpg",
    featured: true,
    subCategories: [
      { id: 501, name: "Patio Sets" },
      { id: 502, name: "Outdoor Chairs" },
      { id: 503, name: "Garden Tables" },
      { id: 504, name: "Umbrellas & Shades" }
    ]
  },
  {
    id: 6,
    category: "Storage",
    slug: "storage",
    imageUrl: "/images/categories/storage.jpg",
    featured: false,
    subCategories: [
      { id: 601, name: "Shelves" },
      { id: 602, name: "Cabinets" },
      { id: 603, name: "Shoe Racks" },
      { id: 604, name: "Storage Benches" }
    ]
  },
  {
    id: 7,
    category: "Decor",
    slug: "decor",
    imageUrl: "/images/categories/decor.jpg",
    featured: false,
    subCategories: [
      { id: 701, name: "Mirrors" },
      { id: 702, name: "Wall Art" },
      { id: 703, name: "Lamps" },
      { id: 704, name: "Clocks" }
    ]
  }
];
