import { Component, OnInit } from '@angular/core';
import { ViewusertimesheetdataService } from '../viewusertimesheetdata.service';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UserdataService } from '../userdata.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-viewusertimesheet',
  templateUrl: './viewusertimesheet.component.html',
  styleUrls: ['./viewusertimesheet.component.css']
})
export class ViewusertimesheetComponent implements OnInit {



  periodEndDate: any;
  test: number;
  data: any;
  employee: string;
  periodDate: string;
  dateSun: any;
  dateMon: any;
  dateTue: any;
  dateWed: any;
  dateThu: any;
  dateFri: any;
  dateSat: any;
  public usertimesheet = [];

  
  public result = [];

  public effort:number;

  resultdata: string;
  workunit1: string;
  resultdata1 = [];
  userdata1: string;
  userdata3 : any;
  userdata2 = [];
  public dataRefresher: any;
  public uniqueWorkUnit = [];
  public uniqueWorkUnit1 = [];
  private userdata4 = [];
  private userdata = [];
  public result1: any;

  psadata1 = [];

  public exportData: Array<Object> 

  // public exportData: Array<{ WORK_UNIT: string, WORKUNIT_DESC: string, PSA: string, EFFORT_TYPE: string,
  //   SYSTEM_TYPE: string, SUB_SYSTEM_TYPE: string, WORK_TYPE: string,WORK_CATEGORY: string,
  //   SUNDAY: number, MONDAY: number, TUESDAY: number, WEDNESDAY: number, THURSDAY: number,
  //   FRIDAY: number, SATURDAY: number}> = [];


  

  constructor(private route: ActivatedRoute,private http: HttpClient,private userdataservice:UserdataService,
    public viewusertimesheetdataservice: ViewusertimesheetdataService,private router: Router) {

    this.route.params.subscribe((result) => {
      console.log('result!', result);
      
      this.result1= result;
      this.resultdata = JSON.stringify(this.result1);
      this.resultdata1 = JSON.parse('[' + this.resultdata + ']');
      console.log("resultdata1",this.resultdata1);

      this.userdataservice.sendUserData(result['employee']).subscribe(
        (res) => {
          this.userdata1 = res;
          this.userdata3 = JSON.stringify(this.userdata1);
          this.userdata2=JSON.parse('[' + this.userdata3 + ']');
          console.log('userdata2', this.userdata2);
        });

      this.userdataservice.getUserData(result['employee'],result['periodDate']).subscribe(
        (res) => {
          this.userdata = res;
          console.log('userdata', this.userdata);
          if(this.userdata['effortType']==='GEN')
          {
            this.effort=10100;
          }
          else if (this.userdata['effortType'] === 'SHIFT') {
            this.effort=10400;
          }
          });

          // for (var i=0;i<this.userdata.length;i++){
          //   this.exportData.push({WORK_UNIT:this.userdata[i].workUnit,
          //   WORKUNIT_DESC: this.userdata[i].workUnitDesc,PSA:this.userdata[i].psaCode,
          //     EFFORT_TYPE: this.userdata[i].effortType, SYSTEM_TYPE:this.userdata[i].systemType,
          //     SUB_SYSTEM_TYPE: this.userdata[i].subSystemType, WORK_TYPE: this.userdata[i].recType,
          //     WORK_CATEGORY: this.userdata[i].recCategory, SUNDAY: this.userdata[i].sunday.effort,
          //       MONDAY: this.userdata[i].monday.effort, TUESDAY: this.userdata[i].tuesday.effort,
          //     WEDNESDAY: this.userdata[i].wednesday.effort, THURSDAY: this.userdata[i].thursday.effort,
          //     FRIDAY: this.userdata[i].friday.effort, SATURDAY: this.userdata[i].saturday.effort});

          //   console.log('export_data', this.exportData);
          // }
        

        });

   }
  ngOnInit() {

    this.dateSat = moment(this.result1['periodDate']).format('DD/MM');

    this.dateFri = moment(this.result1['periodDate']).endOf("week").subtract(1, 'd').format('DD/MM');
    this.dateThu = moment(this.result1['periodDate']).endOf("week").subtract(2, 'd').format('DD/MM');
    this.dateWed = moment(this.result1['periodDate']).endOf("week").subtract(3, 'd').format('DD/MM');
    this.dateTue = moment(this.result1['periodDate']).endOf("week").subtract(4, 'd').format('DD/MM');
    this.dateMon = moment(this.result1['periodDate']).endOf("week").subtract(5, 'd').format('DD/MM');
    this.dateSun = moment(this.result1['periodDate']).endOf("week").subtract(6, 'd').format('DD/MM');
    }

   export(){

     for (var i = 0; i < this.userdata.length; i++) {
       this.exportData.push({
         WORK_UNIT: this.userdata[i].workUnit,
         WORKUNIT_DESC: this.userdata[i].workUnitDesc, PSA: this.userdata[i].psaCode,
         EFFORT_TYPE: this.userdata[i].effortType, SYSTEM_TYPE: this.userdata[i].systemType,
         SUB_SYSTEM_TYPE: this.userdata[i].subSystemType, WORK_TYPE: this.userdata[i].recType,
         WORK_CATEGORY: this.userdata[i].recCategory, SUNDAY: this.userdata[i].sunday.effort,
         MONDAY: this.userdata[i].monday.effort, TUESDAY: this.userdata[i].tuesday.effort,
         WEDNESDAY: this.userdata[i].wednesday.effort, THURSDAY: this.userdata[i].thursday.effort,
         FRIDAY: this.userdata[i].friday.effort, SATURDAY: this.userdata[i].saturday.effort
       });

     }


    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(this.exportData);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'Work_Load_Detail'); 
    XLSX.writeFile(workBook, 'Work_Load_Details.xlsx'); 
  }

    home(){
      this.router.navigate(['user', this.result1['employee']]);
    }
    modify(){
      console.log('employee', this.result1['employee']);
      console.log('periodenddate', this.result1['periodDate']);
      this.router.navigate(['modifyusertimesheet', this.result1['employee'], this.result1['periodDate']]);
    }


}

 
 
