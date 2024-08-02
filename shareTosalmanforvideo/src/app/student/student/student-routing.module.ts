import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentQrcodeComponent } from '../student-qrcode/student-qrcode.component';
import { WaitingPagesComponent } from '../waiting-pages/waiting-pages.component';

const routes: Routes = [
  { path: 'qr-scanner', component:StudentQrcodeComponent, },
  { path: 'waiting-page', component:WaitingPagesComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
