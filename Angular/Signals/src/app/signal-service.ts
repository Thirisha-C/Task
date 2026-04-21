import { Injectable,signal,computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService 
{
  items = signal<number>(0);
  price = signal<number>(100);

  total = computed(() => this.items() * this.price());

  addItem() {
    this.items.update(v => v + 1);
  }
}