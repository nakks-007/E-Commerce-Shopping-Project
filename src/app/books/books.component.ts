import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = []
  

  // Dependency Injection
  constructor(private booksService: BooksService, public rtr : Router) {
  }

  isShowing: boolean = true;

  LogOutUser() {
    localStorage.clear();
    this.rtr.navigate(["login"])
  }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

}
