import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm {
  studentForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    skills: new FormArray([new FormControl('')])
  });

  get skills(){
    return this.studentForm.get('skills') as FormArray;
  }
  addSkill(){
    this.skills.push(new FormControl(''));
  }
   onSubmit(){
    if(this.studentForm.valid){
      alert("Registration Success");
      console.log(this.studentForm.value);
    }
    else{
      alert("Fill all the details");
    }
  }
}
