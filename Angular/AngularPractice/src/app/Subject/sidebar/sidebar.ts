import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit 
{
  constructor(private eventService: EventService) { }

  status = "Idle";

  ngOnInit() {
    this.eventService.refresh$.subscribe(() => {
      this.status = "Updated!";
      console.log("Sidebar: Updated");
    });
  }
}