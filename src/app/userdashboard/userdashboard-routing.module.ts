import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard.component';
import { CreatetimesheetComponent } from '../createtimesheet/createtimesheet.component';
import { UserComponent } from '../user/user.component';

const routes: Routes = [

    { path: 'createtimesheet', component: CreatetimesheetComponent },
    {
        path: 'userdashboard/:employee', component: UserdashboardComponent,
        children: [
          { path: 'user/:employee', component: UserComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserdashboardRoutingModule { }
