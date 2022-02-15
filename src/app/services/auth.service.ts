import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static login: any;

  constructor(public http: HttpClient) { }

  login(email, password){
    return this.http.get('http://httpbin.org/get');
  }
  register(){}
}
