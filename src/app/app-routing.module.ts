import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { UsertimesheetComponent } from './usertimesheet/usertimesheet.component';
import { PsamappingComponent } from './psamapping/psamapping.component';
import { WorkunitdetailComponent } from './workunitdetail/workunitdetail.component';
import { ViewusertimesheetComponent } from './viewusertimesheet/viewusertimesheet.component';
import { ViewtimesheetComponent } from './viewtimesheet/viewtimesheet.component';
import { ModifyusertimesheetComponent } from './modifyusertimesheet/modifyusertimesheet.component';
import {UserdashboardComponent} from './userdashboard/userdashboard.component';
import { CreatetimesheetComponent } from './createtimesheet/createtimesheet.component';


const routes: Routes = [
  {path : 'admin/:employee', component : AdminComponent},
  { path: 'admin/:employee/userprofile', component: UserprofileComponent},
  { path: 'admin/:employee/psamapping', component: PsamappingComponent},
  { path: 'admin/:employee/workunitdetail', component: WorkunitdetailComponent},
  { path: 'user/:employee', component: UserComponent },
  { path: 'home', component: HomeComponent },

  { path: 'loginuser', component: LoginuserComponent },
  { path: 'loginadmin', component: LoginadminComponent },
  { path: 'createtimesheet', component: CreatetimesheetComponent},
  { path: 'userdashboard/:employee', component: UserdashboardComponent},
  { path: 'usertimesheet/:employee/:periodDate', component: UsertimesheetComponent},
  { path: 'modifyusertimesheet/:employee/:periodDate', component: ModifyusertimesheetComponent },
  { path: 'viewtimesheet', component: ViewtimesheetComponent },
  { path: 'viewusertimesheet/:employee/:periodDate', component: ViewusertimesheetComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
