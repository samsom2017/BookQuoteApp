import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service'; 
import { Books } from '../Book'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  standalone: true, // Ensure this is set if you're using standalone components
  imports: [FormsModule] // Include FormsModule here
})
export class EditBookComponent implements OnInit {
  book: Books = {
    id: 0,
    title: '',
    author: '',
    publishedDate: new Date(),
  };

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the book ID from the route parameters
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(+bookId).subscribe({
        next: (data: Books) => {
          this.book = data; // Set the book details to the variable
        },
        error: (err) => {
          console.error('Error fetching book details:', err);
        }
      });
    }
  }

  onSubmit(): void {
    this.bookService.updateBook(this.book).subscribe({
      next: () => {
        console.log('Book updated successfully');
        this.router.navigate(['/books']); // Navigate back to the book list
      },
      error: (err) => {
        console.error('Error updating book:', err);
      }
    });
  }
}




/*
// src/app/books/edit-book.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from './book.service'; // Ensure this path is correct
import { Books } from './Book'; // Correct import path

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  standalone: true,
  imports: [FormsModule] // Ensure FormsModule is imported here
})
export class EditBookComponent implements OnInit {
  book: Books = {
    id: 0,
    title: '',
    author: '',
    publishedDate: new Date(),
  };

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(+bookId).subscribe({
        next: (data: Books) => {
          this.book = data;
        },
        error: (err) => {
          console.error('Error fetching book details:', err);
        }
      });
    }
  }

  onSubmit(): void {
    this.bookService.updateBook(this.book).subscribe({
      next: () => {
        console.log('Book updated successfully');
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error('Error updating book:', err);
      }
    });
  }
}

*/