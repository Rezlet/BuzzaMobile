import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceDealComponent } from './nice-deal.component';

describe('NiceDealComponent', () => {
  let component: NiceDealComponent;
  let fixture: ComponentFixture<NiceDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiceDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiceDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
