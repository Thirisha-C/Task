import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reciever1 } from './reciever1';

describe('Reciever1', () => {
  let component: Reciever1;
  let fixture: ComponentFixture<Reciever1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reciever1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reciever1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
