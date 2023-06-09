import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

constructor(private cartService: CartService, public rtr : Router) {}

ngOnInit(): void{}

getCart() {
return this.cartService.get()
}

}
