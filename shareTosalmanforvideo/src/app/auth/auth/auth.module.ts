import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StudentWaitingPagesComponent } from './student-waiting-pages/student-waiting-pages.component';


@NgModule({
  declarations: [
    AuthComponent,
    StudentWaitingPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
