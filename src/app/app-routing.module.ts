import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginComponent } from './login/login.component';
import { LoginchkGuard } from './loginchk.guard';
import { LogoutComponent } from './logout/logout.component';
import { NewStudentComponent } from './new-student/new-student.component';

const routes: Routes = [{path:'Home',canActivate:[LoginchkGuard],component:HomeComponent},
                        {path:'NewStudent',canActivate:[LoginchkGuard],component:NewStudentComponent},
                        {path:'ViewStudent',canActivate:[LoginchkGuard],component:ListStudentComponent},
                        {path:'editStudent/:id',canActivate:[LoginchkGuard],component:EditStudentComponent},
                        {path:'Login',component:LoginComponent},
                        {path:'Logout',canActivate:[LoginchkGuard],component:LogoutComponent},
                       {path:'',redirectTo:'Login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
