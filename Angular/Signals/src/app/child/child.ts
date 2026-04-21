import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child 
{
  //input signal
  count = input<number>();

  //opt signal
  clicked = output<string>();

  send()
  {
    this.clicked.emit('Hello');
  }
}