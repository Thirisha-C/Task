import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-image',
  imports: [],
  templateUrl: './product-image.html',
  styleUrl: './product-image.css',
})
export class ProductImage {
  @Input() image!: string; 
}