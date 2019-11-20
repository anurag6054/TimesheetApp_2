import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ModifyusertimesheetService } from '../modifyusertimesheet.service';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UserdataService } from '../userdata.service';
import { PsaService } from '../psa.service';
import { UsertimesheetdataService } from '../usertimesheetdata.service';
import { MydialogComponent } from '../mydialog/mydialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modifyusertimesheet',
  templateUrl: './modifyusertimesheet.component.html',
  styleUrls: ['./modifyusertimesheet.component.css']
})
export class ModifyusertimesheetComponent implements OnInit {


  public fieldArray: Array<any> = [];
  public fieldArray1: Array<any> = [];
  public fieldString: string;
  public fieldString2: string;
  public fieldArray2: any;



  periodEndDate: any;
  test: number;
  data: any;
  employee: string;
  periodDate: string;
  public psaRec: any;
  public psaRec1: any;
  dateSun: any;
  dateMon: any;
  dateTue: any;
  dateWed: any;
  dateThu: any;
  dateFri: any;
  dateSat: any;
  public usertimesheet = [];


  public result = [];

  foods: Food[] = [
    { value: 'GEN', viewValue: '10100' },
    { value: 'SHIFT', viewValue: '10400' }
  ];

  public oldValue: string;

  resultdata: string;
  workunit1: string;
  resultdata1 = [];
  userdata1: string;
  userdata3: any;
  userdata2 = [];
  private psaraw = [];
  public newAttribute3: any = {};

  public newAttributeCL: any = {};
  public newAttributeTR: any = {};
  public newAttributeSH: any = {};
  public recAttribute: Array<any> = [];
  public recAttribute1: Array<any> = [];

  private userdata4 = [];
  public JsonPsaRaw: Array<any> = [];
  private userdata = [];
  public result1: any;
  public rowNum: number;
  public unitWork: string;

  psadata1 = [];

