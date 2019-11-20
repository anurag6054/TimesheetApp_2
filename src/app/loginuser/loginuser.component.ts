import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  username: string;
  password: string;

  public role: string;

  public authorized= "login";

  constructor(private sharedservice: SharedService,private router: Router, private authservice: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

login(){
  console.log('this is login cred', this.username, this.password);
  this.authservice.authUser(this.username,this.password)
    .subscribe((res) => {
      console.log(res);
      this.role= res;
      console.log("role_user", this.role);
      if (this.role == 'ADMIN' || this.role == 'USER' ){
        this.router.navigate(['userdashboard', this.username]);
      }
      else if(this.role ===  null){
        alert('Invalid Credentials! Please check your Username or Password');
      }
    });
  }

  keyUpFunction(event: any) {
    console.log('input_event', event);
    console.log('this is login cred', this.username, this.password);
    this.sharedservice.postData(this.authorized);

    this.authservice.authUser(this.username, this.password)
      .subscribe((res) => {
        console.log(res);
        this.role = res;
        console.log("role_user", this.role);
        if (this.role == 'ADMIN' || this.role == 'USER') {
          this.router.navigate(['userdashboard', this.username]);
        }
        else if (this.role === null) {
          alert('Invalid Credentials! Please check your Username or Password');
        }
      });
  }
  }

