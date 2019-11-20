import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedtimesheetComponent } from './savedtimesheet.component';

describe('SavedtimesheetComponent', () => {
  let component: SavedtimesheetComponent;
  let fixture: ComponentFixture<SavedtimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedtimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedtimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
