import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { IndexComponent } from './index/index.component';
import { CommerceComponent } from './commerce.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ProductDetalleComponent } from './product-detalle/product-detalle.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ProductService } from './product.service';
import { CommerceService } from './commerce.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [IndexComponent, CommerceComponent, ProductDetalleComponent, CustomerFormComponent, ThankYouComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    RouterModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    CommerceService
  ],
  exports:[
    CommerceComponent
  ]
})
export class CommerceModule { }
