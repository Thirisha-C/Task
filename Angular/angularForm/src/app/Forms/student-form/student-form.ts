import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm{
  //Form group

  studentForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    skills: new FormArray([new FormControl('')])
  });

  //form builder

// constructor(private fb: FormBuilder){}
// studentForm = this.fb.group({
//   username: ['',Validators.required]
//   email: ['', Validators.required],
//   password: ['', Validators.required],
//   skills: this.fb.array([
//     this.fb.control('')
//   ])
// });

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
