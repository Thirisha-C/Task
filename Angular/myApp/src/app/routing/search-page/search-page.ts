import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage implements OnInit
{
  query: string = '';
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit()
  {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.query = params['q'];
    });
  }
}