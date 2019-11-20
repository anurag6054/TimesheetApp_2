import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatNativeDateModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatListModule, MatTreeNodeOutlet
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FileSelectDirective } from "ng2-file-upload"; 
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { UserdashboardRoutingModule } from './userdashboard/userdashboard-routing.module';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { UsertimesheetComponent } from './usertimesheet/usertimesheet.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PsamappingComponent } from './psamapping/psamapping.component';
import { WorkunitdetailComponent } from './workunitdetail/workunitdetail.component';
import { ViewusertimesheetComponent } from './viewusertimesheet/viewusertimesheet.component';
import { PsamappingService } from './psamapping.service';
import { UserprofileService } from './userprofile.service';
import { WorkunitService } from './workunit.service';
import { UsertimesheetdataService } from './usertimesheetdata.service';
import { ViewusertimesheetdataService } from './viewusertimesheetdata.service';
import { UserService } from './user.service';
import { UsercredentialService } from './usercredential.service';
import { ViewtimesheetComponent } from './viewtimesheet/viewtimesheet.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MydialogComponent } from './mydialog/mydialog.component';
import { ModifyusertimesheetComponent } from './modifyusertimesheet/modifyusertimesheet.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { CreatetimesheetComponent } from './createtimesheet/createtimesheet.component';
import { SavedtimesheetComponent } from './savedtimesheet/savedtimesheet.component';
@NgModule({
  declarations: [
    FileSelectDirective,
    AppComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    LoginuserComponent,
    LoginadminComponent,
    UsertimesheetComponent,
    SidenavComponent,
    UserprofileComponent,
    PsamappingComponent,
    WorkunitdetailComponent,
    ViewusertimesheetComponent,
    ViewtimesheetComponent,
    MydialogComponent,
    ModifyusertimesheetComponent,
    UserdashboardComponent,
    CreatetimesheetComponent,
    SavedtimesheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserdashboardRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [MydialogComponent,UsertimesheetComponent],
  providers: [PsamappingService, UserprofileService, WorkunitService, UsercredentialService,
    UsertimesheetdataService, ViewusertimesheetdataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