  constructor(private route: ActivatedRoute, public snackBar: MatSnackBar, private psaservice: PsaService, private http: HttpClient, private userdataservice: UserdataService,
    public modifyusertimesheetdataservice: ModifyusertimesheetService, public dialog: MatDialog,
    private usertimesheetdataservice:UsertimesheetdataService, private router: Router) {

    this.route.params.subscribe((result) => {
      console.log('result!', result);

      this.result1 = result;
      this.resultdata = JSON.stringify(this.result1);
      this.resultdata1 = JSON.parse('[' + this.resultdata + ']');
      console.log("resultdata1", this.resultdata1);

      this.userdataservice.sendUserData(result['employee']).subscribe(
        (res) => {
          this.userdata1 = res;
          this.userdata3 = JSON.stringify(this.userdata1);
          this.userdata2 = JSON.parse('[' + this.userdata3 + ']');
          console.log('userdata2', this.userdata2);
        });

      this.userdataservice.getUserData(result['employee'], result['periodDate']).subscribe(
        (res) => {
          this.userdata = res;
          console.log('userdata', this.userdata);
          for(var j=0; j< this.userdata.length;j++){
            this.psaservice.sendRecDetails(this.userdata[j].recType).subscribe(
              (res) => {
                this.psaRec1 = res;
                console.log("psaRecCategory", this.psaRec1);

                this.recAttribute1.push(this.psaRec1);
                console.log('recAttribute', this.recAttribute1[j]);
          
            });
          }
        });
    });
  }
  ngOnInit() {

    // this.psaservice.sendRecDetails(this.psaraw[0].unitId.recType).subscribe(
    //   (res) => {
    //     this.psaRec = res;
    //     console.log("psaRecCategory", this.psaRec);

    //     this.recAttribute.push(this.psaRec);
    //     console.log('recAttribute', this.recAttribute[index]);

    //   });
   

    this.dateSat = moment(this.result1['periodDate']).format('DD/MM');

    this.dateFri = moment(this.result1['periodDate']).endOf("week").subtract(1, 'd').format('DD/MM');
    this.dateThu = moment(this.result1['periodDate']).endOf("week").subtract(2, 'd').format('DD/MM');
    this.dateWed = moment(this.result1['periodDate']).endOf("week").subtract(3, 'd').format('DD/MM');
    this.dateTue = moment(this.result1['periodDate']).endOf("week").subtract(4, 'd').format('DD/MM');
    this.dateMon = moment(this.result1['periodDate']).endOf("week").subtract(5, 'd').format('DD/MM');
    this.dateSun = moment(this.result1['periodDate']).endOf("week").subtract(6, 'd').format('DD/MM');

    this.newAttributeCL =
      {
        "workUnit": "CL",
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
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(6, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "monday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(5, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "tuesday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(4, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "wednesday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(3, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "thursday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(2, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "friday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(1, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "saturday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").format('YYYY-MM-DD'),
          "effort": " "
        }
      }

    this.newAttributeSH =
      {
        "workUnit": "SH",
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
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(6, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "monday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(5, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "tuesday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(4, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "wednesday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(3, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "thursday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(2, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "friday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(1, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "saturday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").format('YYYY-MM-DD'),
          "effort": " "
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
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(6, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "monday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(5, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "tuesday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(4, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "wednesday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(3, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "thursday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(2, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "friday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").subtract(1, 'd').format('YYYY-MM-DD'),
          "effort": " "
        },
        "saturday":
        {
          "effortDate": moment(this.result1['periodDate']).endOf("week").format('YYYY-MM-DD'),
          "effort": " "
        }
      }
  }

   addField(){
     this.fieldArray.push(this.newAttribute3);
   }

  openDialog(index): void {
    const dialogRef = this.dialog.open(MydialogComponent, {
      data: { employee: this.result1['employee'] }
    });

    this.rowNum = index;

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
              console.log("psaRecCategory", this.psaRec);

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
            // this.newAttribute4[index] =
            //   {
            //     "systemType": this.psaraw[0].unitId.systemType,
            //     "subSystemType": this.psaraw[0].unitId.subSystemType,
            //     "psaCode": this.psaraw[0].psaCode,
            //     "recType": this.psaraw[0].unitId.recType,
            //   }
            console.log('newAttr3', this.newAttribute3[index]);
            // console.log('newAttr4', this.newAttribute4[index]);
          }
        })
    });
  }

  onModelChangeEffort(event, index) {
    this.oldValue = this.userdata[index].effortType;

    if (this.oldValue != event) {
      console.log('modified_effort=> ', event);
      this.userdata[index].effortType = event;
      console.log('newAttributeTrFriday', this.userdata[index].effortType);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].effortType = event;
      console.log('newAttributeTrFriday', this.userdata[index].effortType);
    }
  }

