import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignPageComponent } from './graphic-design-page.component';

describe('GraphicDesignPageComponent', () => {
  let component: GraphicDesignPageComponent;
  let fixture: ComponentFixture<GraphicDesignPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicDesignPageComponent]
    });
    fixture = TestBed.createComponent(GraphicDesignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
