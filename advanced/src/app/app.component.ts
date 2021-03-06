import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advanced';



  formData = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl('',Validators.required),
      code: new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
    }),
    phone: new FormControl('',[Validators.required,Validators.maxLength(8)]),
    
    
  });


  addEmployee(){
    console.log("added !!!"); 
    const value = this.formData.value; 
    console.log(value);
    
    console.log(this.formData);
    
    
  }

  /********************************steppers******************************** */

  /*stepperForm = new FormGroup({
    stepOne : new FormGroup({
      fullname: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
    }),

    stepTwo : new FormGroup({
      city: new FormControl('',Validators.required),
      code: new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
    })
  }) 
  index = 0;


  previous(){
    this.index--;
  }

  next(){
    this.index++;
  }


  addEmployee(){
    console.log("added !!!"); 
    const value = this.stepperForm.value; 
    console.log(value);
    
    console.log(this.stepperForm);
    
    
  }*/
}
