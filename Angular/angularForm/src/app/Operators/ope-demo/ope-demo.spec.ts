import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeDemo } from './ope-demo';

describe('OpeDemo', () => {
  let component: OpeDemo;
  let fixture: ComponentFixture<OpeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
