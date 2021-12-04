import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username;
  id;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);

    this.username = this.route.snapshot.params.username;
    this.id = this.route.snapshot.params.id;
    
    
  }

}
