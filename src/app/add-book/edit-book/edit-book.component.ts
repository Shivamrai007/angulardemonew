import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/shared/Book.model';
import { AddBookService } from '../add-book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  @ViewChild('Name') nameRef: ElementRef;
  @ViewChild('Author') authorRef: ElementRef;
  @ViewChild('Qty') quantityRef: ElementRef;
  private book: Book;
  name: string;
  author: string;
  quantity: number;
  imagepath: string;

  constructor(private bookService: AddBookService) { }

  ngOnInit(): void {
    this.bookService.fetchBooks();
    this.bookService.fetchBook();
  }

  addIngredient() {
    const name = this.nameRef.nativeElement.value;
    const author = this.authorRef.nativeElement.value;
    const quantity = this.quantityRef.nativeElement.value;
    const book = new Book(name, author, quantity);
    this.bookService.addBook(book);
  }

  onSubmit(form) {
    this.book = {
      name: form.value.name,
      author: form.value.author,
      quantity: form.value.qunatity,
      imagepath: form.value.imagepath
    }
    this.bookService.saveBook(this.book);
  }

}
