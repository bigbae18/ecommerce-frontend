import { IOrderLine } from './orderline.model';
import { ICustomer } from './customer.model';

export class Order {
    orderLines: IOrderLine[];
    customer: ICustomer;
}