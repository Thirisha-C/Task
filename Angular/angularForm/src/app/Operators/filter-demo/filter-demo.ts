import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter-demo',
  imports: [CommonModule],
  templateUrl: './filter-demo.html',
  styleUrl: './filter-demo.css',
})
export class FilterDemo implements OnInit {
    filterNum: number[] = [];

     ngOnInit() {
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        filter((val) => {
          return val % 2 == 0;
        })
      )
      .subscribe(res => {
        console.log(res);           
        this.filterNum.push(res); 
      });
  }
}
