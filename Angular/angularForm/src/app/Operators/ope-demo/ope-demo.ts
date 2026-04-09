import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { map, of} from 'rxjs';

@Component({
  selector: 'app-ope-demo',
  imports: [CommonModule],
  templateUrl: './ope-demo.html',
  styleUrl: './ope-demo.css',
})
export class OpeDemo {
  result: number[] = [];

  ngOnInit() {
     of(1, 2, 3)
  .pipe(
    map(x => x*10)
  )
  .subscribe(val => {
    this.result.push(val);
    console.log(val)
  });
  }
}