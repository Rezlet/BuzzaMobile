import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemSpecialComponent } from './food-item-special.component';

describe('FoodItemSpecialComponent', () => {
  let component: FoodItemSpecialComponent;
  let fixture: ComponentFixture<FoodItemSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItemSpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodItemSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
