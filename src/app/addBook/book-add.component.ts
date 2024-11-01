import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  bookForm: FormGroup;
  isLoading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private bookService: BookService) {
    // Initialize the form with fields for book properties
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      genre: ['', Validators.required],
      publishedYear: ['', [Validators.required, Validators.min(1000), Validators.max(new Date().getFullYear())]],
    });
  }

  // Submit form data to the backend
  onSubmit() {
    if (this.bookForm.valid) {
      this.isLoading = true;
      this.successMessage = null;
      this.errorMessage = null;

      // Send HTTP POST request to backend
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: (response) =>{
            this.isLoading = false;
            this.successMessage = 'Book added successfully';
            this.bookForm.reset();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Failed to add book. Please try again later.';
        },
      });
    }
  }
}
