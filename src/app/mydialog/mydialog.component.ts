import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PsaService } from '../psa.service';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MydialogComponent implements OnInit {

  public color: string;
  private psadata = [];
  workUnit: string;
  private psadata1 = [];
  private psadata2: any;
  private rawdata: any;
  private psaraw = [];

  message: string;

  result 

  psaCode: string;


  constructor(private route: ActivatedRoute,private http: HttpClient, private sharedService: SharedService, private psaservice: PsaService,public dialogRef: MatDialogRef<MydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log('employee_id',this.data);
    console.log(this.data.employee);
    }

  public unitWorkDesc: string;


  keyUpFunction(event: any){
    console.log('input_event', event);
    console.log(this.data.employee);
    this.psaservice.sendPsa(this.workUnit,this.data.employee).subscribe(
      (res) => {
        console.log(res);
        this.psadata1 = res;
        console.log('psadata@workunit', this.psadata1);
        if (this.psadata1.length == 0) {
          alert("No Work-Unit Matches for the following Search!");
        }
      })
  }

    getPsa(){
      this.psaservice.sendPsa(this.workUnit,this.data.employee).subscribe(
        (res) => {
          console.log(res);
          this.psadata1 = res;
          console.log('psadata@workunit', this.psadata1);
          if (this.psadata1.length==0) {
            alert("No Work-Unit Matches for the following Search!");
          }
         })

    }


  public getPsaDetails(application: any){

    this.unitWorkDesc = application.unitId.workUnit;
    console.log('unitWorkDesc', application.unitId.workUnit);

    this.psaservice.sendPsaUnit(application.unitId.workUnit).subscribe(
        (res) => {
          this.psadata2 = res;
          console.log('psarawdetails@modal', this.psadata2);
         })
    }

  submit(psaCode:string) {
    this.dialogRef.close(psaCode);
    console.log('psacode@cgi',psaCode);
  }
}

