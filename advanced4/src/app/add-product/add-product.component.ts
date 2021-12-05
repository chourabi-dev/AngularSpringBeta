import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product-model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

 

  formData = new FormGroup({
    name: new FormControl('',Validators.required),
    qunatity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    
  })

  successMsg="";

  constructor(private productsService:ProduitService) { }

  ngOnInit(): void {
  }
  add(){
    const data = this.formData.value;

    console.log(data);

    let p:Product = { id:this.productsService.getNextId(), name:data.name, qunatity:data.qunatity, price:data.price };

    this.productsService.addProduct(p);

    this.successMsg='Product addedd successfully';
    
  }
}
