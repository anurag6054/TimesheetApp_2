import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Userprofile } from './userprofile1';


@Injectable({
  providedIn: 'root'
})
export class ViewusertimesheetdataService {

  constructor(private http: HttpClient) { }



  sendPsaDetails(employee: string, periodDate: string){

    console.log('viewusertimesheet!!!!',employee,periodDate);

    const url =  'http://localhost:8888/workload/view/'  + employee + '/' + periodDate;
    return this.http.get<any>(url);


  }

}
