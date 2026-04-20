import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit
{

  totalTasks = 0;
  completedTasks = 0;
  pendingTasks = 0;

  constructor(private taskService: TaskService) {}
  
  ngOnInit() 
  {
    // 🔥 subscribe to task changes
    this.taskService.tasks$.subscribe(tasks => {

      // Total
      this.totalTasks = tasks.length;

      // Completed
      this.completedTasks = tasks.filter(t => t.status === 'Completed').length;

      // Pending
      this.pendingTasks = tasks.filter(t => t.status === 'Pending').length;
    });

  }
}