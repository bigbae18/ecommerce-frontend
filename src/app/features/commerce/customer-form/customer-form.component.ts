import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../commerce.service';
import { ICustomer } from '../../models/customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: ICustomer;

  constructor(private commerceService: CommerceService) { }

  ngOnInit() {
    console.log(this.commerceService.getOrderLines);
  } 

  submitForm() {
    this.customer.documentation;
  }
}
