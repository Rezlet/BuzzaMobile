import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourVoucherItemComponent } from './your-voucher-item.component';

describe('YourVoucherItemComponent', () => {
  let component: YourVoucherItemComponent;
  let fixture: ComponentFixture<YourVoucherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourVoucherItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourVoucherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
