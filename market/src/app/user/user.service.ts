import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getUserList(): Observable<any> {
    return this.http.get('/api/user')
  }

  createUser(body:any): Observable<any>{
    return this.http.post('api/user',body);
  }

  login(body:any): Observable<any>{
    return this.http.post('api/auth/login', body);
  }
}
