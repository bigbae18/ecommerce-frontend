import { Injectable, ErrorHandler } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Order } from '../models/order.class';
import { ICustomer } from '../models/customer.model';
import { IOrderLine } from '../models/orderline.model';
import { Observable, throwError, Subject, onErrorResumeNext, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {
  public orderLine: IOrderLine;
  public order: Order;
  public order$: BehaviorSubject<Order>;
  public customer: ICustomer;
  public postUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.order = new Order();
    this.order$ = new BehaviorSubject<Order>(this.order);   
    
  }

  getOrder$(): Observable<Order> {
    return this.order$.asObservable();
  }

  // CUSTOMER
  
  addCustomer$(customer: ICustomer) {
    this.order.customer = customer;
    this.order$.next(this.order);
  }

  addOrderLine$(product: IProduct, quantity:number) {
    if (product.stock >= quantity) {

      this.order.orderLines.push({
          productId: product.id,
          quantity: quantity
        });

      this.order$.next(this.order);

      let finalPrice = this.calculatePrize(product.price, quantity);

      this.order.totalPrice = finalPrice;

      this.order$.next(this.order);
    }  else {
      throwError('Not enough stock of that product!');
    }
  }
  private calculatePrize(price: number, quantity: number): number {
    let totalPrize = price * quantity;
    return totalPrize;
  }
  
}
