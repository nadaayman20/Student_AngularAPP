import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ShowStudentComponent } from './components/show-student/show-student.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Students" ,component:HomeComponent },
  {path:"Students/:id" ,component:ShowStudentComponent },
  {path:"AddStudent" ,component:AddStudentComponent },
  {path:"UpdateStudent/:id" ,component:UpdateStudentComponent },
  {path:"**",component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
