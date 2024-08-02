import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { NewTenantComponent } from './admin/onboard/new-tenant/new-tenant.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { SetpasswordComponent } from './auth/setpassword/setpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { UpdateStaffComponent } from './admin/update-staff/update-staff.component';
import { StaffByIdComponent } from './admin/staff-by-id/staff-by-id.component';
import { UpdateInitalStudentComponent } from './student/update-inital-student/update-inital-student.component';
import { QRCodeModule  } from 'angularx-qrcode';
import { StinitNavbarComponent } from './student/update-inital-student/stinit-navbar/stinit-navbar.component';
import { StinitFooterComponent } from './student/update-inital-student/stinit-footer/stinit-footer.component';
// import { ContactUsComponent } from './admin/contact-us/contact-us.component';
// import { WaitingPagesComponent } from './student/waiting-pages/waiting-pages.component';
// import { UpdateBatchAllotedComponent } from './admin/update-batch-alloted/update-batch-alloted.component';
// import { UpdateStudentAllotedComponent } from './admin/update-student-alloted/update-student-alloted.component';
// import { UpdateCourseComponent } from './admin/update-course/update-course.component';
// import { AdminUpdateStudentComponent } from './admin/admin-update-student/admin-update-student.component';
// import { AdminUpdateStudentComponent } from './admin-update-student/admin-update-student.component';
// import { BatchByIdComponent } from './admin/batch-by-id/batch-by-id.component';
// import { StudentAllotedByIdComponent } from './admin/student-alloted-by-id/student-alloted-by-id.component';
// import { StudentIdComponent } from './admin/student-id/student-id.component';
// import { StudentQrcodeComponent } from './student/student-qrcode/student-qrcode.component';
// import { StudentNavComponent } from './student/student-nav/student-nav.component';
// import { StudentFooterComponent } from './student/student-footer/student-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewTenantComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    SetpasswordComponent,
    // UpdateStaffComponent,
    StaffByIdComponent,
    UpdateInitalStudentComponent,
    StinitNavbarComponent,
    StinitFooterComponent,
    // ContactUsComponent,
    // WaitingPagesComponent,
    // UpdateBatchAllotedComponent,
    // UpdateStudentAllotedComponent,
    
    // AdminUpdateStudentComponent,

    // StudentIdComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    QRCodeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
