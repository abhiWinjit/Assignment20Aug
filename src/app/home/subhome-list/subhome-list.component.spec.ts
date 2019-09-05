import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhomeListComponent } from './subhome-list.component';

describe('SubhomeListComponent', () => {
  let component: SubhomeListComponent;
  let fixture: ComponentFixture<SubhomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubhomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubhomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
