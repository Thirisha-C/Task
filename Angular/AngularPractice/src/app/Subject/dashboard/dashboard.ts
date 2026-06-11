import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit 
{
  constructor(private eventService: EventService) { }

  message = "Waiting...";

  ngOnInit() {
    this.eventService.refresh$.subscribe(() => {
      this.message = "Dashboard refreshed";
      console.log("Dashboard: Reload data");
      this.loadData();
    });
  }

  loadData() {
    // API call panna place
    console.log("Dashboard API called");
  }
}