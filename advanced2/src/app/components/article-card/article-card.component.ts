import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() title;
  @Input() content;
  @Input() nbrLikes:number;
  @Input()  didLike;

  @Input() didUpdate:any;

  constructor() { }

  ngOnInit(): void {
  
    
    
  }


  socialBtnInteract(){
    if (this.didLike) {
      this.nbrLikes--;
      
    }else{
      this.nbrLikes++;
    }
    
    this.didLike = ! this.didLike;

    this.didUpdate({success:true, id:15});
  }

}
