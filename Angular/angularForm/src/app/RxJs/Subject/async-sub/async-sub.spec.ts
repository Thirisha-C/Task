import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSub } from './async-sub';

describe('AsyncSub', () => {
  let component: AsyncSub;
  let fixture: ComponentFixture<AsyncSub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncSub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
