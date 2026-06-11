import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-skills-form',
  imports: [ReactiveFormsModule, CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './skills-form.html',
  styleUrl: './skills-form.css',
})
export class SkillsForm implements OnInit 
{
    studentForm!: FormGroup;
    isSubmitted = false;
    isLoading = signal(true);

  constructor(private fb: FormBuilder) { }

  ngOnInit()
  {

  this.studentForm = this.fb.group({
    name: [''],
    city: [''],
    skills: this.fb.array([
      this.fb.control('')
    ])
  });
   setTimeout(() => {
    this.isLoading.set(false);
  }, 1000);
}

  get skills(): FormArray 
  {
  return this.studentForm.get('skills') as FormArray;
  }

  // addSkill() 
  // {
  // this.skills.push(this.fb.control(''));
  // }

addSkill(index: number) 
{
  this.skills.insert(
    index + 1,
    this.fb.control('')
  );
}

removeSkill(index: number) 
{
  if(this.skills.length >1)
  {
  this.skills.removeAt(index);
  }
}

submitForm() 
{
  console.log(this.studentForm.value);
  this.isSubmitted = true;
  alert('Form submitted successfully');
}
}
