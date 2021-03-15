import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailZoomComponent } from './trail-zoom.component';

describe('TrailZoomComponent', () => {
  let component: TrailZoomComponent;
  let fixture: ComponentFixture<TrailZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
