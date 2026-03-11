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

}
