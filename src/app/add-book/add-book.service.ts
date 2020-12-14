import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/Book.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  bookChanged = new EventEmitter<Book[]>();
  book: Observable<Book[]> = this.fetchBooks();

  constructor(private http: HttpClient) { }

  private books: Book[] = [
    new Book("Half Blood Prince",
      "Professor Snape",
      10, "https://upload.wikimedia.org/wikipedia/en/b/b9/Ootp076.jpg"),
    new Book("Pursuit of Hapiness",
      "Will Smith",
      8, "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg"),
    new Book("The Complete Reference",
      "James Gosling",
      6, "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ward_Cunningham_-_Commons-1.jpg/800px-Ward_Cunningham_-_Commons-1.jpg"),
      
    new Book("The Jungle Book",
      "John Doe",
      6, "https://upload.wikimedia.org/wikipedia/en/1/1d/Thejunglebook_movieposter.jpg")
  ];

  getBooks() {
    return this.books.slice();
    // this.book.pipe()
  }

  getBook(index: number) {
    return this.books[index];
    //return this.book.pipe();
    // return this.http.get<Book[]>('http://localhost:3000/books/{index}');
  }

  addBook(book: Book) {
    this.books.push(book);
    this, this.bookChanged.emit(this.books);
  }

  fetchBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books');
  }

  saveBook(book: Book) {
    this.http.post('http://localhost:3000/books', book).subscribe(
      res => console.log(res)
    );
  }

  fetchBook() {
    return this.http.get('http://localhost:3000/books')
      .pipe(map(response => {
        const bookArray = [];
        for (const key in bookArray) {
          if (response.hasOwnProperty(key)) {
            bookArray.push({ ...bookArray[key], id: key })
          }
        }
        return bookArray;
      }));
  }

  deleteBooks(){
    return this.http.delete('http://localhost:3000/books');
  }

  assisgnToUser(book: Book) {
    // return this.userBooks.push(book);
  }
}
