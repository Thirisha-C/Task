import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails implements OnInit
{
  task: any;
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}
  
  ngOnInit()
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.tasks$.subscribe(data => {
      this.task = data.find(t => t.id === id);
    });
  }
  markComplete()
  {
    this.taskService.markComplete(this.task.id);
    alert("Task marked as completed");
    this.router.navigate(['/taskList']);
  }
  goBack()
  {
    this.router.navigate(['/taskList']);
  }
}
