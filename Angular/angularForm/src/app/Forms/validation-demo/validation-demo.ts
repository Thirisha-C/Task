import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-validation-demo',
  imports: [FormsModule, CommonModule],
  templateUrl: './validation-demo.html',
  styleUrl: './validation-demo.css',
})
export class ValidationDemo 
{
  task = {
    title: '',
    description: '',
    assignedTo: '',
    priority: '',
    dueDate: ''
  };

  tasks: any[] =[];
  addTask(form: any)
  {
    if(form.valid)
    {
      const newTask = {
        ...this.task,
        id: Date.now(),
        status: 'Pending'
      };
      this.tasks.push(newTask);
      alert('Task added');
      form.reset();
    }
    else
    {
      return;
    }
  }
}
