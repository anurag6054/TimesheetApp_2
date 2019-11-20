import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Userprofile } from '../userprofile';
import {UserprofileService} from '../userprofile.service';
// import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
// import { FileUploadModule } from "ng2-file-upload"; 
import * as moment from 'moment';
import * as XLSX from 'xlsx';



export interface Region {
  value: string;

}
export interface Food {
  value: string;

}


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {



  public user:any;
  public userArray: Array<any>= [];

  public fileToUpload: File = null;

  // public uploader: FileUploader;

  public userModel: any;

  public Logo: string;

  public userProfileUpload: any;

  public JsonUserProfile: Array<{userId: string, firstName: string,lastName: string, region: string, authCode: string, role: string, auditTimestamp:string
  }>= [];

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
  
  region: Region[] = [
    { value: 'NA' },
    { value: 'FRANCE' },

  ];


  constructor(private userprofileservice: UserprofileService,
    public snackBar: MatSnackBar) { }
openSnackBar(message: string) {
    this.snackBar.open(message, 'Saved!', {
      duration: 2000,
    });
  }

  ngOnInit() {
  this.userModel = new Userprofile(' ', ' ', ' ',' ',' ',' ', moment().format('YYYY-MM-DD HH:MM:SS'));

   

  

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
      this.userProfileUpload = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      console.log('upload_user', this.userProfileUpload);
      for(var j=0;j<this.userProfileUpload.length;j++)
      {
        this.JsonUserProfile.push({userId: this.userProfileUpload[j].USER_ID,
          firstName: this.userProfileUpload[j].FIRST_NAME, lastName: this.userProfileUpload[j].LAST_NAME,
          region: this.userProfileUpload[j].REGION,
          authCode: this.userProfileUpload[j].AUTH_CODE, role: this.userProfileUpload[j].ROLE,
          auditTimestamp: moment().format('YYYY-MM-DD HH:MM:SS') })
      }
      console.log('jsonUserProfile', this.JsonUserProfile);
      this.userprofileservice.userProfile(this.JsonUserProfile)
        .subscribe(
        data => { alert('User Details Uploaded!') },
          error => console.log('Error', error)
        );
    }
    fileReader.readAsArrayBuffer(this.file);
  }

 






  onSubmit() {

    console.log(this.userArray);
    this.userprofileservice.userProfile(JSON.parse('['+JSON.stringify(this.userModel)+']'))
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error', error)
    );
  }

}
