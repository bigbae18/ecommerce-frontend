import { Component, OnInit } from '@angular/core';
import { CommerceService } from '../commerce.service';
import { ICustomer } from '../../models/customer.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

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
    console.log(this.commerceService.getOrderLines());
  }

  async submit() {
    if (this.customerForm.valid) {
      this.customer.name = await this.customerForm.get('name').value;
      this.customer.surname = await this.customerForm.get('surname').value;
      this.customer.email = await this.customerForm.get('email').value;
      this.customer.documentation = await this.customerForm.get('documentation').value;
      this.customer.shippingAddress = await this.customerForm.get('shippingAddress').value;
      this.customer.phone = await this.customerForm.get('phone').value;
      await this.attach(this.customer);
    } else {
      this.router.navigate(['/customer', this.router.getCurrentNavigation()]);
    }
  }

  private async attach(customer: ICustomer) {
    await this.commerceService.addCustomer(customer);
    await this.router.navigate(['/thanksyou']);
  }
}
