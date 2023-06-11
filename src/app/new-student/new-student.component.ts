import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent {
  constructor(private studentServiceObject:StudentService,private routerObject:Router){}
  regObj:Student={id:"",rollno:"",firstName:"",lastName:"",address:"",email:"",contactNo:"",course:"",education:""}

  save()
  {
    let obj:Student={id:"",rollno:this.regObj.rollno,firstName:this.regObj.firstName,
                  lastName:this.regObj.lastName,address:this.regObj.address,
                  email:this.regObj.email,contactNo:this.regObj.contactNo,
                  course:this.regObj.course,education:this.regObj.education}
      this.studentServiceObject.addNewStudent(obj).subscribe((r)=>{
        this.routerObject.navigate(['Home'])
      })
  }

}
