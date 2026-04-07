import { Component } from '@angular/core';
import { Dataservice } from '../../services/dataservice';
@Component({
  selector: 'app-reciever',
  imports: [],
  templateUrl: './reciever.html',
  styleUrl: './reciever.css',
})
export class Reciever {

  message1 = ''; 
  constructor(private service: Dataservice) {}
  
  ngOnInit() {
    this.service.message.subscribe(data => {
      this.message1 = data;
    });
  }
}
