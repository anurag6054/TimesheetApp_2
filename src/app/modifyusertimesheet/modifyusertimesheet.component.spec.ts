import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyusertimesheetComponent } from './modifyusertimesheet.component';

describe('ModifyusertimesheetComponent', () => {
  let component: ModifyusertimesheetComponent;
  let fixture: ComponentFixture<ModifyusertimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyusertimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyusertimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
