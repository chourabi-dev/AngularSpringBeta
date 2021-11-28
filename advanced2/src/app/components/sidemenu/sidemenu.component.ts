import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  menu = [
    { title: 'Home page', url:'/home' },
    { title: 'Articles page', url:'/articles' },
    { title: 'About page', url:'/about' },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
