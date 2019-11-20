import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PsaService {
constructor(private http: HttpClient) { }

  sendPsa(workunitDesc,employee) {
    console.log('employee', employee)
    console.log('workunit',workunitDesc)
    const url = 'http://localhost:8888/unit/view/' + employee + '/' + workunitDesc
    return this.http.get<any>(url);
}
  sendPsaUnit(workunit) {
    console.log('workunit', workunit)
    const url = 'http://localhost:8888/unit/view/workunit/' + workunit
    return this.http.get<any>(url);
  }

  sendPsaDetails(psaCode) {
    console.log('psaCode!!!!', psaCode)
    const url = 'http://localhost:8888/psa/view/' + psaCode
    return this.http.get<any>(url);
  }
  sendRecDetails(rec) {
    console.log('recCategory!!!!', rec)
    const url = 'http://localhost:8888/rec/view/' + rec
    return this.http.get<any>(url);
  }

  sendPsaCode(sys,subsys,rec) {
    console.log('recCategory!!!!', sys,subsys,rec)
    const url = 'http://localhost:8888/psa/view/code/' + sys + '/' + subsys + '/' + rec
    return this.http.get<any>(url);
  }
}
