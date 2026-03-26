import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})

export class Reviews {

  constructor(private route: ActivatedRoute) {}

  reviews: any = {
    1: ['super!', 'Nice quality'],
    2: ['Long lasting'],
    3: ['Shoes are comfortable'],
    4: ['good quality'],
    10: ['Bottle useful']
  };
  id: number = 0;
  review: string[] = [];

  ngOnInit() {
    // this.route.root.firstChild?.paramMap.subscribe(params => {
    this.route.parent?.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.review = this.reviews[this.id] || ['No review'] 
    });
  }
}