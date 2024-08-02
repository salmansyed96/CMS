import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AuthComponent } from './auth/auth/auth.component';
import { UpdateInitalStudentComponent } from './student/update-inital-student/update-inital-student.component';
import { StudentComponent } from './student/student/student.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { StudentGuard } from './student.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./auth/auth/auth.module').then((m) => m.AuthModule),
     
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin/admin.module').then((m) => m.AdminModule),
    canActivate : [AuthGuard,AdminGuard]
  },

  {
    path: 'student',
    component: StudentComponent,
    loadChildren: () =>
      import('./student/student/student.module').then((m) => m.StudentModule),
    canActivate: [AuthGuard,StudentGuard] 
  },
  {
    path: 'student-initial-update',
    component: UpdateInitalStudentComponent,
    canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
