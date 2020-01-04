import { Component, OnInit } from '@angular/core';
import listProducts from 'src/assets/json/products.json';
import { CommerceService } from '../commerce.service';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products: IProduct[];
  error = '';

  constructor(private productService: ProductService,
    private commerceService:CommerceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    return this.productService.getProducts().subscribe({
      next: products => this.products = products,
      error: error => this.error = error
    })
  }
  
}
