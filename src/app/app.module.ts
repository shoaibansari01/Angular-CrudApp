import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginchkGuard } from './loginchk.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListStudentComponent,
    NewStudentComponent,
    EditStudentComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [AppRoutingModule,LoginchkGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
