import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSub } from './behavior-sub';

describe('BehaviorSub', () => {
  let component: BehaviorSub;
  let fixture: ComponentFixture<BehaviorSub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
