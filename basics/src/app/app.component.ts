import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*title="Welcome to angular training";  
  username:string="chourabi taher";



  year:number=2021;
  isNew:boolean = true;
  today = new Date();

  

  //employees:Employee[] = [ new Employee("chourabi taher",'tchourabi@gmail.com','1008 somewhere on earth') ];

    employees:any[] = [
      { year:2006, fullname:'chourabi taher', email:'tchourabi@gmail.com', address:'somewhere ' },
      { year:2010, fullname:'chourabi taher', email:'tchourabi@gmail.com', address:'somewhere ' },
      { year:2015, fullname:'chourabi taher', email:'tchourabi@gmail.com', address:'somewhere ' },
      { year:2020, fullname:'chourabi taher', email:'tchourabi@gmail.com', address:'somewhere ' },
      { year:2020, fullname:'chourabi taher', email:'tchourabi@gmail.com', address:'somewhere ' },
      { year:2020, fullname:'chourabi taher', email:'tchourabi@gmail.com', address:'somewhere ' },
      
      
    ]*/


    /******************************************************** */
  

    /*gallery = [
      'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
      'https://mocah.org/uploads/posts/340193-Digital-Art-Synthwave-Retrowave-Vaporwave-Mountain-Night.jpg',
      'https://i.pinimg.com/originals/4c/85/63/4c8563317233c0308e7aff6da624d0b6.jpg'
    ]

    selectedIndex = 0;
    src= this.gallery[this.selectedIndex];

    message:string ="hello world, <strong>angulat tarining</strong>"*/
    
    //today = new Date();
    

    nbrClicks = 0;

    constructor(){}

    ngOnInit(): void {
      //this.initGallery();
      
    } 

    /*initGallery(){ 
        setInterval(()=>{
          this.selectedIndex+=1; 
           if ( this.selectedIndex == this.gallery.length) {
             this.selectedIndex = 0;
             this.src = this.gallery[this.selectedIndex];
           }else{
            this.src = this.gallery[this.selectedIndex];
           }
          
        },2000)

    }*/


    clickMe(){
      this.nbrClicks += 1 ;
      
    }

    x = '0px';
    y = '0px';


    mouseIsMoving(e:any){
      const x = e.clientX;
      const y = e.clientY;

      this.x = x+'px';
      this.y = y+'px';
      
      
      
    }
  

}
