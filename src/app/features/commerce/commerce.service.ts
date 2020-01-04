import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Order } from '../models/order.class';
import { ICustomer } from '../models/customer.model';
import { IOrderLine } from '../models/orderline.model';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  public order: Order;
  public customer: ICustomer;
  public orderLine: IOrderLine;

  constructor() {
    this.order = new Order();
  }

  getOrder(): Order {
    return this.order;
  }

  // CUSTOMER
  
  addCustomer(customer: ICustomer) {
    this.customer.name = customer.name;
    this.customer.surname = customer.surname;
    this.customer.email = customer.email;
    this.customer.documentation = customer.documentation;
    this.customer.phone = customer.phone;
    this.customer.shippingAddress = customer.shippingAddress;

    this.addCustomerToOrder(this.customer);
  }
  private addCustomerToOrder(customer: ICustomer) {
    this.order.customer = customer;
  }
  getCustomer() {
    return this.customer
  }
  // ORDERLINES

  // newOrderLine(product: IProduct): OrderLineClass {
  //   return {
  //     product_id: product.id,
  //     quantity: 0
  //   }
  // }

  addOrderLine(product: IProduct, quantity: number) {
    this.orderLine.productId = product.id;
    if (product.stock >= quantity) {
      this.orderLine.quantity = quantity;
      this.calculatePrize(product.price, quantity);
    } else {
      return 'Not that much stock dude'
    }

    this.addOrderLineToOrder(this.orderLine);
  }
  private calculatePrize(price: number, quantity: number) {
    let totalPrize = price * quantity;
    this.orderLine.finalPrize = totalPrize;
  }
  private addOrderLineToOrder(orderLine: IOrderLine) {
    this.order.orderLines.push(orderLine);
  }

  getOrderLines() {
    return this.order.orderLines;
  }
  
}
