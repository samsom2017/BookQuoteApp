// src/app/books/book.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './Book'; // Correct import path
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  //private apiUrl = 'http://localhost:5134/api/books'; 
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  // Fetch a single book by ID
  getBookById(id: number): Observable<Books> {
    return this.http.get<Books>(`${this.apiUrl}/api/books/${id}`);
  }

  // Method to add a book with JWT token in headers
  addBook(book: Books): Observable<Books> {
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    // Create headers and include the Authorization token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Make the HTTP POST request with headers
    return this.http.post<Books>(`${this.apiUrl}/api/books`, book, { headers });
  }

  updateBook(book: Books): Observable<Books> {
    return this.http.put<Books>(`${this.apiUrl}/api/books/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/books/${id}`);
  }

  getBooks(): Observable<Books[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Books[]>(`${this.apiUrl}/api/books`, { headers });
  }
}








