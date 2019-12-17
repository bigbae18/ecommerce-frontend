import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { IndexComponent } from './index/index.component';
import { CommerceComponent } from './commerce.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [IndexComponent, CommerceComponent],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    RouterModule
  ]
})
export class CommerceModule { }
