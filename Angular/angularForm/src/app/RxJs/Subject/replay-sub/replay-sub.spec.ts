import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySub } from './replay-sub';

describe('ReplaySub', () => {
  let component: ReplaySub;
  let fixture: ComponentFixture<ReplaySub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaySub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
