import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/Services/student-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private StudentsService:StudentServiceService){}
  Students:any;

  ngOnInit(): void {
    this.StudentsService.GetAllStudents().subscribe({
      next: data => this.Students = data,
      error: err => console.log(err)
    })

    this.Students
  }

  DeleteStudent(value:number){
    if(confirm(`Do You Want To Delete Student No. ${value}`))
    {
      this.StudentsService.DeleteStudent(value).subscribe({
        next: () => this.Students =  this.RemoveObjectWithId(this.Students,value),
        error: err => console.log(err)
      })
    }
  }

  RemoveObjectWithId(arr:any, id:number) {
    const objWithIdIndex = arr.findIndex((obj:any) => obj.id == id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }

    return arr;
  }

}
