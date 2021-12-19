import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getListDepots().toPromise().then((res:any)=> this.depots = res );

    this.initForm();
  }


  initForm(){
    this.api.findProductById( this.route.snapshot.params.id ).toPromise().then((res:any)=>{
      this.formData.setValue(res);
      
    })
  }

  saveData(){ 
    this.api.updateProductById( this.route.snapshot.params.id ,this.formData.value).toPromise().then((res:any)=>{
      if (res.success) {
        this.succMSG='updated successfully';
      }else{
        this.errMSG='Something went wrong.';
      }
      
    }).catch((err)=>{
      this.errMSG='Something went wrong.';
      
    })
  }
}
