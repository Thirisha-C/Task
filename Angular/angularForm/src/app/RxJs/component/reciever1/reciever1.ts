import { Component } from '@angular/core';
import { Dataservice } from '../../services/dataservice';

@Component({
  selector: 'app-reciever1',
  imports: [],
  templateUrl: './reciever1.html',
  styleUrl: './reciever1.css',
})
export class Reciever1 {
  
  message1 = ''; 
  constructor(private service: Dataservice) {}

  ngOnInit() {
    this.service.message.subscribe(data => {
      this.message1 = data;
    });
  }
}
