import { Component } from '@angular/core';
import { ProductsComponent } from './products/products'; // Импорт твоего магазина

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], // <-- Обязательно добавляем компонент в imports
  template: `
    <header>
      <h1>My Online Store</h1>
    </header>
    <main>
      <app-products></app-products> 
    </main>
  `,
  styles: [`
    header { 
      background: #0089d0; 
      color: white; 
      padding: 1rem; 
      text-align: center; 
      font-family: sans-serif;
    }
  `]
})
export class App {}