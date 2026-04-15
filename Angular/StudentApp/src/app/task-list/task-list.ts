import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList implements OnInit 
{
  tasks: any[]=[];
  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}
  ngOnInit()
  {
    //get the data from service
    this.taskService.tasks$.subscribe(data => {
      this.tasks=data;
    }) 
  }
  //delete
  deleteTask(id: number)
  {
    if(confirm('Are you want do delete'))
    {
      this.taskService.deleteTask(id);
    }
  }
  //view
  viewTask(id: number)
  {
    console.log('View clickedd', id);
    this.router.navigate(['/taskDetails', id]);
  }
  //edit
  editTask(id: number)
  {
    console.log('Edit clicked', id);
    this.router.navigate(['/editTask', id]);
  }
}
