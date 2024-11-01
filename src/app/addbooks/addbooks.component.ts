import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../books/book.service';
import { Books } from '../books/Book';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-addbooks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addbooks.component.html',
  styleUrl: './addbooks.component.css'
   
})
export class AddbooksComponent {

  book: Books = {
    id: 0, // Set id to a number as required by the Books model
    title: '',
    author: '',
    publishedDate:new Date()
  };
 
  

  constructor(private bookService: BookService, private router: Router) {}
  
 
 

  onSubmit(): void {
    this.bookService.addBook(this.book).subscribe({
      next: () => {
        console.log("Book added successfully");
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error("Error adding book:", err);
      }
    });
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe(
      (addedBook) => {
        console.log('Book added:', this.book);
        // Refresh or update the book list in the frontend here
      },
      (error) => {
        console.error('Error adding book:', error);
      }
    );
  }
  

}

/*

// create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  book = {
    title: '',
    author: '',
    publishedDate: ''
  };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(): void {
    this.bookService.addBook(this.book).subscribe({
      next: () => {
        console.log("Book added successfully");
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error("Error adding book:", err);
      }
    });
  }
}




// add-books.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Books } from '../Book';

@Component({
    selector: 'app-add-books',
    templateUrl: './add-books.component.html',
})
export class AddBooksComponent {
    book: Books = {
        id: 0,
        title: '',
        author: '',
        publishedDate: new Date()
    };

    constructor(private bookService: BookService, private router: Router) { }

    onSubmit(): void {
        this.bookService.addBook(this.book).subscribe({
            next: () => {
                console.log("Book added successfully");
                this.router.navigate(['/books']);
            },
            error: (err) => {
                console.error("Error adding book:", err);
            }
        });
    }
}
















constructor(private bookService: BookService, private router: Router) { }

    onSubmit(): void {
        this.bookService.addBook(this.book).subscribe({
            next: () => {
                console.log("Book added successfully");
                this.router.navigate(['/books']);
            },
            error: (err) => {
                console.error("Error adding book:", err);
            }
        });
    }
*/