import { createAction, props } from '@ngrx/store';
import { Review } from 'src/app/models/review';

export const addReviews = createAction(

  //[Review] in square bracket means, it has the ability to change a state of an action
  //Name of the action, that we are going to create
  
  '[Review] Add Reviews',
  (review:Review)=>({ review })
);




