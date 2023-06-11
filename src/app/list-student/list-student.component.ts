import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Student} from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  studArr:Array<Student>=[];
  constructor(private studentServiceObject:StudentService,private routerObject:Router)
{
}
ngOnInit(): void {
    this.AllStudents()
}
AllStudents()
{
  this.studentServiceObject.getAllStudents().subscribe((rec)=>{
    this.studArr=rec
  })
}
deleteStudent(id:string)
{
  this.studentServiceObject.deleteStudent(id).subscribe((r)=>{
    this.AllStudents()
  })
}
editStudent (id:string)
{
  this.routerObject.navigate(['editStudent',id])
}
}
