import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsImage:Product[] = [];

  constructor(private ps:ProduitService) { }

  ngOnInit(): void {
    console.log("on init");
    
    this.initData();
  }

  initData(){
    this.productsImage = this.ps.getList();
  }

}
