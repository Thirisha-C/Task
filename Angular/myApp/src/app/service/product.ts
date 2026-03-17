import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http: HttpClient){}
  //Get(fetch data)
    getProducts()
    {
      return this.http.get("https://fakestoreapi.com/products");
    }
    // Post(send data)
    addProduct(product: any)
    {
      return this.http.post("https://fakestoreapi.com/products", product);
    }
    updateProduct(id: number, data: any)
    {
      return this.http.put(`https://fakestoreapi.com/products${id}`, data);
    }
    deleteProduct(id: number)
    {
      return this.http.delete(`https://fakestoreapi.com/products${id}`);
    }
}
