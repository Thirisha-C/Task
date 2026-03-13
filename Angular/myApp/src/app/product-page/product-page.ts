import { Component } from '@angular/core';
import { ProductImage } from '../product-image/product-image';
import { ProductDetails } from '../product-details/product-details';
import { AddToCartButton } from '../add-to-cart-button/add-to-cart-button';
import { Reviews } from '../reviews/reviews';

@Component({
  selector: 'app-product-page',
  imports: [ProductImage, ProductDetails, AddToCartButton, Reviews],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
  watch = {
    image: "assets/watch.jpg",
    name: "Watch",
    price: 5994,
    brand: "Casio",
    description: "Vintage Series Digital Gold Dial"
  };
  perfume ={
    image: 'assets/perfume.jpg',
  name: 'Bella Vitta Perfume',
  price: 800,
  description: 'Long Lasting fragrance',
  discount: '20% Discount',
  discountColor: "green"
  };

  addToCart(product:any)
  {
  alert(product.name + " Product added to cart");  
}
}

