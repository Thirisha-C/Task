import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkDemo } from './fork-demo';

describe('ForkDemo', () => {
  let component: ForkDemo;
  let fixture: ComponentFixture<ForkDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForkDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
