import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourVouchersComponent } from './your-vouchers.component';

describe('YourVouchersComponent', () => {
  let component: YourVouchersComponent;
  let fixture: ComponentFixture<YourVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourVouchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
