import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductDetalleComponent } from './product-detalle/product-detalle.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
    
  },
  {
    path: 'product/:id',
    component: ProductDetalleComponent
    
  },
  {
    path: 'customer',
    component: CustomerFormComponent
    
  },
  {
    path: 'thanksyou',
    component: ThankYouComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
