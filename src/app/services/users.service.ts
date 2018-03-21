import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object> {
    return this.http.get('http://localhost:3000/users');
  }

  getUser(id): Observable<Object> {
    return this.http.get('http://localhost:3000/users/' + id);
  }

  deleteUser(id): Observable<Object> {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

  postUser(user): Observable<Object> {
    return this.http.post('http://localhost:3000/users', user);
  }

  putUser(user): Observable<Object> {
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }

}
