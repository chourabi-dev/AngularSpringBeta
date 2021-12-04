import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   
  

  constructor(private router:Router) { }

  ngOnInit(): void {

    //  this.router.navigateByUrl('/articles')


    this.router.navigate(['/articles',{ username:'chourabi taher', year:'2021', age:1900 }]);

  }





}
