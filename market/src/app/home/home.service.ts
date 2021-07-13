import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../core/services';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http:HttpClient,
    private https:HttpService
  ) { }

  getProfile(): Observable<any>{
    return this.https.get('api/user/profile',{username:'kavan'});
  }
}
