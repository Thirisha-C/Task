import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-form',
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.html',
  styleUrl: './search-form.css',
})
export class SearchForm implements OnInit
{
  search = new FormControl('');
  result: string='';
ngOnInit()
{
  this.search.valueChanges
  .pipe(
    debounceTime(500)
  )
  .subscribe(value => {
    this.result = value?? '';
    console.log(value);
  })
}
}
