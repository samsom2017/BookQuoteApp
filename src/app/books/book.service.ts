import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './Book';

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
