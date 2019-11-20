import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Usertimesheet} from '../usertimesheet';
import { HttpClient } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { UsertimesheetdataService } from '../usertimesheetdata.service';
import {PsaService} from '../psa.service';
import { SharedService } from '../shared.service';
import {Psa} from '../psa'
import * as moment from 'moment';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { UserdataService } from '../userdata.service';
import { ViewusertimesheetdataService } from '../viewusertimesheetdata.service';
import { WorkId } from '../WorkId';

export interface Food {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-usertimesheet',
  templateUrl: './usertimesheet.component.html',
  styleUrls: ['./usertimesheet.component.css']
})
export class UsertimesheetComponent implements OnInit {


  public fieldArray: Array<any> = [];
  public fieldArray1: Array<any> = [];
  public newAttribute: any = {};
  public newAttributeCL: any = {};
  public newAttributeTR: any = {};
  public newAttributeSH: any = {};
  public newAttribute1: any = {};
  public newAttribute3: any = {};
  public newAttribute4: any = {};
  public recAttribute: Array<any> = [];
  public newAttribute6: any = {};

  psa: Psa;
  public workUnitDesc: string;

  public psaCode: string;
  workUnit : string;
  workUnit0: string;
  workUnit1: string;
  employee: string;
  periodDate: string;
  latestTime: string;

  newWorkUnitDesc: string;



  unit: string;
  unit1: string;

  public result = [];
  public psadata  = [];
  public psadata1 = [];
  public userdata = [];

  foods: Food[] = [
    { value: 'GEN', viewValue: '10100' },
    { value: 'SHIFT', viewValue: '10400' }
  ];

  public oldValue: string = ' ';

  public resultuser: any;
  Obj: any;
  date = new Date();
  periodEndDate: any;
  dateSun: any;
  dateMon: any;
  dateTue: any;
  dateWed: any;
  dateThu: any;
  dateFri: any;
  dateSat: any;
  day: any;
  newTimesheet: any;
  jsonObject = [];
  jsonObject1 = [];
  data1: any;
  recType: string;
  public unitWork: string;

  public psadata2: any;
  public psaRec: any;
  private rawdata: any;
  private psaraw = [];

  public showHide: false;

  public storage : string;
  public storage1 = [];

  public data: string;

  public boolean: boolean;

  public rowNum: number;


  userdata1:string;
  workunit0: string;
  public userdata2 = [];
 
  resultdata : string;
  resultdata1 = [];
  psaevent: string;

  public recordCat: string;

  public JsonPsaRaw: Array<any>= [];

