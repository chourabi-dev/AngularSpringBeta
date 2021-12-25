import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  authForm = new FormGroup({
    username : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    cindId : new FormControl('',Validators.required) 
    
  })


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  createUser(){
    let data = this.authForm.value;

    data.role = [this.authForm.value.role]
    console.log(data);
    
    this.api.createUser(data).toPromise().then((res:any)=>{
      console.log(res);

      if (res.success === true) {
        this.router.navigateByUrl('/signin');
      }
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }

}
