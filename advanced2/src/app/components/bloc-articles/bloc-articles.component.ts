import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-articles',
  templateUrl: './bloc-articles.component.html',
  styleUrls: ['./bloc-articles.component.css']
})
export class BlocArticlesComponent implements OnInit {

  articles:any[] = [
    { title:"angular spring", content:"this is a random content", nbrLikes: 18, didLike: false },
    { title:"Fi test", content:"this is a random content", nbrLikes: 10, didLike: true },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }


  articleDidUpdate(data){
    console.log(data);
    
    console.log("did update");
    
  }

}
