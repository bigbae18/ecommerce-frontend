import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { IndexComponent } from './index/index.component';
import { CommerceComponent } from './commerce.component';
import { RouterModule } from '@angular/router';

import { MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { ProductDetalleComponent } from './product-detalle/product-detalle.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [IndexComponent, CommerceComponent, ProductDetalleComponent, CustomerFormComponent, ThankYouComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    RouterModule,

    
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    CommerceComponent
   
  ]
})
export class CommerceModule { }
