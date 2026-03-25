import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    {
      id: 1,
      name: 'Watch',
      price: 1000,
      image: 'https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UL1500_.jpg'
    },
    {
      id: 2,
      name: 'Perfume',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539'
    },
    {
      id: 3,
      name: 'Shoes',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
    },
    {
      id: 4,
      name: 'Bag',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3'
    },
    {
      id: 5,
      name: 'Sunglasses',
      price: 800,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f'
    },
    {
      id: 6,
      name: 'Headphones',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    },
    {
      id: 7,
      name: 'Mobile',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
    },
    {
      id: 8,
      name: 'Laptop',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
    },
    {
      id: 9,
      name: 'T-shirt',
      price: 700,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
    },
    {
      id: 10,
      name: 'Bottle',
      price: 300,
      image: 'https://tse4.mm.bing.net/th/id/OIP.reb4n90f5_d5vumQcRhPWQHaE8?pid=Api&P=0&h=180'
    }
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

   // viewProduct(id:number){
  //   this.router.navigate([id], 
  //     {
  //       relativeTo: this.route
  //       //  ,fragment: 'top'
  //     });
  // }

  viewProduct(id: number)
   {
    this.router.navigate(['products', id]);
  }
}


