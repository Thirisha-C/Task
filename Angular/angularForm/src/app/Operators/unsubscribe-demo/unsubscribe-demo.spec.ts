import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeDemo } from './unsubscribe-demo';

describe('UnsubscribeDemo', () => {
  let component: UnsubscribeDemo;
  let fixture: ComponentFixture<UnsubscribeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnsubscribeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribeDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
