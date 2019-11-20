import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { text } from '../../node_modules/@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  sendEmail() {
    const url = 'http://localhost:8888/user/remainder/thursday'
    return this.http.get<any>(url, { responseType: 'text' as 'json' });
  }

  sendFridayEmail(friday) {
    const url = 'http://localhost:8888/user/remainder/friday/' + friday
        return this.http.get<any>(url, { responseType: 'text' as 'json' });
  }

  authUser(userId,password){
    console.log('userId:', userId,'password:', password )
    const url = 'http://localhost:8888/user/authenticate/' + userId + '/' + password
    return this.http.get<any>(url, {responseType: 'text' as 'json'});
  }
}
