import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:4000/product'
  private httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  getProducts() {
    
    return this.httpClient.get(this.url)
  }

  addProduct(title: string, description: string, price: number, category: number) {
    const body = {
      title: title,
      description: description,
      price: price,
      category: category
    }

    return this.httpClient.post(this.url, body)
  }
}