import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDemo } from './filter-demo';

describe('FilterDemo', () => {
  let component: FilterDemo;
  let fixture: ComponentFixture<FilterDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
