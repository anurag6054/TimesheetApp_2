import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 public authorized="login";

 public modified: string;

 public userdata: string;

  constructor(private sharedservice: SharedService) { }

  ngOnInit() {
  }

  authorize()
  {
    console.log('authorized_before_modification=>', this.authorized);
    // this.modified = this.sharedservice.postData(this.authorized).subscribe(
    //   (res) => {
    //     this.userdata = res;
    //   });
    // console.log('After modified_authorized',this.userdata);
  }

}
