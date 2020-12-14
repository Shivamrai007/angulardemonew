import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/Book.model';
import { AddBookService } from './add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  books: Observable<Book[]>;
  userBooks: Book[] = [];

  constructor(private bookService: AddBookService) { }

  ngOnInit(): void {
    this.bookService.fetchBook().subscribe(
      books => {
        this.userBooks = books;
      }
    );
    this.books = this.bookService.fetchBooks();
    this.bookService.bookChanged.subscribe(
      (book: Observable<Book[]>) => {
        this.books = book;
      }
    )
  }

  deleteBooks() {
    this.bookService.deleteBooks().subscribe(
      () => {
        this.userBooks = [];
      }
    );
  }

}
