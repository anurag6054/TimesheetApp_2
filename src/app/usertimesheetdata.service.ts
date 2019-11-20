import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usertimesheet } from './usertimesheet';

@Injectable({
  providedIn: 'root'
})
export class UsertimesheetdataService {
  constructor(private http: HttpClient) { }

  userTimesheet(fieldArray, employee,periodDate) {
    const url = 'http://localhost:8888/workload/add/' + employee + '/' + periodDate ;
    return this.http.post<any>(url,fieldArray);
    
  }
  modifyTimesheet(userdata,employee,periodDate) {
    console.log('modify-userdata', userdata);
    console.log('modifySheet', employee,periodDate);
    const url = 'http://localhost:8888/workload/update/' + employee +'/' + periodDate ;
    return this.http.put<any>(url, userdata);
   return this.http.put<any>(url, userdata);
   console.log(userdata);
   

    

  }
}


