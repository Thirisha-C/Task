import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-sub-demo',
  imports: [FormsModule],
  templateUrl: './sub-demo.html',
  styleUrl: './sub-demo.css',
})
export class SubDemo implements OnInit {

  mySub = new Subject<string>();
  message = '';
  user1 = '';
  user2 = '';
  user3 = '';
  ngOnInit() {
    //user1
    this.mySub.subscribe(data => {
      this.user1 = data;
    });
    this.mySub.subscribe(data => {
      this.user2 = data;
    });
    this.mySub.subscribe(data => {
      this.user3 = data;
    });
  }

  sendData()
  {
    this.mySub.next(this.message);
  }
}
