export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[]; // Для галереи
  link: string;     // Ссылка на Kaspi
}