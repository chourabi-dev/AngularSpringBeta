import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = null;
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getUserInfo().toPromise().then((res)=>
    {
      console.log(res);
      this.user = res;
      
    }).catch((err)=>{
      localStorage.clear();
      this.router.navigateByUrl('/signin');
    })
  }

}
