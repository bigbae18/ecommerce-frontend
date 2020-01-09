import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../commerce.service';
import { Order } from '../../models/order.class';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  public order: Order;
  public order$: Observable<Order>;
  public product: IProduct;

  constructor(private commerceService: CommerceService, private productService: ProductService) { }

  ngOnInit() {
    this.order$ = this.commerceService.getOrder$();
    this.order$.subscribe({
      next: order => this.order = order
    });
    this.productService.getProduct(this.order.orderLines[0].productId).subscribe({
      next: prod => this.product = prod
    });
  }

}
