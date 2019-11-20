import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkunitdetailComponent } from './workunitdetail.component';

describe('WorkunitdetailComponent', () => {
  let component: WorkunitdetailComponent;
  let fixture: ComponentFixture<WorkunitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkunitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkunitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
