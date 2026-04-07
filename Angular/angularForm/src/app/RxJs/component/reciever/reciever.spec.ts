import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reciever } from './reciever';

describe('Reciever', () => {
  let component: Reciever;
  let fixture: ComponentFixture<Reciever>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reciever]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reciever);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
