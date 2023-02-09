import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectByCategoryComponent } from './select-by-category.component';

describe('SelectByCategoryComponent', () => {
  let component: SelectByCategoryComponent;
  let fixture: ComponentFixture<SelectByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
