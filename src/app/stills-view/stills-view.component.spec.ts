import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StillsViewComponent } from './stills-view.component';

describe('StillsViewComponent', () => {
  let component: StillsViewComponent;
  let fixture: ComponentFixture<StillsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StillsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StillsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
