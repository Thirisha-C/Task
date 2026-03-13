import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  imports: [NgForOf ,FormsModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.css',
})
export class Reviews {
  reviewText = ""; 
  reviews: string[] = [];
  addReview()
  {
    if(this.reviewText)
    {
      this.reviews.push(this.reviewText); //push will add the new review in the arr
      this.reviewText = ""; // inputbox clear
  }
}
}
