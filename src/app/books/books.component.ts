import { Component, inject, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { HttpClient } from '@angular/common/http';
import { Books } from './Book';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [ RouterModule, CommonModule], 
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
    books: Books[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      //console.log("samson", this.books);

    });
  }
  
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    });
  }
  addBook(newBook:Books): void {
    this.bookService.addBook(newBook).subscribe({
      next: (addedBook) => {
        // Add the newly added book to the books array
        this.books.push(addedBook);
      },
      error: (err) => {
        // Handle the error (e.g., show a notification or log it)
        console.error('Error adding book:', err);
      }
    });
  }

  

}






/*
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.id !== id);
    });
  }
}




*/
