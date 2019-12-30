import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductDetalleComponent } from './product-detalle/product-detalle.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
    
  },
  {
    path: 'product/{id}',
    component: ProductDetalleComponent
    
  },
  {
    path: 'customer',
    component: ProductDetalleComponent
    
  },
  {
    path: 'thanksyou',
    component: ProductDetalleComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
