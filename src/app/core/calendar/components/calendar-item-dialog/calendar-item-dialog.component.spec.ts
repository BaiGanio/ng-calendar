import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarItemDialogComponent } from './calendar-item-dialog.component';

describe('CalendarItemDialogComponent', () => {
  let component: CalendarItemDialogComponent;
  let fixture: ComponentFixture<CalendarItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
