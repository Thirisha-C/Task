import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, ParamMap} from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product: any;

  constructor(private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngonInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.product = this.productService.getProductById(id);
    });
  }
}
