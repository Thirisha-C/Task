import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayDemo } from './share-replay-demo';

describe('ShareReplayDemo', () => {
  let component: ShareReplayDemo;
  let fixture: ComponentFixture<ShareReplayDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareReplayDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareReplayDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
