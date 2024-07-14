// Herbs, Shrubs, Trees, Climbers, and Creepers.

export type TCategory = "Herbs" | "Shrubs" | "Trees" | "Climbers" | "Creepers";

export type TProduct = {
  title: string;
  description: string;
  category: TCategory;
  price: number;
  rating: number;
  quantity: number;
  images: string;
};
