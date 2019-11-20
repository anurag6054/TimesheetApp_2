import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  sendUserData(employee) {
    console.log('employee!!!', employee)
    const url = 'http://localhost:8888/user/view/' + employee
    return this.http.get<any>(url);
}

  getUserData(employee,periodDate) {
    console.log('employee & period end Date!!!', employee,periodDate)
    const url = 'http://localhost:8888/workload/view/week/' + employee + '/' + periodDate;
    return this.http.get<any>(url);
  }
}
