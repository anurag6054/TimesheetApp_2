import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetimesheetComponent } from './createtimesheet.component';

describe('CreatetimesheetComponent', () => {
  let component: CreatetimesheetComponent;
  let fixture: ComponentFixture<CreatetimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
