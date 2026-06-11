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
  price = input<number>();

  //output signal
  add = output<string>();
  
  buy()
  {
    console.log('Button clicked');
    this.add.emit('Product added to Cart');
  }
}