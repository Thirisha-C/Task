import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-product',
  imports: [ReactiveFormsModule],
  templateUrl: './combine-product.html',
  styleUrl: './combine-product.css',
})
export class CombineProduct implements OnInit {

  search = new FormControl('');
  category = new FormControl('all');

  result = '';

  ngOnInit() {

    combineLatest([
      this.search.valueChanges,
      this.category.valueChanges
    ])
    .subscribe(([search, category]) => {
      this.result = `Search: ${search} | Category: ${category}`;
    });

  }
}
