import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';
import { Order } from '../models/order.class';
import { ICustomer } from '../models/customer.model';
import { IOrderLine } from '../models/orderline.model';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {
  public orderLine: IOrderLine;
  public order: Order;
  public customer: ICustomer;

  constructor() {
    this.order = new Order();
    this.orderLine = {
      productId: 0,
      quantity: 0
    };
    this.customer = {
      name: '',
      surname: '',
      email: '',
      documentation: '',
      phone: 0,
      shippingAddress: ''
    };
  }

  getOrder(): Order {
    return this.order;
  }

  // CUSTOMER
  
  async addCustomer(customer: ICustomer) {
    this.customer.name = customer.name;
    this.customer.surname = customer.surname;
    this.customer.email = customer.email;
    this.customer.documentation = customer.documentation;
    this.customer.phone = customer.phone;
    this.customer.shippingAddress = customer.shippingAddress;

    await console.log('all done');
    await this.addCustomerToOrder(this.customer);
  }
  private async addCustomerToOrder(customer: ICustomer) {
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

  async addOrderLine(product: IProduct, quantity: number) {
    console.log('On addOrderLine');
    // if (quantity > 0) {
    console.log('if product stock');
    if(product.stock >= quantity) {
      this.orderLine.productId = product.id;
      this.orderLine.quantity = quantity;
      console.log('all added');
      // } else {
      //   return 'Not that much stock dude'
      // }

      this.addOrderLineToOrder(this.orderLine);
      console.log(this.orderLine);
    };
  }
  private calculatePrize(price: number, quantity: number): number {
    let totalPrize = price * quantity;
    return totalPrize;
  }
  private addOrderLineToOrder(orderLine: IOrderLine) {
    this.order.orderLines.push(orderLine);
  }

  getOrderLines() {
    return this.order.orderLines;
  }
  
}
