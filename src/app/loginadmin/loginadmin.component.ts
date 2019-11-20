import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  username: string;
  password: string;

  public role: string;

  public authorized= 'login';

  constructor(private sharedservice: SharedService,private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }



  login() {
    console.log('this is login cred', this.username, this.password);
    this.authservice.authUser(this.username, this.password)
      .subscribe((res) => {
        console.log(res);
        this.role= res;
        console.log("role_admin",this.role)

        if (this.role == 'ADMIN' ) {
          this.router.navigate(['admin', this.username]);
        }
        else if (this.role == 'USER') {
          alert('You are not an ADMIN and not authorized to view this page!');
        }
        else if (this.role === null) {
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
        console.log("role_admin", this.role)

        if (this.role == 'ADMIN') {
          this.router.navigate(['admin', this.username]);
        }
        else if (this.role == 'USER') {
          alert('You are not an ADMIN and not authorized to view this page!');
        }
        else if (this.role === null) {
          alert('Invalid Credentials! Please check your Username or Password');
        }
      });
  }

}
