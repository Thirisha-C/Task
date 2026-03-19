import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  id: any;
  offer: any;
  product: any;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() 
  {
    this.id = this.route.snapshot.paramMap.get('id'); // route param
    this.offer = this.route.snapshot.queryParamMap.get('offer');   // query param
    this.product = this.route.snapshot.data['product']; // resolver 
  }
  canExit() 
  {
    return confirm("Leave page?");
  }
  goBack() 
  {
    history.back();
  }
}


