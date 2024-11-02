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










/* import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BookService {
 

  private url = "http://localhost:5134/api/books/";

  constructor(private http: HttpClient) { }


  getBooks() {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.getJwt()!}`,
    });
    const books = this.http.get<Books[]>(this.url, { headers: headers });
    return books;
  }
 
  // Method to get a book by its ID
  getBookById(id: number): Observable<Books> {
    return this.http.get<Books>(`${this.url}/${id}`);
  }
  updateBook(book: Books): Observable<Books> {
    return this.http.put<Books>(`${this.url}/${book.id}`, book);
  }
 
  addBook(book: Books): Observable<Books> {
    return this.http.post<Books>(this.url, book);
}


  deleteBook(id: number) {
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.getJwt()!}`,
    });
    const books = this.http.delete(this.url+`${id}`, { headers: headers });
    return books;
  }

  private getJwt() {
    const auth_token = window.localStorage.getItem("token");
    return auth_token;
  } 
}
 */