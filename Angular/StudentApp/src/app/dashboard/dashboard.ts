import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard 
{
  totalTasks = 0;
  completedTasks = 0;
  pendingTasks = 0;
}
