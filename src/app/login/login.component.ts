
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserInterface } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LogicComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);


  form= this.fb.nonNullable.group({
    email:['',Validators.required],
    password: ['',Validators.required]
  });

  onSubmit(): void {
    const formData = this.form.value;

    this.http.post<UserInterface>('http://localhost:5134/login', formData)
      .subscribe((response) => {
        console.log('response', response.accessToken);
        localStorage.setItem('token', response.accessToken);
        this.authService.currentUserSig.set(response);
        this.router.navigateByUrl('/books');
      });
  }

}



/*
 fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    this.http
      .post<{ user: UserInterface }>(
        'https://api.realworld.io/api/users/login',
        {
          user: this.form.getRawValue(),
        }
      )
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/');
      });
  }

*/