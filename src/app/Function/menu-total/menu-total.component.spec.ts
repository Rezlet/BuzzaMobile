import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTotalComponent } from './menu-total.component';

describe('MenuTotalComponent', () => {
  let component: MenuTotalComponent;
  let fixture: ComponentFixture<MenuTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
