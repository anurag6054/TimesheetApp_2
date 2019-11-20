import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  public resultuser: any;
  public userdata = [];
  userdata1: string;
  public userdata2 = [];

  constructor(private route: ActivatedRoute, private router: Router,
    private userdataservice: UserdataService) {
    this.route.params.subscribe((result) => {
      console.log('result!', result);
      this.resultuser = result;
    });

    this.userdataservice.sendUserData(this.resultuser['employee']).subscribe(
      (res) => {
        this.userdata = res;
        console.log('userdata', this.userdata);
        this.userdata1 = JSON.stringify(this.userdata);
        this.userdata2 = JSON.parse('[' + this.userdata1 + ']');
        console.log('userdata2', this.userdata2);
      });
   }

  ngOnInit() {
  }

  createTimesheet(){
    this.router.navigate(['user', this.resultuser['employee']]);
  }

}
