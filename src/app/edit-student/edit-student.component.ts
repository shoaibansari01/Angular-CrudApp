import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  regObj:Student={id:"",rollno:"",firstName:"",lastName:"",address:"",email:"",contactNo:"",course:"",education:""}
  constructor(private studentServiceObject:StudentService,
              private routerObject:Router,private activeRouterObject:ActivatedRoute){}
  ngOnInit(): void {
      this.activeRouterObject.params.subscribe((p)=>{
        this.studentServiceObject.getStudent(p['id']).subscribe((rec)=>{
          this.regObj=rec
        })
      })
  }
  save()
  {
    let obj:Student={id:"",rollno:this.regObj.rollno,firstName:this.regObj.firstName,
                  lastName:this.regObj.lastName,address:this.regObj.address,
                  email:this.regObj.email,contactNo:this.regObj.contactNo,
                  course:this.regObj.course,education:this.regObj.education}
    this.studentServiceObject.updateStudent(obj,this.regObj.id).subscribe((r)=>{
      this.routerObject.navigate(['Home'])
    })
  }
}
