export interface HighlightItem {
  id: number;
  title: string;
  image: string;
  category: string;
  subCategory: string;
  images: string[];
  thumbnail: string;
}

export interface TopPickItem extends HighlightItem {
  description: string;
  price: number;
  rating: number;
}
