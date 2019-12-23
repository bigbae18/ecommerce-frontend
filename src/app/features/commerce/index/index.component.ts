import { Component, OnInit } from '@angular/core';
import listProducts from 'src/assets/json/products.json';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Products: any = listProducts;
  constructor() { }

  ngOnInit() {
  }

}
