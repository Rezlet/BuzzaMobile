import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingNowComponent } from './booking-now.component';

describe('BookingNowComponent', () => {
  let component: BookingNowComponent;
  let fixture: ComponentFixture<BookingNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
