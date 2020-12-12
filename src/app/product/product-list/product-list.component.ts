import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []
  service: ProductService
  constructor(service: ProductService) {
    this.service = service
  }

  ngOnInit(): void {
    const observable = this.service.getProducts()
    observable.subscribe(response => {
      console.log(response)
      
      if (response['status'] == 'success') {
        this.products = response['data']
      }
    })
  }

}