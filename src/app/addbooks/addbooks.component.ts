
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Added ReactiveFormsModule, FormBuilder, FormGroup, Validators
import { BookService } from '../books/book.service';
import { Books } from '../books/Book';

@Component({
  selector: 'app-addbooks',
  standalone: true,
  imports: [ReactiveFormsModule], // Ensure ReactiveFormsModule is imported
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, // Add FormBuilder injection
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form group and its controls
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishedDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: Books = {
        id: 0, // Initial id as per your Books model
        title: this.bookForm.value.title,
        author: this.bookForm.value.author,
        publishedDate: this.bookForm.value.publishedDate
      };

      this.bookService.addBook(newBook).subscribe({
        next: () => {
          console.log("Book added successfully");
          this.router.navigate(['/books']); // Redirect after successful submission
        },
        error: (err) => {
          console.error("Error adding book:", err);
        }
      });
    }
  }
}


















