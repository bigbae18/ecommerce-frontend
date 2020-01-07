import { Component, OnInit } from '@angular/core';
import listProducts from 'src/assets/json/products.json';
import { CommerceService } from '../commerce.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  Products: any = listProducts;
  constructor(private commerceService: CommerceService) { }

  ngOnInit() {
    console.log(this.commerceService.getCustomer());
    console.log(this.commerceService.getOrderLines());
    console.log(this.commerceService.getOrder());
  }

}
