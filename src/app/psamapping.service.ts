import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Psamapping } from './psamapping';

@Injectable({
  providedIn: 'root'
})
export class PsamappingService {

  url = 'http://localhost:8888/psa/add';

  constructor(private http: HttpClient) { }

  psaMap(psamapping) {
    return this.http.post<any>(this.url, psamapping);
  }
}

