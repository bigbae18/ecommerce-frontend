import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommerceModule } from '../features/commerce/commerce.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommerceModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
    
  ],
  exports: [HeaderComponent, MainComponent, FooterComponent]
})
export class CoreModule { }
