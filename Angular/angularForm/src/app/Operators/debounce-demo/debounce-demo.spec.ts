import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceDemo } from './debounce-demo';

describe('DebounceDemo', () => {
  let component: DebounceDemo;
  let fixture: ComponentFixture<DebounceDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
