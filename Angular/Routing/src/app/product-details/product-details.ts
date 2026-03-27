import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  id: any;
  product: any;
  cart: any[] =[];
  list: any[] =[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params  => {
      const id = Number(params.get('id'));
           this.product = this.productService.getProductById(id);
      console.log(id);
      console.log('Product:', this.product);
    });
  }

  addCart(){
    this.cart.push(this.product);
    alert(`${this.product.name} added to cart!`);
  }
  addList(){
    this.list.push(this.product);
    alert(`${this.product.name} added to Wishlist!`);
  }
  goToReviews(){
    this.router.navigate(['reviews'], {relativeTo: this.route});
  }
}
