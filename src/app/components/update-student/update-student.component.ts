import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { StudentServiceService } from 'src/app/Services/student-service.service';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  Validation = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });


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

  get EmailValid(){
    return this.Validation.controls["email"].valid;
  }

  get NameValid(){
    return this.Validation.controls["name"].valid;
  }
  Update() {
    if (this.Validation.valid) {
      this.StudentsService.EditStudent(this.Id,this.student).subscribe({
        next: () => {
          this.router.navigate(['/Students']);
        },
      });

    }

  }
}
