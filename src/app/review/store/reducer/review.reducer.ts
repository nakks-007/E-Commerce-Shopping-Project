import { Action, createReducer, on } from '@ngrx/store';
import { Review } from 'src/app/models/review';
import * as ReviewActions from 'src/app/review/store/action/review.actions';

//'review' will be the name, we provide for our state. By declaring it to reviewFeatureKey
export const reviewFeatureKey = 'review';

export interface ReviewState {
  reviews:Review[];
}

export const initialState: ReviewState = {
  reviews:[]
};

export const reviewReducer = createReducer(
  //First Argument - initialState - The very first empty state, we provide at beginning
  //Second Argument - on() from ngrx store, for defining action for the state
  initialState,
  on(ReviewActions.addReviews, (state: ReviewState, {review})=> (
    {
      //... is called Spirit Operator - used to copy data from an Property
      ...state,
      reviews:[...state.reviews,review]
    }
  ))

);
