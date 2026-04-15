import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-task.html',
  styleUrl: './edit-task.css',
})
export class EditTask implements OnInit
{
  taskForm!: FormGroup;
  taskId!: number;
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}
  ngOnInit()
  {
    this.taskForm = new FormGroup({
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      assignedTo: new FormControl('',Validators.required),
      priority: new FormControl('',Validators.required),
      dueDate: new FormControl('',Validators.required),
    });
    //get id 
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    //get task data
    this.taskService.tasks$.subscribe(data => {
      const task = data.find(t => t.id === this.taskId);
      if(task)
      {
        this.taskForm.patchValue(task);
      }
    });
  }

  //task update
  onUpdate()
  {
    this.submitted = true;
    if(this.taskForm.invalid)
      return;

    const updatedTask = {
      id: this.taskId,
      ...this.taskForm.value,
      status: 'Pending'
    };
    
    this.taskService.updateTask(updatedTask);
    alert("Task updated");
    this.router.navigate(['/taskList']);
  }
}
