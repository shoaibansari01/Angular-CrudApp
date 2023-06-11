import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClientObject:HttpClient) { }
  loginCheck(username:string,password:string)
  {
    if(username==='Admin' && password==='admin123')
    {
      localStorage.setItem("user","admin");
      localStorage.setItem("loginStatus","login");
      return true;
    }
    else
    {
      return false;
    }
  }
  getAllStudents():Observable<Student[]>
  {
    return this.httpClientObject.get<Student[]>('http://localhost:4564/api/students');
  }
  addNewStudent(obj:Student)
  {
    return this.httpClientObject.post('http://localhost:4564/api/students',obj);
  }
  getStudent(id:string):Observable<Student>
  {
    return this.httpClientObject.get<Student>('http://localhost:4564/api/students/'+id);
  }
  updateStudent(obj:Student,id:string)
  {
    return this.httpClientObject.put('http://localhost:4564/api/students/'+id,obj);
  }
  deleteStudent(id:string)
  {
    return this.httpClientObject.delete('http://localhost:4564/api/students/'+id);
  }
}

