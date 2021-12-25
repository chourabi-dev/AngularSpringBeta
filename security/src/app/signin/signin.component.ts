import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  authForm = new FormGroup({
    username : new FormControl('',Validators.required), 
    password : new FormControl('',Validators.required)  
    
  })


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  signin(){
    let data = this.authForm.value;

    data.role = [this.authForm.value.role]
    console.log(data);
    
    this.api.signin(data).toPromise().then((res:any)=>{
      console.log(res);

      if (res.accessToken != null) {

        localStorage.setItem('token',res.tokenType+' '+res.accessToken);

        this.router.navigateByUrl('/');
      }else{
        alert('wrong username or password.')
      }
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }


}
