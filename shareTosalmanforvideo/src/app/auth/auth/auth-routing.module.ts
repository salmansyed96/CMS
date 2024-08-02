import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ForgetpasswordComponent } from '../forgetpassword/forgetpassword.component';
import { SetpasswordComponent } from '../setpassword/setpassword.component';
import { StudentWaitingPagesComponent } from './student-waiting-pages/student-waiting-pages.component';

const routes: Routes = [
  // { path: '', component: AuthComponent },
  {path:"",component:LoginComponent},{
    path:"register",component:RegisterComponent
  },{
    path:"forget-pass",component:ForgetpasswordComponent
  },
  {
    path:"reset-password",component:SetpasswordComponent
  },
  {
    path:"student-waiting-page",component:StudentWaitingPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
