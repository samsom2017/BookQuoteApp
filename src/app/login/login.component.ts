import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserInterface } from '../user';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LogicComponent {
toggleTheme() {
throw new Error('Method not implemented.');
}
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  private apiUrl = environment.apiUrl; 



  form= this.fb.nonNullable.group({
    email:['',Validators.required],
    password: ['',Validators.required]
  });
isDarkTheme: any;

onSubmit(): void {
  const formData = this.form.value;

  this.http.post<UserInterface>(`${this.apiUrl}/login`, formData).subscribe({
    next: (response) => {
      console.log('response', response.accessToken);
      localStorage.setItem('token', response.accessToken);
      this.authService.currentUserSig.set(response);
      this.router.navigateByUrl('/books');
    },
    error: (error) => {
      console.error('Login failed', error);
    }
  });
}

}










 