import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusertimesheetComponent } from './viewusertimesheet.component';

describe('ViewusertimesheetComponent', () => {
  let component: ViewusertimesheetComponent;
  let fixture: ComponentFixture<ViewusertimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewusertimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewusertimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
