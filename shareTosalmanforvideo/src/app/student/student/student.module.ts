import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentSidebarComponent } from '../student-sidebar/student-sidebar.component';
import { StudentNavComponent } from '../student-nav/student-nav.component';
import { StudentFooterComponent } from '../student-footer/student-footer.component';
import { QRCodeModule } from 'angularx-qrcode';
import { StudentQrcodeComponent } from '../student-qrcode/student-qrcode.component';
import { WaitingPagesComponent } from '../waiting-pages/waiting-pages.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentSidebarComponent,
    StudentNavComponent,
      StudentFooterComponent,
      StudentQrcodeComponent,
      WaitingPagesComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    QRCodeModule,
  ]
})
export class StudentModule { }
