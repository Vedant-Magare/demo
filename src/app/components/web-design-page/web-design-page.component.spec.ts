import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignPageComponent } from './web-design-page.component';

describe('WebDesignPageComponent', () => {
  let component: WebDesignPageComponent;
  let fixture: ComponentFixture<WebDesignPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebDesignPageComponent]
    });
    fixture = TestBed.createComponent(WebDesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
