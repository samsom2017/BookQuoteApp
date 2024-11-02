import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogicComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { QuotesComponent } from './quotes/quotes.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AddbooksComponent } from './addbooks/addbooks.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: StartPageComponent,
  },
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
    path: 'books/new',      // Add this route to create a new book
    component: AddbooksComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent,
  },
];

/*
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { QuoteListComponent } from './quote/quote-list/quote-list.component';
import { QuoteFormComponent } from './quote/quote-form/quote-form.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: BookListComponent, canActivate: [AuthGuard] },
  { path: 'books/new', component: BookFormComponent, canActivate: [AuthGuard] },
  { path: 'books/:id', component: BookDetailComponent, canActivate: [AuthGuard] },
  { path: 'books/edit/:id', component: BookFormComponent, canActivate: [AuthGuard] },
  { path: 'quotes', component: QuoteListComponent, canActivate: [AuthGuard] },
  { path: 'quotes/new', component: QuoteFormComponent, canActivate: [AuthGuard] },
  { path: 'quotes/:id', component: QuoteDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


*/
