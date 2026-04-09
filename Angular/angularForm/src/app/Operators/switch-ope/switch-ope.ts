import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-ope',
  imports: [CommonModule],
  templateUrl: './switch-ope.html',
  styleUrl: './switch-ope.css',
})
export class SwitchOpe {

   result: number[] = [];
  
    ngOnInit() {
       of(1, 2, 3)
    .pipe(
      switchMap(x => {
        return of(x*2)
      })
    )
    .subscribe(val => {
      this.result.push(val);
      console.log(val)
    });
    }
}
