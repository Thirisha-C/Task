import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
    name = "Bella Vitta Perfume";
    price = 800;
    description ="Long Lasting fragrance";
    discountColor = "green";
}
