import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceFoodComponent } from './introduce-food.component';

describe('IntroduceFoodComponent', () => {
  let component: IntroduceFoodComponent;
  let fixture: ComponentFixture<IntroduceFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
