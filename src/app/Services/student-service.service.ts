import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private myClient:HttpClient) {}
  private BaseURL = "http://localhost:3000/Students";

  GetAllStudents(){
    return this.myClient.get(this.BaseURL);
  }

  GetById(id:number){
    return this.myClient.get(`${this.BaseURL}/${id}`);
  }

  AddStudent(NewStudent:any){
    return this.myClient.post(this.BaseURL,NewStudent);
  }

  DeleteStudent(id:any){
    return this.myClient.delete(`${this.BaseURL}/${id}`);
  }

  EditStudent(id:any,NewStudent:any){
    return this.myClient.put(`${this.BaseURL}/${id}`,NewStudent);
  }
}
