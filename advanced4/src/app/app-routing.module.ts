import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path:'', component:ProductsComponent },
  { path:'add', component:AddProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
