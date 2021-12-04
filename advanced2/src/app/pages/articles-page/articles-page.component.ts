import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void { 
    const params = this.route.snapshot.params;
    
    console.log(params);
    
  }

}
