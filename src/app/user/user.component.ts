import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { Usercredential } from '../usercredential';
import { UsercredentialService } from '../usercredential.service';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
// import { AlertsService } from 'angular-alert-module';
import { AppDateAdapter, APP_DATE_FORMATS } from '../date.adapter';
import * as moment from 'moment';
import { ViewusertimesheetdataService } from '../viewusertimesheetdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class UserComponent implements OnInit {
  weekEndDate: any;
  TimesheetButton: string;

  public num: number;

  dateSun: any;
  dateMon: any;
  dateTue: any;
  dateWed: any;
  dateThu: any;
  dateFri: any;
  dateSat: any;

  public message: string;

  public button: string;

  boolean: boolean;

  TodayDate:any;

  public resultuser: any;
 
  employeeId: string;
  periodEndDate: string;


  constructor(private route: ActivatedRoute,private router: Router, private usercredentialservice: UsercredentialService, 
              private viewusertimesheetdataservice: ViewusertimesheetdataService)
               { 
    this.route.params.subscribe((result) => {
      console.log('result!', result);
      this.resultuser = result;
    });
               }

 

  ngOnInit() {

    this.button= "CREATE";

    this.employeeId = this.resultuser['employee'];
    this.periodEndDate = moment().endOf("week").format('YYYY-MM-DD');
    this.dateSat = moment().endOf("week").format('DD/MM');
    this.dateFri = moment().endOf("week").subtract(1, 'd').format('DD/MM');
    this.dateThu = moment().endOf("week").subtract(2, 'd').format('DD/MM');
    this.dateWed = moment().endOf("week").subtract(3, 'd').format('DD/MM');
    this.dateTue = moment().endOf("week").subtract(4, 'd').format('DD/MM');
    this.dateMon = moment().endOf("week").subtract(5, 'd').format('DD/MM');
    this.dateSun = moment().endOf("week").subtract(6, 'd').format('DD/MM');

  }
  addTimesheet(employee,period){

  // if ((period !== moment().endOf("week").format('YYYY-MM-DD'))
  //   || (period !== moment().endOf("week").add(7,'d').format('YYYY-MM-DD'))) {
  //     alert("Please choose Saturday's date");
  //   }

  if ((period == moment().endOf("week").format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(7,'d').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(7, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(14, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(14, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(21, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(21, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(28, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(28, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(35, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(35, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(42, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(42, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(49, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(49, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(56, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(56, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(63, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(63, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(70, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(70, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(77, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(77, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").add(84, 'd').format('YYYY-MM-DD'))
    || (period == moment().endOf("week").subtract(84, 'd').format('YYYY-MM-DD'))) 
    
    {
      
    
      this.viewusertimesheetdataservice.sendPsaDetails(employee, period)
        .subscribe(
          (res) => {
            this.boolean = res;
            console.log('boolean', this.boolean);
            if (this.boolean === true) {
              console.log('hi true')
              alert('Timesheet for this week has already been submitted! Click [OK] to view Timesheet');
              this.button = "VIEW";
              this.router.navigate(['/viewusertimesheet', employee, period]);

            }
            else if (this.boolean === false) {
              console.log('hi false')
              this.router.navigate(['/usertimesheet', employee, period]);
              console.log('hulalula', employee, period);
              
            }
          });
        }

        else{
                  alert("Please choose Saturday's date");
        }
          
        
    
  }


}
