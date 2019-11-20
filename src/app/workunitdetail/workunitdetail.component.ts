import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { WorkunitService } from '../workunit.service';
import * as moment from 'moment';
import { UnitModel } from '../unitModel';
import { WorkUnit } from '../workModel';
import {PsaService} from '../psa.service';
import { ActivatedRoute } from "@angular/router";
import * as XLSX from 'xlsx';

export interface Food {
  value: string;

}

export interface SubSystem {
  value: string;

}
export interface Rec {
  value: string;

}




@Component({
  selector: 'app-workunitdetail',
  templateUrl: './workunitdetail.component.html',
  styleUrls: ['./workunitdetail.component.css']
})
export class WorkunitdetailComponent implements OnInit {

  public recCat: string;
  public sys: string;
  public subSys: string;

  public userdata: any;

  public psaName: string;

  public workUnitUpload: any;

  public fileUpload: boolean;


  public JsonWorkUnit: Array<{
    unitId: Object, psaCode: string, userId: string,workUnitDesc: string, region: string, auditTimestamp: string
  }> = [];

  arrayBuffer: any;
  file: File;

  foods: Food[] = [
    { value: 'A2P' },
    { value: 'DOO' },
     { value: 'DSS' },
    { value: 'GEODE' },
     { value: 'LOG' },
    { value: 'OTC' },
     { value: 'SCM' },
    { value: 'SPD' }
  ];

  subSystem: SubSystem[] = [
    { value: 'OE' },
    { value: 'CLM' },
    { value: 'CPP' },
    { value: 'INV' },
    { value: 'SIS' },
    { value: 'DSS' },
    { value: 'A2P' },
    { value: 'NA' },
    { value: 'DOO' },
    { value: 'FRANCE'},
    { value: 'EDI' },
    { value: 'FCT' },
    { value: 'NMTF' },
    { value: 'FTZ' },
    { value: 'LS' },
    { value: 'PF' },
    { value: 'FCT' },
    { value: 'DELPHI' },
    { value: 'REP' },
    { value: 'SNC' },
    { value: 'SOLOMON' },
    { value: 'SPD' },
    { value: 'WMS' },
    { value: 'OTHERS' }
  ];

  rec: Rec[] = [
    { value: 'MS1' },
    { value: 'MS2B' },
    { value: 'MS3A' },
    { value: 'MS3B' }
  ];

  public resultuser: any;

  public userId: string;


  constructor(private workunitservice: WorkunitService, public snackBar: MatSnackBar,
    private route: ActivatedRoute,
              private psaservice: PsaService, private router: Router) {
    this.route.params.subscribe((result) => {
      console.log('result!', result);
      this.resultuser = result;
      console.log('resultuser!', this.resultuser);
    });
              }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Saved!', {
      duration: 2000,
    });
  }

  unitModel = new UnitModel(' ', ' ', ' ', ' ');

  workModel = new WorkUnit(this.unitModel, ' ', ' ',' ', moment().format('YYYY-MM-DD HH:MM:SS'));

  onModelChangeSubSys(event) {
    console.log('modified=> ', event);
    this.subSys = event;
    console.log('newAttributeRecCat', this.subSys);
  }
  onModelChangeSys(event) {
    console.log('modified=> ', event);
    this.sys = event;
    console.log('newAttributeRecCat', this.sys);
  }

  onModelChangeRec(event) {
      console.log('modified=> ', event);
      this.recCat = event;
      console.log('newAttributeRecCat', this.recCat);

    this.fileUpload =!this.fileUpload;

        this.psaservice.sendPsaCode(this.unitModel.systemType, this.unitModel.subSystemType, this.unitModel.recType)
        .subscribe(
          (res) => {
            this.userdata = res;
            console.log('userdata', this.userdata);
            console.log('psaCode', this.userdata[0].psaId.psaCode);

            this.psaName = this.userdata[0].psaId.psaCode;

            this.workModel.psaCode = this.psaName;
            console.log('workmodel_psa', this.workModel.psaCode);
            
          });
          

      
  }

ngOnInit() {

  this.userId = this.resultuser['employee'];

  this.workModel.userId = this.resultuser['employee'];
}

  incomingfile(event) {
    this.file = event.target.files[0];
  }

  Upload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.workUnitUpload = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log('upload_psa', this.workUnitUpload);
      for (var j = 0; j < this.workUnitUpload.length; j++) {

        this.JsonWorkUnit.push({
          unitId: {
            workUnit: this.workUnitUpload[j].WORK_UNIT,
            systemType: this.sys,
            subSystemType: this.subSys,
            recType: this.recCat
          },
          psaCode:  this.userdata[0].psaId.psaCode,
          userId: this.resultuser['employee'],
          workUnitDesc: this.workUnitUpload[j].WORKUNIT_DESC,
          region: this.workUnitUpload[j].REGION,
          auditTimestamp: moment().format('YYYY-MM-DD HH:MM:SS')
        })
      }
      console.log('jsonWorkUnit', this.JsonWorkUnit);
      this.workunitservice.workUnit(this.JsonWorkUnit)
        .subscribe(
          data => {alert('Work Unit Details Uploaded!')},
          error => console.log('Error', error)
        );
    }
    fileReader.readAsArrayBuffer(this.file);
  }


 
  onSubmit() {
    console.log('work Model',this.workModel);
    this.workunitservice.workUnit(JSON.parse('[' + JSON.stringify(this.workModel) + ']'))
      .subscribe(
        data =>{ console.log('Success!', data)},
        error => console.log('Error', error)
      );

  }

}
