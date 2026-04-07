import { Component } from '@angular/core';
import { Dataservice } from '../../services/dataservice';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sender',
  imports: [FormsModule],
  templateUrl: './sender.html',
  styleUrl: './sender.css',
})
export class Sender {

  msg = '';
  constructor(private service: Dataservice) {}
  
  send() {
    this.service.sendMessage(this.msg);
    this.msg = '';
  }
}
