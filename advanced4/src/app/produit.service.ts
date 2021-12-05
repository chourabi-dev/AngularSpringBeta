import { Injectable } from '@angular/core';
import { Product } from './models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private products:Product[] = [];

  constructor() { }


  addProduct(data:Product){
    this.products.push(data);
  }

  getNextId(){
    return this.products.length;
  }

  getList(){
    return this.products;
  }
}
