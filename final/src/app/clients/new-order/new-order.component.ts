import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {


  products:any[] = [];

  orders = [];

  infoMessage='';

  addProductForm = new FormGroup({
    product: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    
  })
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getListProducts().toPromise().then((res:any)=> this.products = res );
  }


  addProduct(){
    let data = this.addProductForm.value;
    data.client = this.route.snapshot.params.id;

    this.orders.push(data);

    this.addProductForm.reset();

    console.log(this.orders);
    

  }


  validateOrder(){
    this.api.validateOrder(this.orders).toPromise().then((res:any)=>{
      console.log(res);
      if (res.success) {
        this.infoMessage = res.message;
      }
      
    })
  }
}
