import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEffect } from './cart-effect';

describe('CartEffect', () => {
  let component: CartEffect;
  let fixture: ComponentFixture<CartEffect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartEffect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartEffect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
