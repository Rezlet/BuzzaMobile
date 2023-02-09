import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingItemComponent } from './outstanding-item.component';

describe('OutstandingItemComponent', () => {
  let component: OutstandingItemComponent;
  let fixture: ComponentFixture<OutstandingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
