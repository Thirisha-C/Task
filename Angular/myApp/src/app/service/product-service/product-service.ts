import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-service',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-service.html',
  styleUrl: './product-service.css',
})
export class ProductService implements OnInit {
  products: any[] = [];
  newTitle = '';
  newPrice: number =0;
  constructor(private product: Product) {}
  ngOnInit(){
    this.loadProducts();
  }
  //Get
  loadProducts() {
    this.product.getProducts()
      .subscribe((data: any) => {
        console.log(data);
        this.products = data;
      },
      //error handling
      (err) =>{
        console.log("Loading Products:", err);
        alert("Failed to load products!");
      }
    );
  }

  //Post
  addData() {
    const newProduct =
    {
      title: this.newTitle,
      price: this.newPrice,
      description: "Perfume",
      image: "https://cdn.pixabay.com/photo/2017/03/14/11/41/perfume-2142824_1280.jpg",
      category: "perfume"
    };
    this.product.addProduct(newProduct)
      .subscribe((response: any) => {
        this.products.push(response);
        this.newTitle = '';
        this.newPrice = 0;
      },
    //error handling
      (err) =>{
        console.log("Adding Products:", err);
        alert("Unable to add product!");
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
   this.product.updateProduct(id, updateData)
      .subscribe((response: any) => {
        const index = this.products.findIndex(p => p.id === id);
        if(index !== -1)
          this.products[index] = response;
            },
          //error handling
      (err) =>{
        console.log("Updating Products:", err);
        alert("Update Failed!");
      });
  }
  //delete
  deleteProduct(id: number) {
    this.product.deleteProduct(id)
      .subscribe(() => {
        this.products = this.products.filter(p => p.id!== id)
      },
    //error handling
      (err) =>{
        console.log("Deleting Products:", err);
        alert("Unable to Delete!");
      });
}
}
