import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineProduct } from './combine-product';

describe('CombineProduct', () => {
  let component: CombineProduct;
  let fixture: ComponentFixture<CombineProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
