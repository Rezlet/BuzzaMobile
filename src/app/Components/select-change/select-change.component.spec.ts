import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChangeComponent } from './select-change.component';

describe('SelectChangeComponent', () => {
  let component: SelectChangeComponent;
  let fixture: ComponentFixture<SelectChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
