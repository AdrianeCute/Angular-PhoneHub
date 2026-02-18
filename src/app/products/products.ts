import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  image: string;
  stock: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products: Product[] = [
    { name: 'iPhone 15', price: 52000, image: '/product/Apple-iPhone-15-release-date-price-and-features.jpg', stock : 5  },
    { name: 'Samsung Galaxy S24', price: 48000, image: '/product/58607-samsung-galaxy-s24-8.jpg', stock : 5 },
    { name: 'Xiaomi 14', price: 32000, image: '/product/gsmarena_002.jpg', stock : 4 },
    { name: 'Vivo V30', price: 24500, image: '/product/vivo-v30-pro-review-4.avif' , stock :2 },
    { name: 'Oppo Find X7', price: 29999, image: '/product/1-800x450.jpg', stock : 3 } 
  ];

  cart: Product[] = [];
  showCart = false;

  addToCart(product: Product) {

    if (product.stock <= 0) {
      return; // prevent adding if no stock
    }

    this.cart.push(product);

    product.stock--; // decrease stock properly
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  removeFromCart(index: number) {

    const removedProduct = this.cart[index];

    removedProduct.stock++; // restore stock

    this.cart.splice(index, 1);

  }

  get total(): number {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }
}
