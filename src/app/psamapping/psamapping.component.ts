import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PsaId } from '../psaId';
import { Psamapping } from '../psamapping';
import { PsamappingService } from '../psamapping.service';
import { ActivatedRoute } from "@angular/router";
import { UserdataService } from '../userdata.service';

import * as moment from 'moment';
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
  selector: 'app-psamapping',
  templateUrl: './psamapping.component.html',
  styleUrls: ['./psamapping.component.css']
})
export class PsamappingComponent implements OnInit {

  public psaMappingUpload: any;


  public JsonPsaMapping: Array<{
    psaId: Object, psaDesc: string, userId: string, auditTimestamp: string}> = [];

  arrayBuffer: any;
  file: File;

  public userId: string;

  psaIdModel = new PsaId(' ',' ',' ',' ');

  psaModel = new Psamapping(this.psaIdModel,' ', ' ', moment().format('YYYY-MM-DD HH:MM:SS'));

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
    { value: 'FRANCE' },
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

  constructor(private psamappingservice: PsamappingService,
    public snackBar: MatSnackBar, private route: ActivatedRoute,
    private userdataservice: UserdataService) {
    this.route.params.subscribe((result) => {
      console.log('result!', result);
      this.resultuser = result;
      console.log('resultuser!', this.resultuser);

      // this.userdataservice.sendUserData(result['employee']).subscribe(
      //   (res) => {
      //     this.userdata = res;
      //     console.log('userdata', this.userdata);
      //     this.userdata1 = JSON.stringify(this.userdata);
      //     this.userdata2 = JSON.parse('[' + this.userdata1 + ']');
      //     console.log('userdata2', this.userdata2);
      //   });
    });
    }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Saved!', {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.userId = this.resultuser['employee'];

    this.psaModel.userId = this.resultuser['employee'];
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
      this.psaMappingUpload = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log('upload_psa', this.psaMappingUpload);
      for (var j = 0; j < this.psaMappingUpload.length; j++) {

        this.JsonPsaMapping.push({
          psaId: {
            psaCode: this.psaMappingUpload[j].PSA_CODE,
            systemType: this.psaMappingUpload[j].SYSTEM_TYPE,
            subSystemType: this.psaMappingUpload[j].SUB_SYSTEM_TYPE,
            recType: this.psaMappingUpload[j].REC_TYPE
          },
          psaDesc: this.psaMappingUpload[j].PSA_DESC,
          userId: this.resultuser['employee'],
          auditTimestamp: moment().format('YYYY-MM-DD HH:MM:SS')
        })
      }
      console.log('jsonUserProfile', this.JsonPsaMapping);
      this.psamappingservice.psaMap(this.JsonPsaMapping)
        .subscribe(
          data => console.log('Success!', data),
          error => console.log('Error', error)
        );
    }
    fileReader.readAsArrayBuffer(this.file);
  }
  onSubmit() {
    this.psamappingservice.psaMap(JSON.parse('[' + JSON.stringify(this.psaModel) + ']'))
      .subscribe(
      data => { alert('Psa Mapping Details Uploaded!') },
        error => console.log('Error', error)
      );
  }

}
