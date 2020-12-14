import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/Book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
