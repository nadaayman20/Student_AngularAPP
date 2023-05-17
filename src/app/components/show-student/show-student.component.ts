import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { StudentServiceService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  Id: number;
  student: any;
  constructor(myRoute: ActivatedRoute,private StudentsService:StudentServiceService,private router: Router) {
    this.Id = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.StudentsService.GetById(this.Id).subscribe({
      next:data => this.student = data,
      error:err => console.log(err)
    });
  }

}
