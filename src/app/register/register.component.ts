import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserInterface } from '../user';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})

export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);
  
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {

    const formData = this.form.value;

    this.http.post('http://localhost:5134/register', formData)
      .subscribe({
        next: (response) => {  
          this.router.navigateByUrl('/');
          console.log('User registered successfully:', response)
        },
        error: (error) => console.error('Registration error:', error)
      });

    // this.http
    //   .post<{ user: UserInterface }>('https://api.realworld.io/api/users', {
    //     email: this.form.get("email"),
    //     password: this.form.get("password")
    //   })
    //   .subscribe((response) => {
    //     console.log('response', response);

    //     localStorage.setItem('token', response.user.token);
    //     this.authService.currentUserSig.set(response.user);
    //     this.router.navigateByUrl('/');
    //   });
    
    }
}



/*

 fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.http
      .post<{ user: UserInterface }>('https://api.realworld.io/api/users', {
        user: this.form.getRawValue(),
      })
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/');
      });
  }
*/