import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Dataservice {

  private subService = new Subject<string>();
  message = this.subService.asObservable();
  sendMessage(msg: string) {
    this.subService.next(msg); 
  }
}
