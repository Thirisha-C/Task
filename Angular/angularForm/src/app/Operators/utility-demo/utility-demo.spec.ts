import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityDemo } from './utility-demo';

describe('UtilityDemo', () => {
  let component: UtilityDemo;
  let fixture: ComponentFixture<UtilityDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
