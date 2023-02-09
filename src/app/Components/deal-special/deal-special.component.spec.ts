import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealSpecialComponent } from './deal-special.component';

describe('DealSpecialComponent', () => {
  let component: DealSpecialComponent;
  let fixture: ComponentFixture<DealSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