  onModelChangeRec(event, index) {
    this.oldValue = this.userdata[index].recCategory;

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].recCategory= event;
      console.log('newAttributeTrFriday', this.userdata[index].recCategory);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].recCategory = event;
      console.log('newAttributeTrFriday', this.userdata[index].recCategory);
    }
  }

  onModelChangeSat(event, index) {
    this.oldValue = this.userdata[index].saturday['effort'];

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].saturday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].saturday['effort']);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].saturday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].saturday['effort']);
    }
  }

  onModelChangeFri(event,index) {
    this.oldValue = this.userdata[index].friday['effort']; 

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].friday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].friday['effort']);
    }
    else if(this.oldValue = event){
    console.log('Notmodified=> ' ,event);
    this.userdata[index].friday['effort']= event;
    console.log('newAttributeTrFriday', this.userdata[index].friday['effort']);
    }
  }

  onModelChangeThu(event,index) {
    this.oldValue = this.userdata[index].thursday['effort'];

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].thursday['effort'] = event;
      console.log('newAttributeTrThursday', this.userdata[index].thursday['effort']);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].thursday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].thursday['effort']);
    }
  }
  onModelChangeWed(event, index) {
    this.oldValue = this.userdata[index].wednesday['effort'];

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].wednesday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].wednesday['effort']);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].wednesday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].wednesday['effort']);
    }
  }

  onModelChangeTue(event, index) {
    this.oldValue = this.userdata[index].tuesday['effort'];

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].tuesday['effort'] = event;
      console.log('newAttributeTrThursday', this.userdata[index].tuesday['effort']);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].tuesday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].tuesday['effort']);
    }
  }
  onModelChangeMon(event, index) {
    this.oldValue = this.userdata[index].monday['effort'];

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].monday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].monday['effort']);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].monday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].monday['effort']);
    }
  }

  onModelChangeSun(event, index) {
    this.oldValue = this.userdata[index].sunday['effort'];

    if (this.oldValue != event) {
      console.log('modified=> ', event);
      this.userdata[index].sunday['effort'] = event;
      console.log('newAttributeTrThursday', this.userdata[index].sunday['effort']);
    }
    else if (this.oldValue = event) {
      console.log('Notmodified=> ', event);
      this.userdata[index].sunday['effort'] = event;
      console.log('newAttributeTrFriday', this.userdata[index].sunday['effort']);
    }
  }

  deleteValue(index) {
    if (this.userdata.length == 1) {
      alert("At least one row of Timesheet data is required");
      return false;
    }

    this.userdata.splice(index, 1);

    console.log('delete-array', this.userdata);

  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
      this.psaraw.splice(0, 1);
      console.log('After Splice_psaraw', this.psaraw);
      console.log('delete-array', this.fieldArray);
    this.newAttribute3[index].workUnit = null;
    this.newAttribute3[index].workUnitDesc = null;
    this.newAttribute3[index].psaCode = null;
    this.newAttribute3[index].effortType = null;
    this.newAttribute3[index].systemType = null;
    this.newAttribute3[index].subSystemType = null;
    this.newAttribute3[index].recType = null;
    this.newAttribute3[index].recCategory = null;
    this.newAttribute3[index].sunday['effort'] = 0;
    this.newAttribute3[index].monday['effort'] = 0;
    this.newAttribute3[index].tuesday['effort'] = 0;
    this.newAttribute3[index].wednesday['effort'] = 0;
    this.newAttribute3[index].thursday['effort'] = 0;
    this.newAttribute3[index].friday['effort'] = 0;
    this.newAttribute3[index].saturday['effort'] = 0;
    
  }

  addFieldValue(index) {
    if (this.newAttribute3[index] != null) {
      this.fieldArray.push(this.newAttribute3[index]);
      console.log('After _JsonPsaRaw', this.JsonPsaRaw);
      console.log('add_array_fieldAray1', this.fieldArray);
      this.fieldArray1.push(this.fieldArray[index + 1]);
      console.log('add_array_fieldAray1_push', this.fieldArray1);

    }
    else if (this.newAttribute3[index] == null) {
      alert('Please fill data for this row!')
    }
  }

  addPersonal() {
    for(var j=0; j<this.userdata.length;j++){
      if (this.userdata[j]['workUnit'] !== 'SH' && this.userdata[j]['workUnit'] !== 'TRA'
          && this.userdata[j].psaCode== " ") {
        console.log(this.userdata)
        this.userdata.push(this.newAttributeSH);
        this.userdata.push(this.newAttributeTR);
      }
     }
    }

  


  onSubmit()
  {
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
    console.log("Userdata after push", this.userdata);
    if(this.fieldArray1.length > 0){
      // this.fieldArray2 = this.fieldArray1;
      this.fieldString =  JSON.stringify(this.fieldArray1);
      this.fieldString2= this.fieldString.substr(1).slice(0,-1);
      this.fieldArray2=JSON.parse(this.fieldString2);
      this.userdata.push(this.fieldArray2);
      console.log()

    }
    this.usertimesheetdataservice.userTimesheet(this.userdata, this.result1['employee'], this.result1['periodDate'])
      .subscribe(
        data => {
          this.router.navigate(['viewusertimesheet', this.result1['employee'], this.result1['periodDate']]);
          // alert("Timesheet successfully modified!");
        },
        error => {
          alert('Error while modifying Timesheet\n ' + 'STATUS: '
            + error['status'] + '\n message: ' + error['error']['error']);
        }
      );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Timesheet Modified!', {
      duration: 3000,
    });
  }


}



