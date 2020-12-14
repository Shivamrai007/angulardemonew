import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AddBookService } from 'src/app/add-book/add-book.service';
import { Book } from 'src/app/shared/Book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private bookService: AddBookService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.book = this.bookService.getBook(this.id);
      }
    )
  }

  EditBookDetails() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  AssignToUser(bok:Book){
    this.bookService.assisgnToUser(bok);
  }

}
