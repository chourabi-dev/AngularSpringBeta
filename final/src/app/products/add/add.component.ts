import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  succMSG='';
  errMSG='';
/**
 * 	private String name;
	private int quantity;
	private float price;
	private long depot;
 */
  depots:any[] = [];

  formData = new FormGroup({
    name: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    depot: new FormControl('',Validators.required),
    

  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getListDepots().toPromise().then((res:any)=> this.depots = res );
  }

  saveData(){ 
    this.api.addNewProduct(this.formData.value).toPromise().then((res:any)=>{
      if (res.id) {
        this.succMSG='Added successfully';
      }else{
        this.errMSG='Something went wrong.';
      }
      
    }).catch((err)=>{
      this.errMSG='Something went wrong.';
      
    })
  }
}
