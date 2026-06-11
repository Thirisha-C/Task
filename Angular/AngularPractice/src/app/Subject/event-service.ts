import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService 
{
  refresh$ = new Subject<void>();

  triggerRefresh()
  {
    this.refresh$.next();
  }
}