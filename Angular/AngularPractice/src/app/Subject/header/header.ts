import { Component } from '@angular/core';
import { EventService } from '../event-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header
{
  constructor(private eventService: EventService) {}

  onRefresh() {
    console.log("Refresh button clicked");
    this.eventService.triggerRefresh();
  }
}
