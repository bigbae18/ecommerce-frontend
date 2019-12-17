import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommerceModule } from '../features/commerce/commerce.module';



@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommerceModule
  ],
  exports: [HeaderComponent, MainComponent, FooterComponent]
})
export class CoreModule { }
