import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommerceService } from '../commerce.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-detalle',
  templateUrl: './product-detalle.component.html',
  styleUrls: ['./product-detalle.component.css']
})
export class ProductDetalleComponent implements OnInit {
  public product: IProduct;
  public error: '';
  public quantity = new FormGroup({
    quantity: new FormControl(1, [Validators.min(1), Validators.required])
  });

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private commerceService: CommerceService) { }
  
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  async attach(product: IProduct) {
    let quantity = Number(this.quantity.get('quantity').value);
    await this.commerceService.addOrderLine(product, quantity);
    await this.router.navigate(["/customer"]);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: error => this.error = error
    })
  }
}
