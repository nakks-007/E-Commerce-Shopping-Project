import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Review } from 'src/app/models/review';
import { selectReviews } from '../store/selector/review.selectors';

@Component({
  selector: 'app-review-view',
  templateUrl: './review-view.component.html',
  styleUrls: ['./review-view.component.css'],
})

export class ReviewViewComponent implements OnInit {

  //$ indicates it is an Observable Property, Observable is used to Transmit data between two components
  reviews$!: Observable <Review []>;

  //Store type declared here is taken from NGRX Store
  constructor(private store : Store) {
    this.reviews$ = this.store.pipe ( select(selectReviews) )
  }

  ngOnInit(): void {}
}
