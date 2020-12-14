import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Book } from '../shared/Book.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUser(){
    return this.http.get('http://localhost:3000/users');
  }

  postUser(user:User){
     this.http.post('http://localhost:3000/users',user).subscribe(
       res => console.log(res)
     );
  }
}
