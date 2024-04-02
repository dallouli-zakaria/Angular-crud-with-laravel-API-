import { Component } from '@angular/core';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  selector: 'app-books',
  standalone: true,
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
  imports: [BooksListComponent],
})
export class BooksComponent {}
