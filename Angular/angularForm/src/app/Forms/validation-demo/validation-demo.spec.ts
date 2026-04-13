import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDemo } from './validation-demo';

describe('ValidationDemo', () => {
  let component: ValidationDemo;
  let fixture: ComponentFixture<ValidationDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
