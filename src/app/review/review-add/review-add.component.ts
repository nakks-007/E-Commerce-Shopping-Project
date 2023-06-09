import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Review } from 'src/app/models/review';
import { addReviews } from '../store/action/review.actions';
import { ReviewState } from '../store/reducer/review.reducer';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})

export class ReviewAddComponent implements OnInit{

  constructor(private store: Store <ReviewState>) { }

  ngOnInit(): void { }

  addReview(reviewName : string) {
    const review = new Review();
    review.suggestion = reviewName;
    this.store.dispatch(addReviews(review));

  }

}
