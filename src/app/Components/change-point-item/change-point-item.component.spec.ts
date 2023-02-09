import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePointItemComponent } from './change-point-item.component';

describe('ChangePointItemComponent', () => {
  let component: ChangePointItemComponent;
  let fixture: ComponentFixture<ChangePointItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePointItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
