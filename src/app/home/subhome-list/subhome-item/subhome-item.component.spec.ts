import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubhomeItemComponent } from './subhome-item.component';

describe('SubhomeItemComponent', () => {
  let component: SubhomeItemComponent;
  let fixture: ComponentFixture<SubhomeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubhomeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubhomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
