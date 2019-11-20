import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Userprofile } from './userprofile';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  url = 'http://localhost:8888/user/add';

  constructor(private http: HttpClient) { }

  userProfile(userprofile) {
    return this.http.post<any>(this.url, userprofile);
  }
}
