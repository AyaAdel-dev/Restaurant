import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoworderdetailsComponent } from './showorderdetails.component';

describe('ShoworderdetailsComponent', () => {
  let component: ShoworderdetailsComponent;
  let fixture: ComponentFixture<ShoworderdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoworderdetailsComponent]
    });
    fixture = TestBed.createComponent(ShoworderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
