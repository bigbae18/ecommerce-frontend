import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { IndexComponent } from './index/index.component';
import { CommerceComponent } from './commerce.component';
import { RouterModule } from '@angular/router';

import { MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [IndexComponent, CommerceComponent],
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
