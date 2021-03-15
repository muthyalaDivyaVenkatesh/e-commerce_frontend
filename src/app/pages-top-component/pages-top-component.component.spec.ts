import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesTopComponentComponent } from './pages-top-component.component';

describe('PagesTopComponentComponent', () => {
  let component: PagesTopComponentComponent;
  let fixture: ComponentFixture<PagesTopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesTopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
