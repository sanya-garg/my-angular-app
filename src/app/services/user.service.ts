import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, UnsubscriptionError, map } from 'rxjs';
import { User } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get('http://localhost:3000/users').pipe(map((data) => {
      return <User[]>data;
    }));
  }

  getUsersById(id : string): Observable<User> {
    return this.http.get('http://localhost:3000/users/'+ id).pipe(map((data) => {
      return <User>data;
    }));
  }
  addUser(requestBody :User): Observable<User> {
    return this.http.post('http://localhost:3000/users/', requestBody).pipe(map((data) => {
      return <User>data;
    }));
  }
}
