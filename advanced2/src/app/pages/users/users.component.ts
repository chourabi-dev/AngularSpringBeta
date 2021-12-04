import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    { id:15, username:"chourabi taher" },
    { id:16, username:"test user" },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
