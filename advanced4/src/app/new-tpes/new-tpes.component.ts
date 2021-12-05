import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-tpes',
  templateUrl: './new-tpes.component.html',
  styleUrls: ['./new-tpes.component.css']
})
export class NewTpesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*let res;

    setTimeout(() => {
      res = 1+1; // delay 0.5s
    }, 500);

    res++;

    console.log(res);*/

    /*this.goToStationA().then((res)=>{
      console.log(res);

      this.goToStationB(res).then((res2)=>{
        console.log(res2);
        
      })
      
    }).catch((err)=>{
      console.log(err);
      
    })*/


    this.trackMyLocation().subscribe((res)=>{
      console.log(res);
      
    },(err)=>{
      console.log(err);
      
    })
    
     
  }





/**
 * 
  async initCalls(){
    let res1 = await this.goToStationA();
    let res2 = await this.goToStationB(res1);


    console.log(res2);
    
    
  }



  goToStationA(){
    let promise = new Promise((resolve,reject)=>{

      // ...

      setTimeout(() => {
       // reject( { success:false, message:'some reason' } );
       resolve( { success:true  } );
      }, 5000);
    });

    return promise;
  }


  goToStationB(data){
    let promise = new Promise((resolve,reject)=>{

      // ...

      setTimeout(() => {
       // reject( { success:false, message:'some reason' } );
       resolve( { success:true, message:"from station b"  } );
      }, 3000);
    });

    return promise;
  }
  
 */



  /***************************observable******************** */


  trackMyLocation(){

    let observable = new Observable((observer)=>{
      
      navigator.geolocation.watchPosition((res)=>{
        observer.next(res);
      },(err)=>{
        observer.error(err);
      })

    });
 
    return observable;

  }

}
