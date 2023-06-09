import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { CactivateGuard } from './cactivate.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FranchiseComponent } from './franchise/franchise.component';

const routes: Routes = [
  {path: '', component: BooksComponent, canActivate:[CactivateGuard] },
  {path: 'cart', component: CartComponent, canActivate:[CactivateGuard]},
  {path: '', children: [
    {path: 'cart/about', component: AboutComponent},
    {path: 'cart/about/franchise', component: FranchiseComponent}
  ]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: "**", redirectTo: 'login'}
  // {path: '', component: },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
