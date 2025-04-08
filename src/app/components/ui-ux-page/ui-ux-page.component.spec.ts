import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxPageComponent } from './ui-ux-page.component';

describe('UiUxPageComponent', () => {
  let component: UiUxPageComponent;
  let fixture: ComponentFixture<UiUxPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiUxPageComponent]
    });
    fixture = TestBed.createComponent(UiUxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
