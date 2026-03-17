import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-product-service',
  imports: [CommonModule],
  templateUrl: './product-service.html',
  styleUrl: './product-service.css',
})
export class ProductService implements OnInit {
  products: any[] = [];
  constructor(private product: Product) { }
  //Get
  ngOnInit() {
    this.product.getProducts()
      .subscribe((data: any) => {
        console.log(data);
        this.products = data;
      });
  }
  //Post
  addData() {
    const newProduct =
    {
      title: "New Product",
      price: 525,
      description: "Perfume",
      image: "https://in.images.search.yahoo.com/search/images?p=perfume+images&fr=mcafee&type=E210IN885G0&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F03%2F14%2F11%2F41%2Fperfume-2142824_1280.jpg#id=1&iurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F03%2F14%2F11%2F41%2Fperfume-2142824_1280.jpg&action=click",
      category: "test"
    };
    this.product.addProduct(newProduct)
      .subscribe((res: any) => {
        console.log("Post response:", res);
      });
    }
  //Put - update 
  updateProduct(id: number) 
  {
    const updateData = {
      title: "Updated Product",
      price: 575,
      description: "Updated Perfume",
      image: "https://in.images.search.yahoo.com/search/images?p=perfume+images&fr=mcafee&type=E210IN885G0&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F03%2F14%2F11%2F41%2Fperfume-2142824_1280.jpg#id=1&iurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F03%2F14%2F11%2F41%2Fperfume-2142824_1280.jpg&action=click",
      category: "updated"
  };
   this.product.updateProduct(id, updatedData)
      .subscribe((res: any) => {
        console.log("Put response:", res);
      });
  }
  //delete
  deleteProduct(id: number) {
    this.product.deleteProduct(id)
      .subscribe((res: any) => {
        console.log("Delete response:", res);
      });
}
}
