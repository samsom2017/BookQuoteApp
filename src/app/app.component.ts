import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserInterface } from './user';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  [x: string]: any;
  authService = inject(AuthService);
  http = inject(HttpClient);
  router = inject(Router);


  isLoggedIn(){
    console.log("samson: " + this.authService.currentUserSig())
    return this.authService.currentUserSig() != null
  }

  
  ngOnInit(): void {
    this.authService.initializeAuthState();
      
  }
  
  logout(): void{
    this.authService.currentUserSig.set(null);
    console.log('logout');
    window.localStorage.removeItem("token");

    this.router.navigateByUrl('/');

  }
}



