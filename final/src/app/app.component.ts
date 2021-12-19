import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';

  menus:any[] = [
    { title:"Depots", icon:"fas fa-warehouse" , link:"/depots" },
    { title:"Products", icon:"fas fa-box" , link:"/products" },
    { title:"Clients", icon:"fas fa-users" , link:"/clients" },
    
    
    
  ];
}
