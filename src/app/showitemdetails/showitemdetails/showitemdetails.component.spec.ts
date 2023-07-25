import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowitemdetailsComponent } from './showitemdetails.component';

describe('ShowitemdetailsComponent', () => {
  let component: ShowitemdetailsComponent;
  let fixture: ComponentFixture<ShowitemdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowitemdetailsComponent]
    });
    fixture = TestBed.createComponent(ShowitemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
