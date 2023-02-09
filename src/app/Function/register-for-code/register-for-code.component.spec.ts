import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForCodeComponent } from './register-for-code.component';

describe('RegisterForCodeComponent', () => {
  let component: RegisterForCodeComponent;
  let fixture: ComponentFixture<RegisterForCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterForCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterForCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
