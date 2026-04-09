import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOpe } from './switch-ope';

describe('SwitchOpe', () => {
  let component: SwitchOpe;
  let fixture: ComponentFixture<SwitchOpe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchOpe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchOpe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
