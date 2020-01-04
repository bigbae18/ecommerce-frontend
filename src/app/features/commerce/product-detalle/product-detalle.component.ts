import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommerceService } from '../commerce.service';


@Component({
  selector: 'app-product-detalle',
  templateUrl: './product-detalle.component.html',
  styleUrls: ['./product-detalle.component.css']
})
export class ProductDetalleComponent implements OnInit {
  product: IProduct;
  error: '';
  productToAdd: IProduct;
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private commerceService: CommerceService) { }
  
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  buyProduct(id: number) {
    console.log('inside buyproduct');
    this.productService.getProduct(id).subscribe({
      next: product => this.productToAdd = product,
      error: error => this.error = error,
      complete: () => this.commerceService.addOrderLine(this.productToAdd, 3)
    });
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: error => this.error = error
    })
  }
}
