import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workunit } from './workunit';

@Injectable({
  providedIn: 'root'
})
export class WorkunitService {

  url = 'http://13.234.37.17:8888/unit/add';

  constructor(private http: HttpClient) { }

  workUnit(workunit) 
  {
    return this.http.post<any>(this.url, workunit);
  }
}