  public JsonRecCategory: Array<{recordCategory: string}>= [];
  
  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar, sharedService: SharedService,public dialog: MatDialog,private http: HttpClient,private usertimesheetdataservice: UsertimesheetdataService,
  private psaservice:PsaService, private userdataservice: UserdataService,private router: Router,
    private viewusertimesheetdataservice: ViewusertimesheetdataService,
    location: PlatformLocation) {
    setInterval(() => {
      this.latestTime= moment().format(' h:mm:ss a');
    }, 1000)
    

    this.route.params.subscribe((result) => { 
          console.log('result!',result);
          this.resultuser= result;
      console.log('resultuser!', this.resultuser);
          this.userdataservice.sendUserData(result['employee']).subscribe(
            (res) => {
              this.userdata = res;
              console.log('userdata', this.userdata);
              this.userdata1 = JSON.stringify(this.userdata);
              this.userdata2 = JSON.parse('[' + this.userdata1 + ']');
              console.log('userdata2', this.userdata2);
            });
            
          this.resultdata= JSON.stringify(result);
          this.resultdata1=JSON.parse('[' + this.resultdata + ']');
          console.log('resultdata1', this.resultdata1);
      });
   }

  ngOnInit() {
    this.fieldArray.push(this.newAttribute3);
    this.periodEndDate = moment().endOf("week").format('YYYY-MM-DD');
    this.dateSat = moment().endOf("week").format('DD/MM');
    this.dateFri = moment().endOf("week").subtract(1,'d').format('DD/MM');
    this.dateThu = moment().endOf("week").subtract(2,'d').format('DD/MM');
    this.dateWed = moment().endOf("week").subtract(3,'d').format('DD/MM');
    this.dateTue = moment().endOf("week").subtract(4,'d').format('DD/MM');
    this.dateMon = moment().endOf("week").subtract(5,'d').format('DD/MM');
    this.dateSun = moment().endOf("week").subtract(6,'d').format('DD/MM');

    this.newAttributeCL =
      {
        "workUnit": "CL",
        "workUnitDesc": " ",
        "effortType": " ",
        "recType": " ",
        "recCategory": ' ',
        "psaCode":' ',
        "systemType": ' ',
        "subSystemType": ' ',
        "auditTimestamp": moment().format('YYYY-MM-DD HH:MM:SS'),
        "sunday":
        {
          "effortDate": moment().endOf("week").subtract(6,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "monday":
        {
          "effortDate": moment().endOf("week").subtract(5,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "tuesday":
        {
          "effortDate": moment().endOf("week").subtract(4,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "wednesday":
        {
          "effortDate": moment().endOf("week").subtract(3,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "thursday":
        {
          "effortDate": moment().endOf("week").subtract(2,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "friday":
        {
          "effortDate": moment().endOf("week").subtract(1,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "saturday":
        {
          "effortDate": moment().endOf("week").format('YYYY-MM-DD'),
          "effort": 0
        }
      }

    this.newAttributeSH =
      {
        "workUnit": "SH",
        "workUnitDesc": " ",
        "effortType": " ",
        "recType": " ",
        "recCategory":' ',
        "psaCode": ' ',
        "systemType": ' ',
        "subSystemType": ' ',
        "auditTimestamp": moment().format('YYYY-MM-DD HH:MM:SS'),
        "sunday":
        {
          "effortDate": moment().endOf("week").subtract(6,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "monday":
        {
          "effortDate": moment().endOf("week").subtract(5,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "tuesday":
        {
          "effortDate": moment().endOf("week").subtract(4,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "wednesday":
        {
          "effortDate": moment().endOf("week").subtract(3,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "thursday":
        {
          "effortDate": moment().endOf("week").subtract(2,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "friday":
        {
          "effortDate": moment().endOf("week").subtract(1,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "saturday":
        {
          "effortDate": moment().endOf("week").format('YYYY-MM-DD'),
          "effort": 0
        }
      }

    this.newAttributeTR =
      {
        "workUnit": "TRA",
        "workUnitDesc": " ",
        "effortType": " ",
        "recType": " ",
        "recCategory": ' ',
        "psaCode": ' ',
        "systemType": ' ',
        "subSystemType": ' ',
        "auditTimestamp": moment().format('YYYY-MM-DD HH:MM:SS'),
        "sunday":
        {
          "effortDate": moment().endOf("week").subtract(6,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "monday":
        {
          "effortDate": moment().endOf("week").subtract(5,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "tuesday":
        {
          "effortDate": moment().endOf("week").subtract(4,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "wednesday":
        {
          "effortDate": moment().endOf("week").subtract(3,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "thursday":
        {
          "effortDate": moment().endOf("week").subtract(2,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "friday":
        {
          "effortDate": moment().endOf("week").subtract(1,'d').format('YYYY-MM-DD'),
          "effort": 0
        },
        "saturday":
        {
          "effortDate": moment().endOf("week").format('YYYY-MM-DD'),
          "effort": 0
        }
      }
}


  openDialog(index): void {
    const dialogRef = this.dialog.open(MydialogComponent, {
      data: { employee: this.resultuser['employee'] }
    });

    this.rowNum= index;

    console.log('rowNum', this.rowNum);

dialogRef.afterClosed().subscribe(result => {
      this.unitWork = result;
      console.log('yeah!workUnit', this.unitWork);
      this.psaservice.sendPsaUnit(this.unitWork).subscribe(
        (res) => {
          this.psaraw = res;
          console.log('psaraw', this.psaraw);
          for (var i = 0; i < this.psaraw.length; i++) {
            this.JsonPsaRaw.push(this.psaraw);
            console.log('jsonpsaraw', this.JsonPsaRaw);
          }
          console.log('psadetails@usertimesheet', this.psaraw);
          this.psaservice.sendRecDetails(this.psaraw[0].unitId.recType).subscribe(
            (res) => {
              this.psaRec = res;
              console.log("psaRecCategory",this.psaRec);
              
                this.recAttribute.push(this.psaRec);
                console.log('recAttribute', this.recAttribute[index]);
              
            });
         
          if (this.psaraw.length > 0) {
            console.log('length1 => ', this.psaraw.length);
           
            this.newAttribute3[index] =
              {
                "workUnit": this.psaraw[0].unitId.workUnit,
                "workUnitDesc": this.psaraw[0].workUnitDesc,
                "systemType": this.psaraw[0].unitId.systemType,
                "subSystemType": this.psaraw[0].unitId.subSystemType,
                "psaCode": this.psaraw[0].psaCode,
                "recType": this.psaraw[0].unitId.recType,
                "effortType": ' ',
                "recCategory": ' ',
                "auditTimestamp": moment().format('YYYY-MM-DD HH:MM:SS'),
                "sunday":
                {
                  "effortDate": moment().endOf("week").subtract(6, 'd').format('YYYY-MM-DD'),
                  "effort": 0
                },
                "monday":
                {
                  "effortDate": moment().endOf("week").subtract(5, 'd').format('YYYY-MM-DD'),
                  "effort": 0
                },
                "tuesday":
                {
                  "effortDate": moment().endOf("week").subtract(4, 'd').format('YYYY-MM-DD'),
                  "effort": 0
                },
                "wednesday":
                {
                  "effortDate": moment().endOf("week").subtract(3, 'd').format('YYYY-MM-DD'),
                  "effort": 0
                },
                "thursday":
                {
                  "effortDate": moment().endOf("week").subtract(2, 'd').format('YYYY-MM-DD'),
                  "effort": 0
                },
                "friday":
                {
                  "effortDate": moment().endOf("week").subtract(1, 'd').format('YYYY-MM-DD'),
                  "effort": 0
                },
                "saturday":
                {
                  "effortDate": moment().endOf("week").format('YYYY-MM-DD'),
                  "effort": 0
                }
              }
            console.log('newAttr3', this.newAttribute3[index]);
          }
        })
    });
  }


  // onModelChangeUnit(index) {

  //   if (this.newAttribute3[index].workUnitDesc != null) {
  //     console.log('modified_effort=> ', this.newAttribute3[index].workUnitDesc);

  //   }
  //   else if (this.newAttribute3[index].workUnitDesc == null) {
  //     console.log('Notmodified=> ', this.newAttribute3[index].workUnitDesc);
  //   }
  // }

  
  
deleteFieldValue(index) {
    if (this.fieldArray.length == 1) {
      alert("At least one row of Timesheet data is required");
      return false;
    }
    else {
      this.fieldArray.splice(index, 1);
      this.psaraw.splice(0, 1);
      this.newAttribute3[index].workUnit = null;
      this.newAttribute3[index].workUnitDesc = null;
      this.newAttribute3[index].psaCode = null;
      this.newAttribute3[index].effortType = null;
      this.newAttribute3[index].systemType = null;
      this.newAttribute3[index].subSystemType = null;
      this.newAttribute3[index].recType=null;
      this.newAttribute3[index].recCategory = null;
      this.newAttribute3[index].sunday['effort'] = 0;
      this.newAttribute3[index].monday['effort'] = 0;
      this.newAttribute3[index].tuesday['effort'] = 0;
      this.newAttribute3[index].wednesday['effort'] = 0;
      this.newAttribute3[index].thursday['effort'] = 0;
      this.newAttribute3[index].friday['effort'] = 0;
      this.newAttribute3[index].saturday['effort'] = 0;
      console.log('After Splice_psaraw', this.psaraw);
      console.log('delete-array', this.fieldArray);
    }
  }

  // onHide(index){
  //   this.hidden = !this.hidden;
  // }

  addFieldValue(index) {
    if(this.newAttribute3[index] != null)
    {
      this.fieldArray.push(this.newAttribute3[index]);
      console.log('After _JsonPsaRaw', this.JsonPsaRaw);
      this.fieldArray1.push(this.fieldArray[index + 1]);
      console.log('add_array_fieldAray1', this.fieldArray1);

    }
    else if (this.newAttribute3[index] == null)
    {
      alert('Please fill data for this row!' )
    }
}

  onSave() {
    if (this.rowNum >= 0) {
      this.rowNum = this.rowNum;
    }
    else if (this.rowNum = 0) {
      this.rowNum = this.rowNum;
    }
    if (this.newAttribute3[this.rowNum] !== undefined) {
      this.fieldArray.push(this.newAttribute3[this.rowNum]);
      this.fieldArray1.push(this.fieldArray[this.rowNum + 1]);
    }
    // if (this.newAttributeCL.length == 1 && this.newAttributeTR.length == 1 &&
    //   this.newAttributeSH.length == 1){
    this.fieldArray1.push(this.newAttributeCL);
    this.fieldArray1.push(this.newAttributeSH);
    this.fieldArray1.push(this.newAttributeTR);
    //   }
    console.log('this.resultuser', this.resultuser['employee']);
    console.log('this.fieldArray1', this.fieldArray1);
    localStorage.setItem('add-FieldArray1', JSON.stringify(this.fieldArray1));
    alert('Save Timesheet for the week ending with: ' + this.resultuser['periodDate'] + ' ' + 'for UserId: ' + this.resultuser['employee'] + '?')
    this.router.navigate(['user', this.resultuser['employee']]);

  }



  onSubmit(){
    if (this.rowNum >= 0) {
      this.rowNum = this.rowNum;
    }
    else if (this.rowNum = 0) {
      this.rowNum = this.rowNum;
    }
    if(this.newAttribute3[this.rowNum]!== undefined){
    this.fieldArray.push(this.newAttribute3[this.rowNum]);
    this.fieldArray1.push(this.fieldArray[this.rowNum + 1]);
    }
    // if (this.newAttributeCL.length == 1 && this.newAttributeTR.length == 1 &&
    //   this.newAttributeSH.length == 1){
    this.fieldArray1.push(this.newAttributeCL);
    this.fieldArray1.push(this.newAttributeSH);
    this.fieldArray1.push(this.newAttributeTR);
    //   }
    console.log('this.resultuser', this.resultuser['employee']);
    console.log('this.fieldArray1', this.fieldArray1);

    // this.storage= localStorage.getItem(('add-FieldArray1'))
    // this.storage1=JSON.parse(this.storage);

    // console.log('storage1', this.storage1);

    // if(this.storage1!== null){
    //   localStorage.removeItem('add-FieldArray1')
    // }
    
     alert('Submit Timesheet for the week ending with: '+ this.resultuser['periodDate'] + ' '+ 'for UserId: ' + this.resultuser['employee'] + '?' )
    this.usertimesheetdataservice.userTimesheet(this.fieldArray1, this.resultuser['employee'], this.resultuser['periodDate'])
      .subscribe(
        data =>{ 
          this.router.navigate(['viewusertimesheet', this.resultuser['employee'], this.resultuser['periodDate']]);
              },
        error =>{
         alert('Error while submitting Timesheet\n ' + 'STATUS: ' 
         + error['status'] + '\n message: ' + error['error']['error']);
              }
  );
   }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Timesheet Submitted!', {
      duration: 3000,
    });
  }


}
  

