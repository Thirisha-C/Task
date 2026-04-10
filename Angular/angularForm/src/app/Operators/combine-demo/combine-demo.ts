import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-demo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './combine-demo.html',
  styleUrl: './combine-demo.css',
})
export class CombineDemo implements OnInit{

  match = false;

  form = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  ngOnInit() {
    combineLatest([
      this.form.get('password')!.valueChanges,
      this.form.get('confirmPassword')!.valueChanges
    ])

    .subscribe(([pass, confirm]) => {
      this.match = pass === confirm;
    });
  }
}
