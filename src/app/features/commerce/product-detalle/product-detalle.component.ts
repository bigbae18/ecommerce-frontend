import { Component, OnInit } from '@angular/core';
import listProducts from 'src/assets/json/products.json';


@Component({
  selector: 'app-product-detalle',
  templateUrl: './product-detalle.component.html',
  styleUrls: ['./product-detalle.component.css']
})
export class ProductDetalleComponent implements OnInit {
  Products: any = listProducts;
  constructor() { }
  
  ngOnInit() {
  
  }

}
