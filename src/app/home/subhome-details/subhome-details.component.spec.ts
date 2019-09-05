import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhomeDetailsComponent } from './subhome-details.component';

describe('SubhomeDetailsComponent', () => {
  let component: SubhomeDetailsComponent;
  let fixture: ComponentFixture<SubhomeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubhomeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubhomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
