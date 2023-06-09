import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReview from '../reducer/review.reducer';

export const selectReviewState = createFeatureSelector <fromReview.ReviewState> (
    fromReview.reviewFeatureKey
)

//Selector called 'selectReviews' will fetch data from property called reviews
export const selectReviews = createSelector(
    selectReviewState, 
    (state:fromReview.ReviewState) => state.reviews
)