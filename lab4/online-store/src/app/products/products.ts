import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item'; // Убрал .ts
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.html',     // Исправил имя файла
  styleUrls: ['./products.css']       // Исправил имя файла
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13 128Gb Midnight',
      description: 'Смартфон Apple iPhone 13 128Gb черный',
      price: 295000,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h23/84378448265246.jpg?format=gallery-medium'
      ]
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Смартфон Samsung Galaxy S23 Ultra 12Gb/256Gb черный',
      price: 540000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h26/69635683123230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h00/69635685548062.jpg?format=gallery-medium'
      ]
    },
    {
      id: 3,
      name: 'MacBook Air 13 MGN63',
      description: 'Ноутбук Apple MacBook Air 13 MGN63 серый (8 ГБ/256 ГБ SSD)',
      price: 420000,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h54/h99/63947825315870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h7c/63947827806238.jpg?format=gallery-medium'
      ]
    },
    {
      id: 4,
      name: 'Apple AirPods Pro 2',
      description: 'Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
      price: 112000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/84108189761566.jpg?format=gallery-medium'
      ]
    },
    {
      id: 5,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая приставка Sony PlayStation 5 Slim 1TB белый',
      price: 265000,
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9e/pe2/67515155.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/pe2/67515155.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h16/84528448569374.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/h9e/84528448634910.jpg?format=gallery-medium'
      ]
    },
    {
      id: 6,
      name: 'Xiaomi Robot Vacuum S10',
      description: 'Робот-пылесос Xiaomi Robot Vacuum S10 белый',
      price: 85000,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-belyi-109407332/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h10/70275881435166.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h10/70275881435166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h59/70275883204638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h74/70275884974110.jpg?format=gallery-medium'
      ]
    },
    {
      id: 7,
      name: 'Apple Watch SE Gen 2',
      description: 'Смарт-часы Apple Watch SE Gen 2 40 мм Starlight бежевый',
      price: 135000,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-40-mm-starlight-bezhevyi-106362759/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h68/86042942439454.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h68/86042942439454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h37/86042942472222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h62/86042942504990.jpg?format=gallery-medium'
      ]
    },
    {
      id: 8,
      name: 'Apple iPad 9 (2021)',
      description: 'Планшет Apple iPad 9 10.2 2021 Wi-Fi 64Gb серый',
      price: 153000,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-ipad-9-10-2-2021-wi-fi-64gb-seryi-102301598/',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h44/64195192258590.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h92/h44/64195192258590.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h1e/64195195076638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h38/64195197501470.jpg?format=gallery-medium'
      ]
    }
    // Добавь сюда остальные товары...
  ];
}