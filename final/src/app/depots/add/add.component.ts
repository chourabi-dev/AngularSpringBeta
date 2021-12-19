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

  formData = new FormGroup({
    name: new FormControl('',Validators.required)
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  saveData(){ 
    this.api.addNewDepot(this.formData.value).toPromise().then((res:any)=>{
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
