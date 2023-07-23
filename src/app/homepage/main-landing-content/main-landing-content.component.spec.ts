import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLandingContentComponent } from './main-landing-content.component';

describe('MainLandingContentComponent', () => {
  let component: MainLandingContentComponent;
  let fixture: ComponentFixture<MainLandingContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLandingContentComponent]
    });
    fixture = TestBed.createComponent(MainLandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
