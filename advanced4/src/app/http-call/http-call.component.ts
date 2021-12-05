import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent implements OnInit {

  users:any[] = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getUsersList().toPromise().then((res:any[])=>{
      console.log(res);

      this.users = res;
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }

}
