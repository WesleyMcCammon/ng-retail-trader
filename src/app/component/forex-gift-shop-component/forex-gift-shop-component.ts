import { Component, OnInit } from '@angular/core';

interface Product {
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-forex-gift-shop-component',
  imports: [],
  templateUrl: './forex-gift-shop-component.html',
  styleUrl: './forex-gift-shop-component.css',
})
export class ForexGiftShopComponent implements OnInit {
  products: Product[] = new Array<Product>();

  ngOnInit(): void {
    this.products.push({title: '', description: '', imageUrl: ''});
  }
}
