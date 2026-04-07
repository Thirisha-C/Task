import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDemo } from './sub-demo';

describe('SubDemo', () => {
  let component: SubDemo;
  let fixture: ComponentFixture<SubDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
