import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usercredential } from './usercredential';

@Injectable({
  providedIn: 'root'
})
export class UsercredentialService {

  url = 'http://localhost:4200/usertimesheet';


  constructor(private http: HttpClient) { }

  // createuserCredential(usercredential: Usercredential) {
  //   return this.http.post<any>(this.url, usercredential);
  // }
}
