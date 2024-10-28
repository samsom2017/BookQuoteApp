import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogicComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { QuotesComponent } from './quotes/quotes.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LogicComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'quotes',
    component: QuotesComponent,
  },
];