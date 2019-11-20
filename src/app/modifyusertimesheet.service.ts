import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModifyusertimesheetService {

  constructor(private http: HttpClient) { }

  sendPsaDetails(employee: string, periodDate: string) {

    console.log('viewusertimesheet!!!!', employee, periodDate);

    const url = 'http://localhost:8888/workload/view/' + employee + '/' + periodDate;
    return this.http.get<any>(url);


  }

}


