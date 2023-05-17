import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/Services/student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  Validation = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  student = { name: '', email: '' };
  constructor(private StudentsService:StudentServiceService, private router: Router) {}

  get EmailValid(){
    return this.Validation.controls["email"].valid;
  }

  get NameValid(){
    return this.Validation.controls["name"].valid;
  }
  Add() {
    if (this.Validation.valid) {
      this.StudentsService.AddStudent(this.student).subscribe({
        next: () => {
          this.router.navigate(['/Students']);
        },
      });

    }

  }

}
