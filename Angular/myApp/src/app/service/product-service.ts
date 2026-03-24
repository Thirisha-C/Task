import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient){}

  //Get(fetch data)
    getProducts()
    {
      return this.http.get("https://fakestoreapi.com/products");
        // return this.http.get('https://mocki.io/v1/0f0c1d5b-6c4d-4d4b-9d3e-6a2f2f4b8c01');
    }

    // Post(send data)
    addProduct(product: any)
    {
      return this.http.post("https://fakestoreapi.com/products", product);
    }

    //Update
    updateProduct(id: number, data: any)
    {
      return this.http.put(`https://fakestoreapi.com/products/${id}`, data);
    }

    //Delete
    deleteProduct(id: number)
    {
      return this.http.delete(`https://fakestoreapi.com/products/${id}`);
    }
} 
