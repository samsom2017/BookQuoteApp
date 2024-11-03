// src/app/books/book.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from './Book'; // Correct import path

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:5134/api/books'; // Adjust to your API URL

  constructor(private http: HttpClient) {}

  // Fetch a single book by ID
  getBookById(id: number): Observable<Books> {
    return this.http.get<Books>(`${this.apiUrl}/${id}`);
  }

  // Add other methods like addBook, updateBook, deleteBook as needed
  addBook(book: Books): Observable<Books> {
    return this.http.post<Books>(this.apiUrl, book);
  }

  updateBook(book: Books): Observable<Books> {
    return this.http.put<Books>(`${this.apiUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.apiUrl);
  }
}








