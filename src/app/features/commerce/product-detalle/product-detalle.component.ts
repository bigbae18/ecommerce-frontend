import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../models/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommerceService } from '../commerce.service';
import { catchError, tap, map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../models/order.class';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-detalle',
  templateUrl: './product-detalle.component.html',
  styleUrls: ['./product-detalle.component.css']
})
export class ProductDetalleComponent implements OnInit {

  public order: Order;
  public order$: Observable<Order>;
  public product: IProduct;
  public error: string = '';
  public quantity = new FormGroup({
    quantity: new FormControl(1, [Validators.min(1), Validators.required])
  });

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private commerceService: CommerceService) { }
  
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    };
    this.order$ = this.commerceService.getOrder$();
    this.order$.subscribe({
      next: order => this.order = order
    });
    
  }

  attach(product: IProduct) {
    let quantity = Number(this.quantity.get('quantity').value);
    this.productService.getProduct(product.id).subscribe({
      next: product => {
        this.commerceService.addOrderLine$(product, quantity)
      },
      error: err => this.error = err
    });
    this.order$.subscribe({
      next: order => {
        if (order.orderLines.length >= 1) {
          this.router.navigate(['/customer'])
        }
      }
    })
  }  
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: error => this.error = error
    })
  }
}
