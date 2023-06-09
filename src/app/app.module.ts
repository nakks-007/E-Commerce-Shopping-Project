import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ReviewViewComponent } from './review/review-view/review-view.component';
import { ReviewAddComponent } from './review/review-add/review-add.component';
import { reviewFeatureKey, reviewReducer } from './review/store/reducer/review.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    AboutComponent,
    FranchiseComponent,
    ReviewViewComponent,
    ReviewAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(reviewFeatureKey, reviewReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
