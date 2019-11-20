import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public resultuser: any;
  public userdata = [];
  userdata1: string;
  public userdata2 = [];

  resultdata: string;
  resultdata1 = [];


  constructor(private sidenav: SidenavService, private route: ActivatedRoute,
    private userdataservice: UserdataService, private router: Router) {
    this.route.params.subscribe((result) => {
      console.log('result!', result);
      this.resultuser = result;
      console.log('resultuser!', this.resultuser);
      this.userdataservice.sendUserData(result['employee']).subscribe(
        (res) => {
          this.userdata = res;
          console.log('userdata', this.userdata);
          this.userdata1 = JSON.stringify(this.userdata);
          this.userdata2 = JSON.parse('[' + this.userdata1 + ']');
          console.log('userdata2', this.userdata2);
        });

      this.resultdata = JSON.stringify(result);
      this.resultdata1 = JSON.parse('[' + this.resultdata + ']');
      console.log('resultdata1', this.resultdata1);
    });
   }

  ngOnInit() {
  }
  toggleSidenav() {
    this.sidenav.toggle();
  }

  User()
  {
    this.router.navigate(['admin', this.resultuser['employee'], 'userprofile']);
  }

  psaMap() {
    this.router.navigate(['admin', this.resultuser['employee'], 'psamapping']);
  }

  Work() {
    this.router.navigate(['admin',this.resultuser['employee'],'workunitdetail']);
  }

}
