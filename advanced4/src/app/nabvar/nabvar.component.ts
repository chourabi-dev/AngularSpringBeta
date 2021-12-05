import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product-model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {

  
  productsImage :Product[] = []

  constructor(private ps:ProduitService) { }

  ngOnInit(): void {
    this.productsImage = this.ps.getList();
  }

}
