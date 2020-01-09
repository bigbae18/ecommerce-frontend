import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../commerce.service';
import { ICustomer } from '../../models/customer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../models/order.class';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  public order: Order;
  public order$: Observable<Order>;
  public error: string = '';
  public customer: ICustomer;
  public customerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    documentation: new FormControl('', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]),
    shippingAddress: new FormControl('', [Validators.required]),
    phone: new FormControl(0, [Validators.required, Validators.maxLength(9), Validators.minLength(9)])
  });

  constructor(private commerceService: CommerceService, private router: Router) { }

  ngOnInit() {
    this.order$ = this.commerceService.getOrder$();
    this.order$.subscribe({
      next: order => this.order = order
    })
    console.log(this.order$, this.order);
  }



  submit() {
    if (this.customerForm.valid) {
      this.customer = {
        name: this.customerForm.get('name').value,
        surname: this.customerForm.get('surname').value,
        email: this.customerForm.get('email').value,
        documentation: this.customerForm.get('documentation').value,
        shippingAddress: this.customerForm.get('shippingAddress').value,
        phone: this.customerForm.get('phone').value
      }
      this.commerceService.addCustomer$(this.customer);
      this.router.navigate(['/thanksyou']);
    } else {
      this.router.navigate(['/customer', this.router.getCurrentNavigation()]);
    }
  }
}
