import { Component,ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidenavService } from "./sidenav.service";
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {

  constructor(private router: Router, public authservice: AuthService) {
  }

  ngOnInit(){

    if (moment().format('DD/MM')== moment().endOf("week").subtract(2, 'd').format('DD/MM'))
    {
      this.authservice.sendEmail()
        .subscribe(
          data =>  console.log('Success!', data),
          error => console.log('Error', error)
        );

      }
    if (moment().format('DD/MM') == moment().endOf("week").subtract(1, 'd').format('DD/MM')) {
      this.authservice.sendFridayEmail(moment().endOf("week").subtract(1, 'd').format('YYYY-MM-DD'))
        .subscribe(
          data => console.log('Success!', data),
          error => console.log('Error', error)
        );

    }
  }
}
