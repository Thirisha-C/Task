import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../task-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask 
{
  taskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    assignedTo: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required) 
  });
  submitted = false;
  constructor(
    private router: Router, 
    private taskService: TaskService
  ){}
  onSubmit()
  {
    this.submitted = true;
    if(this.taskForm.invalid) 
    {
      console.log('Form invalid');
      return;
    }
      console.log('Form valid');
    const newTask = {
      id: Date.now(),  //unique id
      ...this.taskForm.value,
      status: 'Pending'
    };
    this.taskService.addTask(newTask);
    alert('Task added');
    this.router.navigate(['/taskList']);
  }
  get title()
  {
    return this.taskForm.get('title');
  }
  get description()
  {
    return this.taskForm.get('description');
  }
  get assignedTo()
  {
    return this.taskForm.get('assignedTo');
  }
  get priority()
  {
    return this.taskForm.get('priority');
  }
  get dueDate()
  {
    return this.taskForm.get('dueDate');
  }
 }
