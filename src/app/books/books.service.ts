import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'Step-By-Step Angular Routing',
        author: 'Nishu Goel',
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41WCabHQ5yL._SX331_BO1,204,203,200_.jpg',
        price: 900,
      },
  
      {
        name: 'Mastering Angular Reactive Forms',
        author: 'Fanis Prodromou',
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41zMpLCH9iL._SX331_BO1,204,203,200_.jpg',
        price: 800,
      },
  
      {
        name: 'Journey to Angular Development',
        author: 'Sukesh Marla ',
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41Jis0VFpSL._SX404_BO1,204,203,200_.jpg',
        price: 600,
      },
  
      {
        name: 'Angular for Beginners',
        author: 'Bharath Raj Kumaar P S',
        image:
          'https://rukminim1.flixcart.com/image/416/416/xif0q/book/i/e/z/angular-for-beginners-original-imagjvmjqjeggzvw.jpeg?q=70',
        price: 900,
      },
  
      {
        name: 'Learn Angular in 24 Hours',
        author: 'Lakshmi Kamala Thota',
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51yeSub2miL._SX381_BO1,204,203,200_.jpg',
        price: 650,
      },
  
      {
        name: 'Object Oriented Programming with Angular',
        author: 'Balram Morsing Chavan',
        image:
          'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51GEeqoJLhL._SX404_BO1,204,203,200_.jpg',
        price: 850,
      },
    ];
  }
}
