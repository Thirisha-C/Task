import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsDemo } from './obs-demo';

describe('ObsDemo', () => {
  let component: ObsDemo;
  let fixture: ComponentFixture<ObsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
