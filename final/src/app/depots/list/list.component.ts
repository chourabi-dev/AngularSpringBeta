import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  depots:any[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getListDepots().toPromise().then((res:any)=> this.depots = res );
  }

}
