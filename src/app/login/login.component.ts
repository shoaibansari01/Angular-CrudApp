import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private studentServiceObject:StudentService,private routerObject:Router){}
  login(unm:string,pass:string)
  {
    if(this.studentServiceObject.loginCheck(unm,pass))
    {
      this.routerObject.navigate(['Home'])
    }
    else
    {
      this.routerObject.navigate(['Login'])
    }
  }
}
