import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../books/Book';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSig = signal<UserInterface | undefined | null>(undefined);

  
  //private apiUrl = 'http://l:5134/api/books'; 
  private apiUrl = environment.apiUrl ;
     constructor(private http: HttpClient) { }

     addBook(book: Books): Observable<Books> {
       return this.http.post<Books>(`${this.apiUrl}/api/books`, book);
     }
     initializeAuthState() {
      const token = localStorage.getItem('token');
      if (token) {
        this.currentUserSig.set({
          accessToken: token,
          tokenType: '',
          expiresIn: '',
          refreshToken: ''
        });
      }
    }
}

