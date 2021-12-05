import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NabvarComponent } from './nabvar/nabvar.component';
import { NewTpesComponent } from './new-tpes/new-tpes.component';
import { HttpCallComponent } from './http-call/http-call.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    NabvarComponent,
    NewTpesComponent,
    HttpCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
