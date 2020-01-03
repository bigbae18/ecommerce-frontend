import { Component, OnInit } from '@angular/core';
import listProducts from 'src/assets/json/products.json';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  Products: any = listProducts;
  constructor() { }

  ngOnInit() {
  }

}
