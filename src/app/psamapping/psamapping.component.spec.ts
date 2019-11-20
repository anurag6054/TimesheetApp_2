import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsamappingComponent } from './psamapping.component';

describe('PsamappingComponent', () => {
  let component: PsamappingComponent;
  let fixture: ComponentFixture<PsamappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsamappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsamappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
