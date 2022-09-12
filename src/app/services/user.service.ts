import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8081/user/get/';
  constructor(private http:HttpClient) { }

  login(username: string, password: string ): Observable<User> {
    return this.http.get<User>(this.baseUrl+username+"/"+password).pipe(map (resp => resp));
  }
}
