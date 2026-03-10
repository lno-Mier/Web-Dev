import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model'; // Импортируем интерфейс

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product; // Получаем данные товара из родителя
  currentImage: string = '';

  ngOnInit() {
    // При загрузке показываем главное фото
    this.currentImage = this.product.image;
  }

  // Функция для смены картинки при клике на миниатюру
  changeImage(img: string) {
    this.currentImage = img;
  }

  // Поделиться в WhatsApp
  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }

  // Поделиться в Telegram
  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Check out this product: ${this.product.name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}