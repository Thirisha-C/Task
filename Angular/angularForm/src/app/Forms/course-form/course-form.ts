import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm implements OnInit {
  course = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
    
    ngOnInit() {
      //valueChange
      this.course.valueChanges.subscribe(value => {
        console.log("Value: ", value)
      });

      //valuchange (username)
      this.course.get('username')?.valueChanges.subscribe(V => {
        console.log("Usrname Value: ", V);
      });

       //statusChange
      this.course.statusChanges.subscribe(status => {
        console.log("Status: ", status)
      });

      //statusChange (username)
      this.course.get('username')?.statusChanges.subscribe(S => {
        console.log("Status: ", S);
      });
    }
    onSubmit(){
        if(this.course.valid){
          alert("Form submitted");
        }
      }
}
