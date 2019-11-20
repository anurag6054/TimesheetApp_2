import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public modified: string;
  constructor(private http: HttpClient) {}

  postData(data) {
    console.log('authorized_data', data);
    this.modified= data;
    this.modified= "logout";
    console.log('modified', this.modified);
    return this.modified;
    
  }

}
